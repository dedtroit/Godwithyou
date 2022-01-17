<div class="content">
  <div class="attention"><img class="line" src="/images/line.png" alt="graffiti line">Don't<br> be a stranger</div>
  <div class="contact">
    <div class="personal">
      <div><img class="donot" src="/images/dnont.png" alt="Graffiti Do Not"></div>
      <div class="cta">REACH OUT TO</div>
      <div><a class="email" href="mailto:create@dannymatthews.net">create@dannymatthews.net</a></div>
      <div><a class="phone" href="tel:9162585102">916.258.5102</a></div>
    </div>
    <div class="social">
      <a class="instagram" href="https://www.instagram.com/dannymatthews_">INSTAGRAM</a>
      <a class="youtube" href="https://www.youtube.com/c/DannyMatthewsediting">YOUTUBE</a>
    </div>
  </div>
</div>

<style>

  .line {
    width: 700px;
    position: absolute;
    margin-top: -100px;
    margin-left: -60px;
    opacity: .5;
  }

  .donot {
    width: 100px;
    opacity: .5;
  }

  .content {
    color: white;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0px 20px 0px 0px;
  }
  .attention {
    font-family: Geomanist Book;
    padding-top: 50px;
    font-size: 13rem;
    line-height: 10.5rem;
  }

  .contact {
    padding-bottom: 40px;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .social a {
    padding: 0px 10px;
  }

  .cta { 
    font-size: 30px;
  }

  .contact a {
    color: inherit;
    text-decoration: inherit;
  }

  .phone {
    color: #ffffffbb !important
  }

  @media only screen and (max-width: 860px) {
    .attention {
      font-size: 10rem;
      line-height: 8rem;
    }

    .line {
      width: 550px;
      margin-top: -80px;
      margin-left: -60px;
    }
  }

  @media only screen and (max-width: 660px) {
    .attention {
      font-size: 8rem;
      line-height: 6rem;
    }

    .line {
      width: 430px;
      margin-top: -70px;
      margin-left: -45px;
    }
  }

  @media only screen and (max-width: 510px) {

    .line {
      width: 320px;
      margin-top: -45px;
      margin-left: -30px;
    }

    .attention {
      padding-top: 150px;
      font-size: 6rem;
      line-height: 5rem;
    }

    .contact {
      flex-direction: column;
      align-items: flex-start;
    }

    .social a {
      padding: 0px;;
    }

    .social {
      padding-top: 100px;
    }

    .social .instagram {
      padding-right: 20px;
    }


    
  }

  @media only screen and (max-width: 400px) {

    .line {
      width: 240px;
      margin-top: -34px;
      margin-left: -25px;
    }

    .attention {
      padding-top: 150px;
    }

    .attention {
      font-size: 4.5rem;
      line-height: 4rem;
    }
    
  }
</style>
