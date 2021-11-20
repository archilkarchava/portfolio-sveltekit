import preprocess from 'svelte-preprocess';
import path from 'path';
import cloudflare from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: [
    preprocess({
      postcss: true
    })
  ],

  kit: {
    adapter: cloudflare(),
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          $components: path.resolve('./src/components'),
          $lib: path.resolve('./src/lib'),
          $routes: path.resolve('./src/routes'),
          $assets: path.resolve('./src/assets'),
          $style: path.resolve('./src/style'),
          $types: path.resolve('./src/types')
        }
      }
    }
  }
};
