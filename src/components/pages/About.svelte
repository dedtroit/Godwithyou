<script>
  export let goTo;
</script>

<div class="content">
  <div class="timeline">
    <div class="profile">
      <img
        class="image"
        src="/images/danny-overlay.jpg"
        alt="Danny Matthews"
      />
    </div>
    <div class="desktop">
      <div class="row">
        <div>2018</div>
        <div>2019-2020</div>
        <div>2021-PRESENT</div>
      </div>
      <div class="row">
        <div>EDITED PROMOS</div>
        <div>CONTINUED EDITING FOR COMPANYS</div>
        <div>STARTED WORKING WITH ARTISTS</div>
        <div>EDITING FOR YOUTUBERS</div>
      </div>
      <div class="row">
        <div>BECAME A VIDEO EDITOR</div>
        <svg
          width="130"
          height="6"
          viewBox="0 0 100 6"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <line y1="3" x2="130" y2="3" stroke="white" stroke-width="3" />
        </svg>
        <div>STARTED AS A WEDDING VIDEOGRAPHER</div>
        <svg
          width="120"
          height="6"
          viewBox="0 0 120 6"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <line y1="3" x2="120" y2="3" stroke="white" stroke-width="3" />
        </svg>
        <div>CREATED COMPANY</div>
        <svg
          width="90"
          height="6"
          viewBox="0 0 90 6"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <line y1="3" x2="90" y2="3" stroke="white" stroke-width="3" />
        </svg>
        <div>TRAVELED THE USA FOR PROJECTS</div>
        <svg
          width="60"
          height="6"
          viewBox="0 0 60 6"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <line y1="3" x2="60" y2="3" stroke="white" stroke-width="3" />
        </svg>
        <div>STILL CREATING</div>
      </div>
      <div class="row">
        <div>BECAME A MOTION DESIGNER</div>
        <div>VISITED PAPUA NEW GUINEA FOR VIDEO PROJECT</div>
        <div>FOUND SMALL BRANDS TO WORK WITH</div>
        <div>CREATED OVER 100 VIDEOS</div>
      </div>
      <div class="row">
        <div>2017-2018</div>
        <div>2018-2019</div>
        <div>2020-2021</div>
      </div>
    </div>
    <div class="mobile">
      <div class="line">
        <svg width="2" height="290" viewBox="0 0 2 290" fill="none" xmlns="https://www.w3.org/2000/svg">
          <line x1="1" y1="4.37114e-08" x2="0.99998" y2="290" stroke="#89898955" stroke-width="2"/>
        </svg>
          
      </div>
      <div class="column">
        <div class="far-right">2017-2018</div>
        <div class="center"><div>BECAME A VIDEO EDITOR</div></div>
        <div class="left" style="padding-left: 40px;">EDITED PROMOS</div>
        <div class="right" style="padding-right: 50px;">BECAME A MOTION DESIGNER</div>
        <div class="center"><div>STARTED AS A WEDDING VIDEOGRAPHER</div></div>
        <div class="far-right">2018</div>
        <div class="left" style="padding-left: 20px;">CONTINUED EDITING FOR COMPANYS</div>
        <div class="right" style="padding-right: 60px;">VISITED PAPUA NEW GUINEA FOR VIDEO PROJECT</div>
        <div class="far-right">2018-2019</div>
        <div class="center"><div>CREATED COMPANY</div></div>
        <div class="far-right">2019-2020</div>
        <div class="left" style="padding-left: 40px;">STARTED WORKING WITH ARTISTS</div>
        <div class="right" style="padding-right: 60px;">FOUND SMALL BRANDS TO WORK WITH</div>
        <div class="center"><div>TRAVELED THE USA FOR PROJECTS</div></div>
        <div class="far-right">2020-2021</div>
        <div class="left"style="padding-left: 20px;">EDITING FOR YOUTUBERS</div>
        <div class="right" style="padding-right: 100px;">CREATED OVER 100 VIDEOS</div>
        <div class="far-right">2021-PRESENT</div>
        <div class="center"><div>STILL CREATING</div></div>

      </div>
    </div>
  </div>

  <div class="footer">
    <div class="info">
      GOD CREATED ME TO BE A DESIGNER. THE CONTENT I CREATE IS TO HELP YOU WITH
      MARKETING AND TO GROW YOUR BRAND. I CREATE VISUALS BECAUSE I WAS CREATED
      TO. I'VE SEEN MANY VIDEOS AND FILMS, I'VE CREATED MANY VIDEOS AND FILMS,
      AND I KNOW WHAT WORKS FOR MARKETING AND WHAT DOESN'T. LET ME HELP YOU
      CREATE THE PERFECT VISUAL FOR YOUR BRAND.
    </div>
    <div
      class="contact"
    >
      <span on:click={() => {
        goTo('contact');
      }}>CONTACT TODAY</span>
    </div>
  </div>
</div>

<style>

  .about {
    width: 300px;
    margin-top: 60px;
    position: absolute;
  }

  .about-logo {
    width: 120px;
    position: absolute;
    margin-top: -70px;
    display: none;
  }

  .image {
    padding-bottom: 10px;
    width: 120px;
  }

  .timeline {
    display: flex;
    flex-direction: row;
    margin: auto;
    align-items: center;
    padding-top: 150px;
  }

  .mobile {
    display: none;
  }

  .timeline .desktop .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .timeline .desktop .row:nth-of-type(2) {
    padding-left: 120px;
    padding-right: 50px;
    justify-content: space-between;
  }

  .timeline .desktop .row:nth-of-type(4) {
    justify-content: space-between;
    padding-left: 150px;
  }

  .timeline .desktop .row:nth-of-type(3) {
    color: white;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .timeline .desktop .row:nth-of-type(1) {
    justify-content: space-between;
    color: white;
    padding-left: 300px;
    padding-right: 50px;
    padding-bottom: 60px;
  }

  .timeline .desktop .row:nth-of-type(5) {
    justify-content: space-between;
    color: white;
    padding-left: 50px;
    padding-right: 240px;
    padding-top: 60px;
  }

  .timeline .desktop .row svg {
    padding: 10px;
  }
  .profile {
    padding-right: 30px;
  }

  .content {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding-right: 50px;
    justify-content: space-between;
    align-items: center;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding-top: 20px;
    margin-top: -20px;
    font-size: 20px;
    padding-bottom: 20px;
  }

  .contact {
    cursor: pointer;
    padding-bottom: 20px;
    display: flex;
  }

  .contact span {
    font-size: 12px;
    padding: 10px 30px;
    width: 150px;
    text-align: center;
    background-color: #716c5e; 
  }

  .info {
    padding-bottom: 50px;
    color: black;
    text-align: center;
    font-size: 16px;
    max-width: 1000px;
  }

  @media only screen and (max-width: 1750px) {

    .about {
      display: none;
    }

    .about-logo {
      display: block;
    }

    .line {
      position: absolute;
      left: 50%;
      z-index: 1;
      padding-top: 35px;
    }

    .timeline {
      margin: unset;
      width: 100%;
      padding-top: 0px;
    }

    .desktop {
      display: none;
    }
    .mobile {
      min-width: 400px;
      display: block;
      padding-bottom: 10px;
    }

    .timeline {
      flex-direction: column;
    }

    .column div {
      padding-top: 1px;
      padding-bottom: 1px;
      font-size: 11px;
    }


    .profile {
      padding-right: 0px;
      padding-top: 20px;
      padding-bottom: 10px;
    }

    .center {
      color: white;
      display: flex;
      justify-content: center;
    }

    .center div {
      background-color: #aaa493;
      width: fit-content;
      z-index: 2;
    }

    .far-right {
      text-align: right;
      color: beige;
      font-size: 10px;
    }

    .right {
      text-align: right;
    }




  }

  @media only screen and (max-width: 800px) {
    .content {
      padding-right: 30px;
    }
    
    .footer .info {
      font-size: 10px;
      padding-bottom: 10px;
    }
  }

  @media only screen and (max-width: 400px) {
    .mobile {
      min-width: 100%;
    }
  }

  @media only screen and (max-width: 300px) {
    .left {
      padding-left: 0px !important;
    }

    .right {
      padding-right: 0px !important;
    }
  }
</style>
