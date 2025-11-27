import React, { useState, useRef } from 'react';
import { editImageWithGemini } from '../services/geminiService';

const ImageEditor: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedMimeType, setSelectedMimeType] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size too large. Please upload an image under 5MB.");
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setSelectedImage(result);
        setSelectedMimeType(file.type);
        setGeneratedImage(null); // Reset generated image on new upload
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) {
      setError("Please upload an image and provide a prompt.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Remove Data URI prefix to get raw base64
      const base64Data = selectedImage.split(',')[1];
      
      const resultBase64 = await editImageWithGemini(base64Data, selectedMimeType, prompt);
      
      if (resultBase64) {
        setGeneratedImage(`data:image/png;base64,${resultBase64}`);
      } else {
        setError("Failed to generate image. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while communicating with the AI. Please check your API key and connection.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-brand-600 p-8 text-white text-center">
          <h2 className="text-3xl font-serif mb-2">AI Food Studio</h2>
          <p className="opacity-90">Transform your food photos with AI magic. Add steam, change backgrounds, or apply retro filters.</p>
        </div>

        <div className="p-8 space-y-8">
          
          {/* Upload Section */}
          <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 text-center hover:bg-stone-50 transition-colors relative">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {!selectedImage ? (
              <div className="space-y-2 pointer-events-none">
                <svg className="w-12 h-12 text-stone-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p className="font-semibold text-stone-600">Click or Drag to Upload Food Photo</p>
                <p className="text-sm text-stone-400">Supports JPG, PNG (Max 5MB)</p>
              </div>
            ) : (
              <div className="relative inline-block group">
                 <img src={selectedImage} alt="Original" className="max-h-64 rounded-lg shadow-sm" />
                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none">
                    <span className="text-white font-medium">Click to change image</span>
                 </div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="space-y-4">
             <label className="block text-sm font-medium text-stone-700">How should we change this image?</label>
             <div className="flex gap-2">
               <input
                 type="text"
                 value={prompt}
                 onChange={(e) => setPrompt(e.target.value)}
                 placeholder="e.g., 'Add a retro filter', 'Make it look spicy', 'Remove the spoon'"
                 className="flex-1 p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-shadow"
                 onKeyDown={(e) => e.key === 'Enter' && !loading && handleGenerate()}
               />
               <button
                 onClick={handleGenerate}
                 disabled={loading || !selectedImage || !prompt}
                 className={`px-6 py-3 rounded-lg font-bold text-white transition-all transform active:scale-95 ${
                   loading || !selectedImage || !prompt 
                   ? 'bg-stone-400 cursor-not-allowed' 
                   : 'bg-brand-600 hover:bg-brand-700 hover:shadow-lg'
                 }`}
               >
                 {loading ? (
                   <span className="flex items-center gap-2">
                     <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     Processing...
                   </span>
                 ) : (
                   'Magic Edit ✨'
                 )}
               </button>
             </div>
             {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          {/* Results */}
          {generatedImage && (
            <div className="animate-slide-up bg-stone-50 rounded-xl p-6 border border-stone-200">
               <h3 className="font-serif text-xl mb-4 text-center">Transformation Result</h3>
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Before</p>
                    <img src={selectedImage || ''} alt="Original" className="rounded-lg shadow w-full object-cover max-h-80" />
                  </div>
                  <div className="text-center relative">
                    <p className="text-xs uppercase tracking-widest text-brand-600 font-bold mb-2">After</p>
                    <img src={generatedImage} alt="AI Generated" className="rounded-lg shadow-lg ring-4 ring-brand-100 w-full object-cover max-h-80" />
                    <a 
                      href={generatedImage} 
                      download="anupama-ai-edit.png" 
                      className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow hover:bg-white text-stone-700 transition-colors"
                      title="Download Image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    </a>
                  </div>
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ImageEditor;