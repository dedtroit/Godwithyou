<div class="content">
  <div class="cre">CRE</div>
  <div class="ate">ATE</div>
  <div class="attention">
    <img class="line" src="/images/line.png" alt="graffiti line" />Don't<br /> be
    a stranger
  </div>
  <div class="contact">
    <div class="personal">
      <div>
        <img class="donot" src="/images/dnont.png" alt="Graffiti Do Not" />
      </div>
      <div class="cta">REACH OUT TO</div>
      <div>
        <a class="email" href="mailto:create@dannymatthews.net"
          >create@dannymatthews.net</a
        >
      </div>
      <div><a class="phone" href="tel:9162585102">916.258.5102</a></div>
    </div>
    <div class="social">
      <a class="instagram" target="_blank" href="https://www.instagram.com/dannymatthews_"
        >INSTAGRAM</a
      >
      <a class="youtube" target="_blank" href="https://www.youtube.com/channel/UCSixrLIxgKrbpCwVZwQ1NRw"
        >YOUTUBE</a
      >
    </div>
  </div>
</div>

<style>
  .cre,
  .ate {
    font-size: 600px;
    opacity: .09;
    z-index: 0;
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

  .line {
    width: 1400px;
    position: absolute;
    margin-top: -250px;
    margin-left: -120px;
    opacity: 0.5;
  }

  .donot {
    width: 100px;
    opacity: 0.5;
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
    font-size: 27rem;
      line-height: 20rem;
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
    color: #ffffffbb !important;
  }

  @media only screen and (max-width: 2000px) {
    .cre,
    .ate {
      font-size: 500px;
      line-height: 380px;
    }

    .attention {
      font-size: 20rem;
      line-height: 15rem;
    }

    .line {
        width: 1000px;
        position: absolute;
        margin-top: -150px;
        margin-left: -90px;
        opacity: 0.5;
      }
    
  }


  @media only screen and (max-width: 1700px) {
    .cre,
    .ate {
      font-size: 500px;
      line-height: 380px;
    }


  }

  @media only screen and (max-width: 1300px) {
    .cre,
    .ate {
      font-size: 400px;
      line-height: 300px;
    }

    .attention {
      font-size: 15rem;
      line-height: 13rem;
    }

    .line {
        width: 800px;
        position: absolute;
        margin-top: -105px;
        margin-left: -70px;
        opacity: 0.5;
      }
  }

  @media only screen and (max-width: 1000px) {
    .cre,
    .ate {
      font-size: 300px;
      line-height: 230px;
    }
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

  @media only screen and (max-width: 600px) {
    .cre,
    .ate {
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
      padding: 0px;
    }

    .social {
      padding-top: 100px;
    }

    .social .instagram {
      padding-right: 20px;
    }
  }

  @media only screen and (max-width: 400px) {
    .cre, .ate {
      font-size: 150px;
    }

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
