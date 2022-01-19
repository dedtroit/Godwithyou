<script>
    export let goTo;
</script>

<div class="content">
  <div></div>
  <div>
    <img class="washere" src="/images/washere.png" alt="Danny was here graffiti">
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
      <span>Lyric videos</span><br>
      <span>Post Production</span>
      <span>Web design</span>
      <span>Graphic design</span>
    </div>
    
  </div>
  <div></div>
  <div class="contact">
      <div on:click={()=> {goTo('contact')}}>CONTACT TODAY</div>
  </div>
</div>

<style>

  .washere {
    margin-left: 130px;
    width: 250px;
    opacity: .5;
  }

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
    font-size: 12px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .contact div {
    width: 150px;
    text-align: center;
    padding: 10px 30px !important;
    background-color: #716c5e;
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

  @media only screen and (max-width: 1500px) {
    .links br {
      display: none;
    }
  }

  @media only screen and (max-width: 1000px) {

    .washere {
      width: 200px;
      margin-left: 0px;
    }

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
        font-size: 10px;
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

    .links {
      font-size: 25px;
    }
  }

</style>
