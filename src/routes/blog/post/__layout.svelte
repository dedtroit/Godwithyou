<header>
  <a href="/blog">
    <h5 class="menu">Main page</h5>
  </a>
  <div class="font">other blogs</div>

  <a href="/blog/post/edit_to_beat">
    <img src="/images/thumbs/sync.jpg" alt="Logo" />
  </a>
  <a href="/blog/post/the_jump_cut">
    <img src="/images/thumbs/jumpcut.jpg" alt="Logo" />
  </a>
  <a href="/blog/post/make_video_editing_port">
    <img src="/images/thumbs/Editing-portfolio.jpg" alt="Logo" />
  </a>





  
  <div class="spacer" />
  <div class="font">Need a project edited?</div>
  <div class="button">
    <a href="https://5f05y4m0px6.typeform.com/to/MeYHcHxE" class="contact"
      >GET FREE QUOTE</a
    >
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
</style>
