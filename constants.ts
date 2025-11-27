import { MenuSection, TimingInfo } from './types';

export const TIMINGS: TimingInfo[] = [
  {
    category: "TIFFINS",
    times: ["6:00 AM to 11:45 AM", "6:00 PM to 10:00 PM"]
  },
  {
    category: "VEG MEALS",
    times: ["12:00 PM to 04:00 PM"]
  },
  {
    category: "VEG BIRYANI & CURRIES",
    times: ["06:00 PM to 09:00 PM"]
  },
  {
    category: "NON VEG BIRYANIS & SPECIALS",
    times: ["12:00 PM to 03:30 PM", "06:30 PM to 10:00 PM"]
  }
];

export const MENU_DATA: MenuSection[] = [
  {
    title: "NON-VEG BIRYANI",
    items: [
      { name: "CHICKEN DUM/FRY BIRYANI", price: "₹130/-" },
      { name: "CHICKEN LOLLIPOP BIRYANI", price: "₹140/-" },
      { name: "CHICKEN WINGS BIRYANI", price: "₹150/-" },
      { name: "CHILLY CHICKEN BIRYANI", price: "₹150/-" },
      { name: "CHICKEN 65 BIRYANI", price: "₹150/-" },
      { name: "CHICKEN MUGHLAI BIRYANI", price: "₹150/-" },
      { name: "MIXED BIRYANI (CHICKEN,PRAWN)", price: "₹180/-" },
      { name: "FISH BIRYANI", price: "₹150/-" },
      { name: "PRAWN BIRYANI", price: "₹190/-" },
      { name: "MUTTON BIRYANI", price: "₹300/-" }
    ]
  },
  {
    title: "VEG BIRYANI",
    items: [
      { name: "VEG BIRYANI", price: "₹100/-" },
      { name: "KAJU BIRYANI", price: "₹140/-" },
      { name: "MUSHROOM BIRYANI", price: "₹140/-" },
      { name: "PANEER BIRYANI", price: "₹150/-" },
      { name: "KAJU PANNER BIRYANI", price: "₹160/-" }
    ]
  },
  {
    title: "NON-VEG FRIED RICE",
    items: [
      { name: "EGG FRIED RICE", price: "₹90/-" },
      { name: "CHICKEN FRIED RICE", price: "₹120/-" },
      { name: "CHICKEN SCHEZWAN FRIED RICE", price: "₹130/-" },
      { name: "MIXED(CHICKEN AND PRAWN) FRIED RICE", price: "₹180/-" },
      { name: "PRAWN FRIED RICE", price: "₹190/-" }
    ]
  },
  {
    title: "VEG FRIED RICE",
    items: [
      { name: "VEG FRIED RICE", price: "₹100/-" },
      { name: "VEG SCHEZWAN FRIED RICE", price: "₹120/-" },
      { name: "KAJU FRIED RICE", price: "₹140/-" },
      { name: "MUSHROOM FRIED RICE", price: "₹140/-" },
      { name: "BABY CORN FRIED RICE", price: "₹140/-" },
      { name: "VEG MIXED FRIED RICE", price: "₹140/-" },
      { name: "VEG MANCHURIAN FRIED RICE", price: "₹140/-" },
      { name: "PANEER FRIED RICE", price: "₹150/-" }
    ]
  },
  {
    title: "TIFFINS",
    items: [
        { name: "Idly (3)", price: "₹40/-" },
        { name: "Sambar Idly (2)", price: "₹40/-" },
        { name: "GHEE KARAM IDLY(2)", price: "₹40/-" },
        { name: "MYSORE BONDA(4)", price: "₹40/-" },
        { name: "UPMA", price: "₹40/-" },
        { name: "VADA(3)", price: "₹50/-" },
        { name: "SAMBAR VADA(2)", price: "₹50/-" },
        { name: "IDLY(2)+ VADA COMBO(2)", price: "₹50/-" },
        { name: "CURD VADA(2)", price: "₹60/-" },
        { name: "PLANE DOSA", price: "₹50/-" },
        { name: "MASALA DOSA", price: "₹60/-" },
        { name: "UPMA DOSA", price: "₹60/-" },
        { name: "ONION DOSA", price: "₹60/-" },
        { name: "GHEE MASALA DOSA", price: "₹70/-" },
        { name: "GHEE ONION DOSA", price: "₹70/-" },
        { name: "PLAIN RAVA DOSA", price: "₹55/-" },
        { name: "ONION RAVA DOSA", price: "₹65/-" },
        { name: "RAVA MASALA DOSA", price: "₹70/-" },
        { name: "RAVA ONION DOSA", price: "₹75/-" },
        { name: "70 MM M.L.A DOSA", price: "₹75/-" },
        { name: "70 MM MASALA DOSA", price: "₹80/-" },
        { name: "GHEE KARAM DOSA", price: "₹70/-" },
        { name: "GHEE PLANE DOSA", price: "₹60/-" },
        { name: "PLANE PESARA", price: "₹50/-" },
        { name: "ONION PESARA", price: "₹60/-" },
        { name: "UPMA PESARA", price: "₹60/-" },
        { name: "PLANE UTHAPPAM", price: "₹60/-" },
        { name: "ONION UTHAPPAM", price: "₹70/-" },
        { name: "CHAPATI", price: "₹60/-" },
        { name: "PAROTA", price: "₹60/-" },
        { name: "POORI", price: "₹60/-" },
    ]
  },
  {
      title: "JUICES",
      items: [
        { name: "WITHOUT ICE ANY JUICE", price: "₹60/-" },
        { name: "Grape JUICE", price: "₹50/-" },
        { name: "Pine apple JUICE", price: "₹50/-" },
        { name: "PAPPAYA JUICE", price: "₹50/-" },
        { name: "MOSAMBI JUICE", price: "₹50/-" },
        { name: "WATERMELON JUICE", price: "₹50/-" },
        { name: "MUSKMELON JUICE", price: "₹50/-" },
        { name: "CARROT JUICE", price: "₹50/-" },
        { name: "BEETROOT JUICE", price: "₹50/-" },
        { name: "BANANA JUICE", price: "₹50/-" },
      ]
  },
  {
      title: "SIGNATURE SHAKES",
      items: [
        { name: "CHOCOLATE SHAKE", price: "₹80/-" },
        { name: "STRAWBERRY SHAKE", price: "₹80/-" },
        { name: "BUTTERSCOTCH SHAKE", price: "₹80/-" },
        { name: "VANILLA SHAKE", price: "₹80/-" },
        { name: "BADAM SHAKE", price: "₹80/-" },
        { name: "BLACK CURRENT SHAKE", price: "₹80/-" },
        { name: "MANGO SHAKE", price: "₹80/-" },
        { name: "DRY FRUITS SHAKE", price: "₹80/-" },
        { name: "MIXED FRUIT SHAKE", price: "₹80/-" },
        { name: "POMEGRANATE", price: "₹90/-" },
      ]
  }
];