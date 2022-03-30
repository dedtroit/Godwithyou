<script>
  export let goTo;
</script>

<div class="content">
  <div class="header">
    <div class="topbar">
      <div class="local">
        <img src="/images/logo-small.png" alt="Logo" class="logo">
      </div>
      <div on:click={()=> {goTo('contact')}} class="contact">CONTACT TODAY</div>
    </div>    
    <div class="based">SACRAMENTO, CA</div>
    <div class="based2">38.5816° N, 121.4944° W</div>
  </div>
  <div class="hero">
    <div class="headercolr"><h1>Custom Video<br />Your brand</h1></div>
    <div class="subheadcolr"><h2>A video production studio creating <br>for your branding needs</h2></div>
    <div on:click={()=> {goTo('contact')}} class="contact">CONTACT TODAY</div>
  </div>
  <div class="spacer"></div>
  <div class="footer"><p>swipe right</p></div>

</div>
<style>
  .footer {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
  }

  .headercolr{
    color: white;
    //font-family: FoundersGrotesk-Medium;
  }
  .subheadcolr{
    color: rgb(90,90,90)
  }

  .topbar {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .based {
    color: rgb(90, 90, 90);
    font-size: 15px;
  }
   .based2 {
    color: rgb(90, 90, 90);
    font-size: 15px;
  }

  .logo {
    width: 120px;
    padding-top: 15px;
  } 

  .header { 
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }

  .contact {
    font-size: 15px;
    padding: 10px 50px;
    background-color: #716c5e; 
    color: white;
    text-align: center;
    max-width: 300px;
    z-index: 2;
    cursor: pointer;
  }

  .header .contact {
    font-size: 12px;
    padding: 10.5px 50px 10px 50px;
    line-height: 10px;
  }
 
  .content {
    display: flex;
    flex-direction: column;
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
    font-size: 110px;
    line-height: 90px;
    padding-bottom: 15px;
    margin-bottom: 0px;
  }

  .hero h2{
    margin-top: 0px;
    font-weight: 400 !important;
    font-size: 30px;
  }

  .spacer {
    height: 100px;
  }

  @media only screen and (max-width: 1200px) {

    

    .hero h1 {
      font-size: 95px;
      line-height: 85px;
      padding-bottom: 15px;
    }

  }



  @media only screen and (max-width: 1000px) {

    .thatway img {
      width: 750px;
    }

    .hero h1 {
      font-size: 80px;
      line-height: 70px;
      padding-bottom: 15px;
    }

    .hero h2 {
      font-size: 25px;
    }

  }

  @media only screen and (max-width: 850px) {
    .thatway img {
      width: 500px;
    }

    .hero h1 {
      font-size: 70px;
      line-height: 65px;
      padding-bottom: 15px;
    }

    .hero h2 {
      font-size: 25px;
    }

  }

  @media only screen and (max-width: 750px) {
    .hero h1 {
      font-size: 55px;
      line-height: 50px;
      padding-bottom: 15px;
    }

    .hero h2 {
      font-size: 20px;
    }

  }

  @media only screen and (max-width: 600px) {



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
  .based2 {
    font-size: 10px;
  }

    .header .contact {
      font-size: 10px;
    }

    .content {
      padding-right: 30px;
    }

    .hero h1 {
      font-size: 45px;
      line-height: 40px;
      padding-bottom: 15px;
    }

    .hero h2 {
      font-size: 15px;
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 450px) {
    .thatway img {
      width: 300px;
    }
    .header .contact {
      padding: 11.5px 30px 10px 30px;
    }
    .hero h1 {
      font-size: 39px;
      line-height: 34px;
      padding-bottom: 20px;
    }
  }

  @media only screen and (max-width: 400px) {

    .thatway img {
      width: 230px;
    }

    .header .contact {
      padding: 11.5px 20px 10px 20px;
    }

    .logo {
      width: 80px;
    }

    .contact {
      font-size: 15px;
    }

    .hero h1 {
      font-size: 33px;
      line-height: 28px;
      padding-bottom: 15px;
    }

    .hero h2 {
      font-size: 11px;
    }
    .footer {
      padding-bottom: 50px;
    }

   
  }

  @media only screen and (max-width: 350px) {
    .hero h1 {
      font-size: 27px;
      line-height: 22px;
      padding-bottom: 15px;
    }

  }

  @media only screen and (max-width: 300px) {
    .hero h1 {
      font-size: 23px;
      line-height: 20px;
      padding-bottom: 15px;
    }
  }
</style>
