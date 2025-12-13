import imagemin from 'imagemin';
import imageminJpegrecompress from 'imagemin-jpeg-recompress';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
  console.log('Starting image compression...\n');
  
  const files = await imagemin(['public/images/**/*.{jpg,png,jpeg}', 'public/menu2/**/*.{jpg,png,jpeg}'], {
    destination: 'public/images-optimized',
    plugins: [
      imageminJpegrecompress({
        progressive: true,
        max: 80,
        min: 70
      }),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log('\n✅ Compression complete!');
  console.log(`Total files processed: ${files.length}`);
})();
