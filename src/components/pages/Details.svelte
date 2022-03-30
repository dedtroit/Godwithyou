<script>
    export let goTo;
</script>

<title>Table of content</title>
<div class="content">
  <div></div>
  <div class="center-content">
    <div class="about">
      Danny Matthews Creative specializes in <span class="highlight-white"
        >music and brand videos,</span
      ><br> but we understand that you may be looking for more than that.<br>We have listed
      other company's that can help with those needs.
    </div>
    <div class="links">
      <span class="highlight-white" on:click={() => {goTo("videos")}}>Music video</span>
      <span class="highlight-white" on:click={() => {goTo("videos")}}>Brand video</span>
      <a href="https://www.devotionfilms.net/" target="_blank">Wedding Films</a>
      <a href="https://www.youtube.com/channel/UCPtqGubo5NHQXaRdah7Z9HA">Lyric videos</a><br>
      <a href="https://www.youtube.com/channel/UCSixrLIxgKrbpCwVZwQ1NRw">Post Production</a>
      <a href="https://lebich.dev?r=dm">Web design</a>
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
    cursor: pointer;
    color: white;
  }

  .links {
    padding-top: 30px;
    font-size: 40px;
    width: 90%;
    text-transform: uppercase;
    font-weight: 300;
  }

  .links a {
    color: #333;
    text-decoration: none;
  }

  .links a, .links span {
    white-space: nowrap;
  }

  .links span:hover, .links a:hover {
    text-decoration: underline;
    cursor: pointer;
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
