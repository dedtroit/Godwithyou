<div class="content">
  <div class="cre">CRE</div>
  <div class="ate">ATE</div>
  <div class="header">
    <div class="topbar">
      <div class="local">
        <img src="/images/logo-small.png" alt="Logo" class="logo">
      </div>
      <div class="contact">CONTACT TODAY</div>
    </div>    
    <div class="based">BASED IN SACRAMENTO, CALIFORNIA</div>
  </div>
  <div class="hero">
    <h1>Custom content for your brand</h1>
    <h3>A digital production studio creating <br>for your branding needs</h3>
    <div class="contact">CONTACT TODAY</div>
  </div>
  <div class="spacer"></div>
  <div class="thatway">
    <img src="/images/scroll2.png" alt="graffiti that way">
  </div>
</div>
<style>

  .cre, .ate {
    font-size: 600px;
    opacity: .08;
    z-index:0;
    line-height: 450px;

  }

  .cre {
    position: absolute;
    top: 0px;
    right: 0px;
  }

  .ate {
    position: absolute;
    bottom: -20px;
    left: 0px;
  }

  .topbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .thatway {
    position: absolute;
    bottom: 50px;
    right: 50px;
  }

  .thatway img {
    width: 1500px;
    opacity: .5;
  }

  .based {
    color: #00000066;
    font-size: 15px;
  }

  .logo {
    width: 175px;
    padding-top: 20px;
  } 

  .header { 
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }

  .contact {
    font-size: 20px;
    padding: 7px 50px;
    background-color: #716c5e; 
    text-align: center;
    max-width: 300px;
    z-index: 2
  }

  .header .contact {
    font-size: 12px;
    padding: 10px 50px;
  }
 
  .content {
    display: flex;
    flex-direction: column;
    color: white;
    height: 100vh;
    padding-right: 50px;
    justify-content: space-between;
  }

  .hero {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero h1 {
    font-weight: 400 !important;
    font-size: 50px;
    margin-bottom: 0px;
  }

  .hero h3 {
    margin-top: 0px;
    font-weight: 400 !important;
    font-size: 30px;
  }

  .spacer {
    height: 100px;
  }

  @media only screen and (max-width: 1700px) {

    .cre, .ate {
      font-size: 500px;
      line-height: 380px;

    }

    .thatway img {
      width: 1000px;
    }
  }

  @media only screen and (max-width: 1300px) {

    .cre, .ate {
      font-size: 400px;
      line-height: 300px;
    }

  }


  @media only screen and (max-width: 1000px) {

    .cre, .ate {
      font-size: 300px;
      line-height: 230px;

    }

    .thatway img {
      width: 750px;
    }

    .hero h1 {
      font-size: 40px;
    }

    .hero h3 {
      font-size: 25px;
    }

  }

  @media only screen and (max-width: 850px) {
    .thatway img {
      width: 500px;
    }

    .hero h1 {
      font-size: 35px;
    }

    .hero h3 {
      font-size: 25px;
    }

  }

  @media only screen and (max-width: 750px) {
    .hero h1 {
      font-size: 28px;
    }

    .hero h3 {
      font-size: 20px;
    }

  }

  @media only screen and (max-width: 600px) {

    .cre, .ate {
      font-size: 200px;
      line-height: 230px;
    }

    .cre {
      top: 70px;
      right: 0px;
    }

    .ate {
      bottom: -20px;
      left: 0px;
    }


    .thatway {
      bottom: 100px;
    }

    .thatway img {
      width: 350px;
    }

    .logo {
      width: 100px;
    } 

  .based {
    font-size: 10px;
  }

    .contact {
      font-size: 20px;
    }

    .header .contact {
      font-size: 10px;
    }

    .content {
      padding-right: 30px;
    }

    .hero h1 {
      font-size: 20px;
      margin-bottom: 7px;
    }

    .hero h3 {
      font-size: 15px;
      margin-bottom: 60px;
    }
  }

  @media only screen and (max-width: 450px) {
    .thatway img {
      width: 300px;
    }
    .header .contact {
      padding: 10px 30px;
    }
    .hero h1 {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 400px) {

    .cre, .ate {
      font-size: 150px;
    }

    .thatway img {
      width: 230px;
    }

    .header .contact {
      padding: 10px 20px;
    }

    .logo {
      width: 80px;
    }

    .contact {
      margin-top: 20px;
      font-size: 15px;
    }

    .hero h1 {
      font-size: 14px;
    }

    .hero h3 {
      font-size: 11px;
    }

   
  }

  @media only screen and (max-width: 300px) {

  }
</style>
