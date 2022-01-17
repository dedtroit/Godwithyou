<script>
  export let goTo;
</script>

<div class="content">
  <div>
    <div class="title">VIDEOS</div>
    <div class="videos">
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video hideMobile2"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video hideMobile2"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video hideMobile2"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
      <img
        class="video hideMobile1 hideMobile2"
        src="http://placehold.jp/ffffff/621d1d/300x150.png"
        alt="video"
      />
    </div>
  </div>
  <div class="contact">
    <div
      on:click={() => {
        goTo('contact');
      }}
    >
      CONTACT US
    </div>
  </div>
</div>

<style>
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

  @media only screen and (max-width: 1000px) {
    .hideMobile1 {
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
    .videos {
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }

    .hideMobile2 {
      display: none;
    }
  }
</style>
