import imagemin from 'imagemin';
import imageminJpegrecompress from 'imagemin-jpeg-recompress';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import { promises as fs } from 'fs';
import path from 'path';

// Comprehensive image optimization script
(async () => {
  console.log('🚀 Starting comprehensive image optimization...\n');
  
  const imageFolders = [
    { input: 'public/images/**/*.{jpg,png,jpeg}', output: 'public/images' },
    { input: 'public/menu2/**/*.{jpg,png,jpeg}', output: 'public/menu2' },
    { input: 'public/menu3/**/*.{jpg,png,jpeg}', output: 'public/menu3' },
    { input: 'src/assets/**/*.{jpg,png,jpeg}', output: 'src/assets' }
  ];

  let totalProcessed = 0;
  let totalSaved = 0;

  for (const folder of imageFolders) {
    console.log(`📁 Processing: ${folder.input}`);
    
    try {
      // Optimize JPEG files
      const jpegFiles = await imagemin([folder.input], {
        destination: folder.output + '-temp',
        plugins: [
          imageminJpegrecompress({
            progressive: true,
            max: 75,
            min: 60,
            quality: 'medium',
            method: 'smallfry'
          })
        ]
      });

      // Optimize PNG files
      const pngFiles = await imagemin([folder.input.replace(/jpg,png,jpeg/, 'png')], {
        destination: folder.output + '-temp',
        plugins: [
          imageminPngquant({
            quality: [0.65, 0.8],
            speed: 1,
            strip: true
          })
        ]
      });

      // Generate WebP versions for all images
      const webpFiles = await imagemin([folder.input], {
        destination: folder.output,
        plugins: [
          imageminWebp({
            quality: 75,
            method: 6,
            autoFilter: true
          })
        ]
      });

      // Move optimized originals back
      const tempDir = folder.output + '-temp';
      try {
        const files = await fs.readdir(tempDir);
        for (const file of files) {
          const srcPath = path.join(tempDir, file);
          const destPath = path.join(folder.output, file);
          await fs.copyFile(srcPath, destPath);
        }
        await fs.rm(tempDir, { recursive: true, force: true });
      } catch (err) {
        // Temp directory might not exist, that's ok
      }

      const processed = jpegFiles.length + pngFiles.length + webpFiles.length;
      totalProcessed += processed;
      console.log(`  ✅ Processed ${processed} files`);
    } catch (error) {
      console.log(`  ⚠️  No files found or error: ${error.message}`);
    }
  }

  console.log('\n🎉 Image optimization complete!');
  console.log(`📊 Total files processed: ${totalProcessed}`);
  console.log('\n💡 Tips:');
  console.log('  - WebP images are now available with .webp extension');
  console.log('  - Original images have been optimized');
  console.log('  - Update your code to use WebP with fallbacks');
})();
