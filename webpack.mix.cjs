


const mix = require('laravel-mix');

require('mix-tailwindcss');
mix.js('resources/js/app.js', 'public/js')
   .react();
mix.sass('resources/sass/app.scss', 'public/css')
   .tailwind('./tailwindcss-config.js');

mix.postCss('resources/css/app.css', 'public/css')
   .tailwind();
   

mix.webpackConfig({
   resolve: {
      extensions: ['.*', '.wasm', '.mjs', '.js', '.jsx', '.json'],
  },
  
  
  });
  