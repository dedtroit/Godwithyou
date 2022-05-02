<script>
	import { onMount } from 'svelte';
	import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
	import { Swiper, SwiperSlide } from "swiper/svelte";
  
	// Import Pages

	import Home from "../components/pages/Home.svelte";
  
	// Import Swiper styles
	import "swiper/css";
	import "swiper/css/navigation";
	import "swiper/css/pagination";
	import "swiper/css/scrollbar";
  
	let swiper = null;
  
	function onSwiper(e) {
	  const [s] = e.detail;
	  swiper = s;
	}
	$: console.log(swiper);
  
	function goTo(page) {
		let num = "";
		switch(page) {
			case "home": num = 0; break;
			case "details": num = 1; break;
			case "videos": num = 2; break;
			case "about": num = 3; break;
			case "contact": num = 4; break;
			case "Q_A": num = 5; break;
			default: num = 0;
		}
		try {
		  swiper.slideTo(num);
		} catch (err) {
			console.log(err)
		}
	  
	}
  
	let url = ``;
  
	onMount(() => url = window.location.hash);
  
	$: console.log(url)
	$: switch (url) {
		case "#home": goTo('home'); break;
		case "#details": goTo('details'); break;
		case "#videos": goTo('videos'); break;
		case "#about": goTo('about'); break;
		case "#contact": goTo('contact'); break;
		case "#Q_A": goTo('Q_A'); break;
	}
  </script>
  
  <main>
	<Swiper
	  modules={[Navigation, A11y, Scrollbar, Mousewheel]}
	  slidesPerView={1}
	  on:slideChange={() => console.log("slide change")}
	  on:swiper={onSwiper}
	  mousewheel={{sensitivity: .5}}
	  speed={750}
	>
	  <SwiperSlide>
			<div class="page">
				<div class="padding">
					<Home goTo={goTo} />
				</div>
			</div>
	  </SwiperSlide>
	 
	
  
	</Swiper>
  </main>
  
  <style>
	main {
	  height: 100%;
	  position: relative;
	}
	.page {
	  height: 100%;
	}
  
	.page .padding {
		padding-left: 50px;
		height: 100%;
	}
  
	
	@media only screen and (max-width: 600px) {
		.page .padding {
			padding-left: 30px;
		}
	}
  
  </style>