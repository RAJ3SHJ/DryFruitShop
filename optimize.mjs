import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function optimizeImages() {
  console.log('Starting image optimization...');
  const files = fs.readdirSync(publicDir);
  let optimized = 0;
  
  for (const file of files) {
    if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
      const inputPath = path.join(publicDir, file);
      const name = path.parse(file).name;
      const outputPath = path.join(publicDir, `${name}.webp`);
      
      console.log(`Optimizing: ${file}...`);
      
      try {
        await sharp(inputPath)
          .resize(800, 800, { fit: 'cover' })
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
          
        // Delete the original bloated element
        fs.unlinkSync(inputPath);
        optimized++;
      } catch (err) {
        console.error(`Failed to process ${file}:`, err);
      }
    }
  }
  
  // Also optimize the Hero image specifically to wider 1600 since it is full background
  if (fs.existsSync(path.join(publicDir, 'Hero Pine Nuts.png'))) {
     try {
       await sharp(path.join(publicDir, 'Hero Pine Nuts.png'))
          .resize(1920, 1080, { fit: 'cover' })
          .webp({ quality: 85, effort: 6 })
          .toFile(path.join(publicDir, 'Hero Pine Nuts.webp'));
       fs.unlinkSync(path.join(publicDir, 'Hero Pine Nuts.png'));
     } catch(err) {}
  }
  
  console.log(`\nSuccessfully crushed and converted ${optimized} image layers to lightning fast WEBP!`);
}

optimizeImages().catch(console.error);
