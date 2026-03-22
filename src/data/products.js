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
  "Almonds (Badam)": "/almond.webp",
  "Cashews (Kaju)": "/Cashews (Kaju).webp",
  "Walnuts (Akhrot)": "/Walnuts.webp",
  "Pistachios (Pista)": "/Pistachios.webp",
  "Golden Raisins (Kishmish)": "/kismish.webp",
  "Black Raisins": "/kismish.webp", // reusing kishmish
  "Dried Figs (Anjeer)": "/Dried Figs.webp",
  "Dried Apricots (Khubani)": "/Dried apricot.webp",
  "Prunes (Aloo Bukhara)": "/Prunes.webp",
  "Dried Cranberries": "/cranberries.webp",
  "Hazelnuts (Pahadi Badam)": "/Hazelnuts.webp",
  "Brazil Nuts": "/brazil nuts.webp",
  "Pine Nuts (Chilgoza)": "/Pine nuts.webp",
  "Fox Nuts (Makhana)": "/Fox nuts Makhana.webp",
  "Dried Coconut (Copra)": "/dried coconut.webp",
  "Dried Mango (Sukha Aam)": "/dried mango.webp",
  "Dried Banana (Sukha)": "/Dry Banana.webp",
  "Dried Apple (Seb)": "/dry apples.webp",
  "Dried Grapes": "/dry grapes.webp",
  "Dried Cherries": "/dried cherries.webp",
  "Orange Slices": "/dry oranges.webp",
  "Dried Papaya": "/dry papaya.webp",
  "Dried Kiwi": "/dry kiwi.webp",
  "Dried Pineapple": "/dry pine appls.webp",
  "Mixed Berries": "/Dried mixed berries.webp",
  "Goji Berries": "/dried goji.webp",
  "Dried Mulberries": "/Dried mulberries.webp",
  "Apricot Halves": "/Dried apricot.webp", // reusing apricot
  "Dried Lychee": "/dried lychee.webp"
};

const healthGoalOptions = ['Immunity Booster', 'Brain Power', 'Skin Glow', 'Weight Management'];

// Dynamic storytelling generators
const getSource = (name) => {
  if (name.includes('Pine Nut')) return 'Kinnaur, Himalayas';
  if (name.includes('Almond')) return 'San Joaquin Valley, California';
  if (name.includes('Walnut')) return 'Kashmir Valley';
  if (name.includes('Pistachio')) return 'Rafsanjan, Iran';
  if (name.includes('Fig') || name.includes('Apricot')) return 'Izmir, Turkey';
  if (name.includes('Dates')) return 'Jordan Valley';
  if (name.includes('Hazelnut')) return 'Black Sea Region, Turkey';
  if (name.includes('Brazil')) return 'Amazon Rainforest, Brazil';
  return 'Premium Global Orchards';
};

const getHealthGoals = (name) => {
  const goals = [];
  if (['Almond', 'Walnut', 'Pine Nut', 'Cashew'].some(n => name.includes(n))) goals.push('Brain Power');
  if (['Fig', 'Prune', 'Dates', 'Raisin', 'Mango'].some(n => name.includes(n))) goals.push('Immunity Booster');
  if (['Cashew', 'Brazil', 'Hazelnut', 'Almond'].some(n => name.includes(n))) goals.push('Skin Glow');
  if (['Makhana', 'Apple', 'Berries', 'Pineapple', 'Kiwi'].some(n => name.includes(n))) goals.push('Weight Management');
  if (goals.length === 0) goals.push('Immunity Booster');
  // Randomize a secondary goal occasionally for richness
  if (goals.length === 1 && Math.random() > 0.4) {
      const extra = healthGoalOptions[Math.floor(Math.random() * healthGoalOptions.length)];
      if(!goals.includes(extra)) goals.push(extra);
  }
  return [...new Set(goals)];
};

const getNutrientBadge = (name) => {
  if (name.includes('Walnut')) return 'High Omega-3';
  if (name.includes('Dates')) return 'Rich in Iron';
  if (name.includes('Almond')) return 'Vitamin E Hub';
  if (name.includes('Fig')) return 'High Fiber';
  if (name.includes('Pine Nut')) return 'Pinolenic Acid';
  if (name.includes('Makhana')) return 'Low Calorie Protein';
  if (name.includes('Cashew')) return 'Heart Healthy Magnesium';
  if (name.includes('Brazil')) return 'High Selenium';
  return 'Antioxidant Rich';
};

const getTasteProfile = (name) => {
  if (name.includes('Nut') || name.includes('Cashew') || name.includes('Almond') || name.includes('Walnut')) return ['Crunchy', 'Earthy', 'Buttery'];
  if (name.includes('Fig') || name.includes('Dates') || name.includes('Raisin')) return ['Chewy', 'Caramel-like', 'Intense Sweetness'];
  if (name.includes('Berries') || name.includes('Cherry') || name.includes('Kiwi')) return ['Tart', 'Tangy', 'Vibrant'];
  if (name.includes('Mango') || name.includes('Pineapple')) return ['Tropical', 'Sweet', 'Juicy'];
  return ['Naturally Sweet', 'Wholesome Crunch'];
};

const getPairedWith = (name) => {
  if (name.includes('Nut') || name.includes('Cashew') || name.includes('Almond')) return ['Dark Chocolate', 'Aged Cheese', 'Morning Oats', 'Aged Wine'];
  if (name.includes('Berries') || name.includes('Mango') || name.includes('Kiwi')) return ['Greek Yogurt', 'Smoothie Bowls', 'White Tea'];
  if (name.includes('Dates') || name.includes('Fig')) return ['Goat Cheese', 'Espresso', 'Walnuts', 'Prosciutto'];
  return ['Green Tea', 'Fresh Salads', 'Charcuterie Boards'];
};

const getStory = (name, source) => `Hand-picked and traditionally sun-dried directly from ${source}. Our exquisite ${name.toLowerCase()} unconditionally offer an uncompromising standard of modern luxury, delivering exceptionally dense nutrition and profoundly extraordinary flavor complexity in every single bite. Fully traceable directly back to the very soil it was grown in.`;

export const products = productNames.map((name, i) => {
  const basePrice = 499 + (i * 15);
  const shortName = name.split(' (')[0].replace(' ', '+'); 
  
  // Default to placehold.co if image is missing from public/ (e.g. Dates and Coconut)
  let imageUrl = `https://placehold.co/800x800/2B1D14/F5EFEB?text=${shortName}&font=Lora`;

  if (imageMap[name]) {
    imageUrl = imageMap[name];
  }

  const sourceStr = getSource(name);

  return {
    id: i + 1,
    name,
    image: imageUrl,
    oldPrice: basePrice + 350,
    price: basePrice,
    source: sourceStr,
    story: getStory(name, sourceStr),
    healthGoals: getHealthGoals(name),
    nutrientBadge: getNutrientBadge(name),
    tasteProfile: getTasteProfile(name),
    pairedWith: getPairedWith(name),
    summary: getStory(name, sourceStr), // Fallback for existing components
    serving: getPairedWith(name).join(', ') // Fallback for existing components
  };
});
