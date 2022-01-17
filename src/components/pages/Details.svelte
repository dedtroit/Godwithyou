<script>
    export let goTo;
</script>

<div class="content">
  <div>
    <img class="logo" src="http://placehold.jp/ffffff/621d1d/300x150.png" alt="Logo" />
  </div>
  <div class="center-content">
    <div class="about">
      Danny Matthews Creative specializes in <span class="highlight-white"
        >music and brand videos,</span
      > but we understand that you may be looking for more than that. We have listed
      other company's that can help with those needs.
    </div>
    <div class="links">
      <span class="highlight-white">Music videos</span>
      <span class="highlight-white">Brand videos</span>
      <span>Wedding Films</span>
      <span>Lyric videos</span>
      <span>Real Estate videos</span>
      <span>Web design</span>
      <span>Graphic design</span>
    </div>
    
  </div>
    <div class="contact">
        <div class="info">A digital Production studio creating for your branding needs</div>
        <div on:click={()=> {goTo('contact')}}>CONTACT US</div>
    </div>
</div>

<style>
  .about {
    width: 38%;
  }

  .highlight-white {
    color: white;
  }

  .links {
    padding-top: 30px;
    font-size: 40px;
    width: 90%;
  }
  .links span {
    padding-right: 15px;
    white-space: nowrap;
  }

  .contact {
      color: white;
      font-size: 20px;

  }

  .info {
      padding-bottom: 20px;
      width: 27%
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  .content div:first-child {
      padding-top: 20px;
  }

  .content div:last-child {
      padding-bottom: 20px;
  }

  @media only screen and (max-width: 1000px) {
    .about {
        width: 60%;
    }
    .links {
        font-size: 35px;
    }
  }

  @media only screen and (max-width: 700px) {
    .about {
        width: 70%;
        
    }
    
    .info {
        width: 70%;
    }
    .links {
        font-size: 30px;
        width: 100%;
    }
  }

  @media only screen and (max-width: 600px) {
    .about {
        width: 90%;
        font-size: 12px;
    }

    .info {
        width: 90%;
    }

    .contact {
        font-size: 13px;
    }

    .logo  {
        width: 180px;
    }
  }
</style>
