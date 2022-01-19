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
    <div class="title">PROJECTS</div>
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
        class={active === 3 ? "vid active" : "vid"}
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
        class={active === 4 ? "vid active" : "vid"}
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
      <div
        class={active === 5 ? "vid active" : "vid"}
        on:mouseenter={() => {
          active = 5;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("N8ThBhwXEhs");
        }}
      >
        <img class="video" src="/images/thumbs/crazy.webp" alt="video" />
      </div>
      <div
        class={active === 6 ? "vid active" : "vid"}
        on:mouseenter={() => {
          active = 6;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("mnKoCQzTRk4");
        }}
      >
        <img class="video" src="/images/thumbs/wogo.webp" alt="video" />
      </div>
      <div
        class={active === 7 ? "vid hideVideo active" : "vid hideVideo"}
        on:mouseenter={() => {
          active = 7;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("in1ozucqYC8");
        }}
      >
        <img class="video" src="/images/thumbs/fake.webp" alt="video" />
      </div>
      <div
        class={active === 8 ? "vid hideVideo active" : "vid hideVideo"}
        on:mouseenter={() => {
          active = 8;
        }}
        on:mouseleave={clearActive}
        on:click={() => {
          playVideo("Ux5CqcziIr8");
        }}
      >
        <img class="video" src="/images/thumbs/beach.webp" alt="video" />
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
    <span
      on:click={() => {
        goTo("contact");
      }}
    >
      CONTACT TODAY
    </span>
  </div>
  <div></div>
</div>

<style>
  .player-model {
    position: absolute;
    background-color: #00000055;
    width: 100vw;
    height: 100vh;
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
    padding-right: 170px;
    text-align: right;
  }

  .testimonials .title {
    padding-left: 170px;
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

  .testimonials {
  }

  .contact {
    cursor: pointer;
    display: flex;
    color: white;
    padding-top: 20px;
    flex-direction: row;
    justify-content: center;
    margin-top: -20px;
    font-size: 20px;
  }

  .contact span {
    font-size: 12px;
    padding: 10px 30px;
    width: 150px;
    text-align: center;
    background-color: #716c5e; 
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

    .hideVideo {
      display: none;
    }

    .hideTest2 {
      display: none;
    }
  }
</style>
