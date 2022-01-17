<script>
    export let goTo;
</script>

<div class="content">
  <div>
  </div>
  <div class="center-content">
    <div class="about">
      Danny Matthews Creative specializes in <span class="highlight-white"
        >music and brand videos,</span
      ><br> but we understand that you may be looking for more than that.<br>We have listed
      other company's that can help with those needs.
    </div>
    <div class="links">
      <span class="highlight-white">Music video</span>
      <span class="highlight-white">Brand video</span>
      <span>Wedding Films</span>
      <span>Lyric videos</span>
      <span>Real Estate videos</span>
      <span>Web design</span>
      <span>Graphic design</span>
    </div>
    
  </div>
    <div class="contact">
        <div on:click={()=> {goTo('contact')}}>CONTACT US</div>
    </div>
</div>

<style>

  .highlight-white {
    color: white;
  }

  .links {
    padding-top: 30px;
    font-size: 40px;
    width: 90%;
    text-transform: uppercase;
    font-weight: 300;
  }
  .links span {
    padding-right: 15px;
    white-space: nowrap;
  }

  .contact {
      color: white;
      font-size: 20px;

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
        
        font-size: 13px;
    }
    .links {
        font-size: 35px;
    }
  }

  @media only screen and (max-width: 700px) {
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

    .contact {
        font-size: 13px;
    }

    .links {
      display: flex;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 550px) {
    .about br {
        display: none;
    }
  }

</style>
