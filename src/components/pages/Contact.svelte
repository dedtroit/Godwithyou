<script>
  export let goTo;
</script>

<div class="content">
 
  <div class="attention">
    <img class="line" src="" alt="" />DON'T<br />BE A
    <br /> STRANGER
  </div>
  <div class="contact">
    <div class="personal">
      <div>
        <img class="donot" src="" alt="" />
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
      <a class="blog" target="_blank" href="/blog"
        >BLOG</a
      >
    </div>
  </div>
</div>

<style>




  .content {
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    padding: 0px 20px 0px 0px;
  }
  .attention {
    font-family: Krylon;
    padding-top: 50px;
    font-size: 20rem;
    line-height: 15rem;
  }

  .contact {
    z-index: 5;
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


    .attention {
      font-size: 14rem;
      line-height: 11rem;
    }

   
    
  }


  @media only screen and (max-width: 1700px) {
 


  }

  @media only screen and (max-width: 1300px) {
 

    .attention {
      font-size: 15rem;
      line-height: 13rem;
    }

   
  }

  @media only screen and (max-width: 1000px) {
  
  }

  @media only screen and (max-width: 860px) {
    .attention {
      font-size: 10rem;
      line-height: 8rem;
    }

  
  }

  @media only screen and (max-width: 660px) {
    .attention {
      font-size: 8rem;
      line-height: 6rem;
    }

  
  }

  @media only screen and (max-width: 510px) {
 

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


    .attention {
      padding-top: 130px;
    }

    .attention {
      font-size: 4.5rem;
      line-height: 4rem;
    }
  }
</style>
