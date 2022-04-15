<script>
  export let goTo;

  let videoPlaying = false;
  let playingID;
  function playVideo(id) {
    videoPlaying = true;
    playingID = id;
  }

  function stopVideo() {
    videoPlaying = false;
  }

  let active = 0;
  function clearActive() {
    active = 0;
  }

  $: console.log(active);
</script>

<div class="content">
  {#if videoPlaying}
    <div class="player-model">
      <div class="player-close" on:click={stopVideo}>
        <img src="/images/x.png" alt="close">
      </div>
      <div class="video-player">
        <iframe
          width="80%"
          height="80%"
          src="https://www.youtube.com/embed/{playingID}?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  {/if}
  <div class="videos-wrapper">
    <div class="title">MUSIC VIDEOS</div>
    <div class="videos">
      <div
        class={active === 1 ? "vid active" : "vid"}
        on:mouseenter={() => {
          active = 1;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("fiEI0SF_Bgg");
        }}
      >
        <img class="video" src="/images/thumbs/free.webp" alt="video" />
      </div>
      <div
        class={active === 2 ? "vid active" : "vid"}
        on:mouseenter={() => {
          active = 2;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("69lu3JinuO0");
        }}
      >
        <img class="video" src="/images/thumbs/nottoday.webp" alt="video" />
      </div>
      <div
        class={active === 3 ? "vid hideVideo active" : "vid hideVideo"}
        on:mouseenter={() => {
          active = 3;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("E4Qyt10AZZo");
        }}
      >
        <img class="video" src="/images/thumbs/world.webp" alt="video" />
      </div>
      <div
        class={active === 4 ? "vid hideVideo active" : "vid hideVideo"}
        on:mouseenter={() => {
          active = 4;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("k_LUKn03gZA");
        }}
      >
        <img class="video" src="/images/thumbs/adam1.webp" alt="video" />
      </div>
      </div>
    <div class="title">PROMO VIDEOS</div>
    <div class="videos">
      <div
        class={active === 5 ? "vid active" : "vid"}
        on:mouseenter={() => {
          active = 5;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("sYxyOT_M7VE");
        }}
      >
        <img class="video" src="/images/thumbs/Liberty university airforce.jpg" alt="video" />
      </div>
      <div
        class={active === 6 ? "vid active" : "vid"}
        on:mouseenter={() => {
          active = 6;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("eAz80xwOoSw");
        }}
      >
        <img class="video" src="/images/thumbs/otbt.jpg" alt="video" />
      </div>
      <div
        class={active === 7 ? "vid  active" : "vid"}
        on:mouseenter={() => {
          active = 7;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("40b3I0i0rbk");
        }}
      >
        <img class="video" src="/images/thumbs/car.jpg" alt="video" />
      </div>

      <div
        class={active === 8 ? "vid  active" : "vid"}
        on:mouseenter={() => {
          active = 8;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("N8ThBhwXEhs");
        }}
      >
        <img class="video" src="/images/thumbs/crazy.webp" alt="video" />
      </div>
    </div>
  </div>

  <div class="testimonials">
    <div class="title">TESTIMONIALS</div>
    <div class="videos">
      <div
        class={active === 9 ? "vid  active" : "vid"}
        on:mouseenter={() => {
          active = 9;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("IEjBCIugLjg");
        }}
      >
        <img class="video" src="/images/thumbs/wogo.jpg" alt="video" />
      </div>
      <div
        class={active === 10 ? "vid  active" : "vid"}
        on:mouseenter={() => {
          active = 10;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("xT5jfGwMS-4");
        }}
      >
        <img class="video" src="/images/thumbs/isac.jpg" alt="video" />
      </div>
      <div
        class={active === 11 ? "vid hideTest2 active" : "vid hideTest2"}
        on:mouseenter={() => {
          active = 11;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("cxWYRQxPkwI");
        }}
      >
        <img class="video" src="/images/thumbs/lovel.jpg" alt="video" />
      </div>
    </div>
  </div>
  <div class="contact">
     <div><a href="https://5f05y4m0px6.typeform.com/to/MeYHcHxE" class="contact">GET FREE QUOTE</a></div>
  </div>
  <div></div>
</div>

<style>
  .player-model {
    position: absolute;
    background-color: #00000055;
    width: 100vw;
    height: 100%;
    z-index: 10;
  }

  .player-close {
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 20px;
    padding: 5px;
  }

  .player-close img{
    width: 30px;

  }

  .active {
    opacity: 0.8;
  }

  .vid:after {
    position: absolute;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 44px;
    background: url("/images/playhead.png");
    background-size: cover;
    content: "";
    cursor: pointer;
  }

  .video-player {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .vid {
    height: fit-content;
    display: inline-block;
    flex-direction: column;
    position: relative;
    cursor: pointer;
  }

  .content {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding-right: 50px;
    justify-content: space-between;
    align-items: center;
  }

  .content .title {
    padding-top: 15px;
    padding-bottom: 5px;
  }

  .videos-wrapper .title {
    padding-right: 0px;
    text-align: left;
  }

  .testimonials .title {
    padding-left: 0px;
  }

  .content div:last-child {
    padding-bottom: 20px;
  }

  .title {
    font-size: 30px;
    color: white;
  }

  .video {
    width: 100%;
    max-width: 200px;
  }

  .videos {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1920px;
  }

  .testimonials .videos {
    grid-template-columns: repeat(3, 1fr);
  }

  .contact {
    color: white;
    font-size: 12px;
    margin-bottom: 20px;
    cursor: pointer;
    text-decoration: none;
  }

  .contact div{
    width: 150px;
    text-align: center;
    padding: 10px 30px !important;
    background-color: #716c5e;
    text-decoration: none; 
  }

  @media only screen and (max-width: 1000px) {
    .videos-wrapper .title {
      padding-right: 100px;
    }

    .testimonials .title {
      padding-left: 100px;
    }

    .hideVideo {
      display: none;
    }

    .videos {
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
    }
  }

  @media only screen and (max-width: 600px) {
    .content {
      padding-right: 30px;
    }
  }

  @media only screen and (max-width: 450px) {
    .content .title {
      font-size: 20px;
    }

    .testimonials .title {
      padding-left: 20px;
    }

    .videos-wrapper .title {
      padding-right: 20px;
    }

    .videos {
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }

    .testimonials .videos {
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }



    .testimonials .video {
      height: 120px;
      object-fit: cover;
      object-position: center 20%;

    }

    .hideVideo {
      display: none;
    }

    .hideTest2 {
      display: none;
    }
  }
</style>
