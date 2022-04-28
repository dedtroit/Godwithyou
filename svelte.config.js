import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})},
	
}


export default config;



	//extensions: ['.svelte', '.md'],

	//preprocess: [
	//	sveltePreprocess(),
	//	mdsvex({
	//	  extensions: ['.md'],
	//	  layout: {
	//		blog: 'src/routes/blog/_post.svelte'
	//	  }
	//	})
	//  ]
