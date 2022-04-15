<script>
  export let goTo;
</script>

<div class="content">
  <div class="header">
    <div class="topbar">
      <div class="local">
        <img src="/images/logo-small.png" alt="Logo" class="logo">
      </div>
      <a href="https://5f05y4m0px6.typeform.com/to/MeYHcHxE" class="contact">GET FREE QUOTE</a>
    </div>    
    <div class="based">SACRAMENTO, CA</div>
    <div class="based2">38.5816° N, 121.4944° W</div>
  </div>
  <div class="hero">
    <div class="headercolr"><h1>Custom Video<br />Your brand</h1></div>
    <div class="subheadcolr"><h2>full service video production studio <br>creating films and promo content</h2></div>
    <a href="https://5f05y4m0px6.typeform.com/to/MeYHcHxE" class="contact">GET FREE QUOTE</a>
        <div class="spacer2"></div>
    <div class="contact" on:click={() => {goTo("videos")}}>VIEW WORK</div>
  </div>

  <div class="spacer"></div>
  <div class="footer">
    <div class="footer-wrapper">
			Swipe right
			<svg width="126" height="8" viewBox="0 0 126 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M125.354 4.35354C125.549 4.15828 125.549 3.8417 125.354 3.64644L122.172 0.464455C121.976 0.269193 121.66 0.269193 121.464 0.464455C121.269 0.659718 121.269 0.9763 121.464 1.17156L124.293 3.99999L121.464 6.82842C121.269 7.02368 121.269 7.34026 121.464 7.53552C121.66 7.73079 121.976 7.73079 122.172 7.53552L125.354 4.35354ZM4.37114e-08 4.5L125 4.49999L125 3.49999L-4.37114e-08 3.5L4.37114e-08 4.5Z" fill="black"/>
				</svg>
		</div>
  </div>

</div>
<style>
  .spacer2 {
  padding-top: 10px;
  }
  .footer {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
    font-size: 20px;
  }
  .footer-wrapper {
		display: flex;
		gap: 10px;
		align-items: center;
	}

  .headercolr{
    color: white;
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
    text-decoration: none;
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
    height: 0px;
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
        .footer {
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
      .footer {
    font-size: 20px;
  }

  }

  @media only screen and (max-width: 600px) {

    .footer {
    font-size: 20px;
    padding-bottom: 100px;
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
