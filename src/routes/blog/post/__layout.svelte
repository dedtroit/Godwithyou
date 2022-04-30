

<header class="menu-container">
  <input type="checkbox" id="openmenu" class="hamburger-checkbox" />

  <div class="hamburger-icon">
    <label for="openmenu" id="hamburger-label">
      <span />
      <span />
      <span />
      <span />
    </label>
  </div>

  <div class="menu-pane">
    <nav>
      <a href="/blog">
        <h5 class="menu">Blog home</h5>
      </a>
      <div class="font">other blogs</div>
    
      <a title="how to edit to the beat" href="/blog/post/edit_to_beat">
        <img src="/images/thumbs/sync.jpg" alt="Logo" />
      </a>
      <a title="The jump cut" href="/blog/post/the_jump_cut">
        <img src="/images/thumbs/jumpcut.jpg" alt="Logo" />
      </a>
      <a title="how to make a video editing portfolio" href="/blog/post/make_video_editing_port">
        <img src="/images/thumbs/Editing-portfolio.jpg" alt="Logo" />
      </a>
    
      <div class="spacer" />
      <div class="font">Need a project edited?</div>
      <div class="button">
        <a href="https://5f05y4m0px6.typeform.com/to/MeYHcHxE" class="contact"
          >GET FREE QUOTE</a
        >
      </div>
    </nav>
  </div>

</header>



<main>
  <slot />
</main>

<footer />

<style>
  .button {
    padding-top: 10px;
    transition: transform 0.5s ease;
    transform: translateX(0px);
  }
  .button:hover {
    transform: translateX(10px);
  }
  .spacer {
    padding-top: 100px;
  }
  .contact {
    font-size: 15px;
    padding-left: 10px;
    color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-family: "suit";
  }

  .menu {
    padding-left: 10px;
    font-size: 20px;
    font-family: "suit";
    color: rgb(255, 255, 255);
    transition: transform 0.5s ease;
    transform: translateX(0px);
  }
  .menu:hover {
    transform: translateX(10px);
  }
  .font {
    padding-left: 10px;
    padding-bottom: 10px;
    font-size: 15px;
    font-family: "suit";
    color: rgb(255, 255, 255);
  }
  .hamburger-icon {
      position: fixed;
      z-index: 1;
      top: 4vh;
      left: 4vw;
      padding-bottom: 5vh;
    }

    .hamburger-icon span {
      height: 2px;
      width: 30px;
      background-color: black;
      display: block;
      margin: -2px 0px 5px 8px;
      transition: .7s ease-in-out;
      transform: none;
    }

    #openmenu:checked ~ .menu-pane {
      left: 0vw;
      transform: translateX(-5vw);
    }

    #openmenu:checked ~ .hamburger-icon span:nth-of-type(2) {
      transform: translate(0%, 175%) rotate(-45deg);
      background-color: white;
    }

    #openmenu:checked ~ .hamburger-icon span:nth-of-type(3) {
      transform: rotate(45deg);
      background-color: white;
    }

    #openmenu:checked ~ .hamburger-icon span:nth-of-type(1) {
      opacity: 0;
    }

    #openmenu:checked ~ .hamburger-icon span:nth-of-type(4) {
      opacity: 0;
    }

    div.menu-pane{
      background-color: #000;
      position: fixed;
      transform: translateX(-100vw);
      transform-origin: (0, 200);
      width: 80%;
      height: 100%;
      transition: 1s ease-in-out;
    }

    .menu-pane nav {
      padding: 10%;
    }

    input.hamburger-checkbox {
      position: fixed;
      z-index: 3;
      width: 5vw;
      opacity: 0;
      height: 1vh;
    }

  @media only screen and (max-width: 1200px) {

  }
  @media only screen and (max-width: 992px) {
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 600px) {


    @import url("https://fonts.googleapis.com/css?family=Libre+Caslon+Text:400,700&display=swap");
    .spacer {
    padding-top: 50px;
  }

   
  }
</style>
