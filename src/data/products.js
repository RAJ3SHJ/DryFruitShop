const productNames = [
  "Almonds (Badam)", "Cashews (Kaju)", "Walnuts (Akhrot)", "Pistachios (Pista)", 
  "Golden Raisins (Kishmish)", "Black Raisins", "Dried Figs (Anjeer)", 
  "Dried Apricots (Khubani)", "Prunes (Aloo Bukhara)", "Dried Cranberries", "Hazelnuts (Pahadi Badam)", 
  "Brazil Nuts", "Pine Nuts (Chilgoza)", "Fox Nuts (Makhana)", "Dried Coconut (Copra)", 
  "Dried Mango (Sukha Aam)", "Dried Banana (Sukha)", "Dried Apple (Seb)", "Dried Grapes", 
  "Dried Cherries", "Orange Slices", "Dried Papaya", "Dried Kiwi", 
  "Dried Pineapple", "Mixed Berries", "Goji Berries", "Dried Mulberries", 
  "Apricot Halves", "Dried Lychee"
];

const imageMap = {
  "Almonds (Badam)": "/almond.png",
  "Cashews (Kaju)": "/Cashews (Kaju).png",
  "Walnuts (Akhrot)": "/Walnuts.png",
  "Pistachios (Pista)": "/Pistachios.png",
  "Golden Raisins (Kishmish)": "/kismish.png",
  "Black Raisins": "/kismish.png", // reusing kishmish
  "Dried Figs (Anjeer)": "/Dried Figs.png",
  "Dried Apricots (Khubani)": "/Dried apricot.png",
  "Prunes (Aloo Bukhara)": "/Prunes.png",
  "Dried Cranberries": "/cranberries.png",
  "Hazelnuts (Pahadi Badam)": "/Hazelnuts.png",
  "Brazil Nuts": "/brazil nuts.png",
  "Pine Nuts (Chilgoza)": "/Pine nuts.png",
  "Fox Nuts (Makhana)": "/Fox nuts Makhana.png",
  "Dried Coconut (Copra)": "/dried coconut.png",
  "Dried Mango (Sukha Aam)": "/dried mango.png",
  "Dried Banana (Sukha)": "/Dry Banana.png",
  "Dried Apple (Seb)": "/dry apples.png",
  "Dried Grapes": "/dry grapes.png",
  "Dried Cherries": "/dried cherries.png",
  "Orange Slices": "/dry oranges.png",
  "Dried Papaya": "/dry papaya.png",
  "Dried Kiwi": "/dry kiwi.png",
  "Dried Pineapple": "/dry pine appls.png",
  "Mixed Berries": "/Dried mixed berries.png",
  "Goji Berries": "/dried goji.png",
  "Dried Mulberries": "/Dried mulberries.png",
  "Apricot Halves": "/Dried apricot.png", // reusing apricot
  "Dried Lychee": "/dried lychee.png"
};

export const products = productNames.map((name, i) => {
  const basePrice = 499 + (i * 15);
  const shortName = name.split(' (')[0].replace(' ', '+'); 
  
  // Default to placehold.co if image is missing from public/ (e.g. Dates and Coconut)
  let imageUrl = `https://placehold.co/800x800/2B1D14/F5EFEB?text=${shortName}&font=Lora`;

  if (imageMap[name]) {
    imageUrl = imageMap[name];
  }

  const getSummary = (n) => `Premium, hand-selected ${n.toLowerCase()} representing the finest quality. Rich in natural nutrients, antioxidants, and healthy fats. Sourced from the best farms to guarantee freshness and crunch in every bite.`;
  const getServing = (n) => `Enjoy a handful directly as a wholesome snack, sprinkle over your morning cereal or yogurt, or incorporate into your favorite baked goods and salads for an extra layer of texture and taste.`;

  return {
    id: i + 1,
    name,
    image: imageUrl,
    oldPrice: basePrice + 350,
    price: basePrice,
    summary: getSummary(name),
    serving: getServing(name)
  };
});
