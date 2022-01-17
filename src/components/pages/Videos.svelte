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
</script>

<div class="content">
  {#if videoPlaying}
    <div class="player-model">
      <div class="player-close" on:click={stopVideo}>CLOSE</div>
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
      <div class="vid">
        <img class="video" src="/images/thumbs/video1.webp" alt="video" />
        <div
          class="playhead"
          on:click={() => {
            playVideo("i7EJ2PDCZ6E");
          }}
        >
          <img src="/images/playhead.png" alt="play button" />
        </div>
      </div>
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/240x135.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/240x135.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/240x135.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/240x135.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/240x135.png"
        alt="video"
      />
      <img
        class="video hideVideo"
        src="http://placehold.jp/ffffff/621d1d/240x135.png"
        alt="video"
      />
      <img
        class="video hideVideo"
        src="http://placehold.jp/ffffff/621d1d/240x135.png"
        alt="video"
      />
      <img
        class="video hideVideo hideVideo1"
        src="http://placehold.jp/ffffff/621d1d/240x135.png"
        alt="video"
      />
    </div>
  </div>
  <div class="testimonials">
    <div class="title">TESTIMONIALS</div>
    <div class="videos">
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/240x350.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/240x350.png"
        alt="video"
      />
      <img
        class="video hideTest2"
        src="http://placehold.jp/ffffff/621d1d/240x350.png"
        alt="video"
      />
      <img
        class="video hideTest1"
        src="http://placehold.jp/ffffff/621d1d/240x350.png"
        alt="video"
      />
    </div>
  </div>
  <div class="contact">
    <div
      on:click={() => {
        goTo("contact");
      }}
    >
      CONTACT TODAY
    </div>
  </div>
</div>

<style>
  .player-model {
    position: absolute;
    background-color: #00000055;
    width: 100vw;
    height: 100vh;
  }

  .player-close {
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 20px;
    background-color: #ffffff33;
    padding: 5px;
  }

  .video-player {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .vid {
    display: flex;
    flex-direction: column;
  }

  .playhead {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: #00000055;
  }

  .playhead:hover {
    background-color: #00000055;
  }

  .playhead img {
    width: 25px;
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
  }

  .videos {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1920px;
  }

  .contact {
    display: flex;
    color: white;
    padding-top: 20px;
    flex-direction: row;
    justify-content: center;
    margin-top: -20px;
    font-size: 20px;
  }

  .hideVideo1 {
    display: none;
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

    .hideTest1 {
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

    .hideVideo {
      display: none;
    }

    .hideTest2 {
      display: none;
    }
  }
</style>
