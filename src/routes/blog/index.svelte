<script>
  import { exclude_internal_props } from "svelte/internal";
</script>

<div class="headback">
  <div>
    <a href="https://www.dannymatthews.net">
      <img src="/images/logo-small.png" alt="Logo" class="local" />
    </a>
  </div>
  <div class="header">Blog</div>
  <div class="subhead">
    You want to learn more about video editng yeah? <br />Well welcome to the
    library for editors.
  </div>
</div>

<div class="spacer" />

<div class="row">
  <div class="column">
    <div class="blog">04.27.2022</div>
  </div>
  <div class="column">
    <div>
      <a class="otherfont" href="/blog/post/edit_to_beat"
        >How to edit to the beat<br />
        in adobe premiere
      </a>
    </div>
    <div class="otherfont2">Posted by Danny Matthews</div>

    <div class="otherfont3">
      I literally just went out and filmed random things outside of my house.
      Just to give you guys an understanding of what cutting to the beat is
      going. The techno So without further ado, let's jump into Adobe Premiere
      OK, so let's go ahead and take a look at the edit that I did. So here's
    </div>
    <div class="titler">
      <a class="blog" href="/blog/post/edit_to_beat">Read more </a>
    </div>
  </div>
  <div class="column">
    <div class="title">
      <a href="/blog/post/edit_to_beat">
        <img class="img" src="/images/thumbs/sync.jpg" alt="video" />
      </a>
    </div>
  </div>
</div>

<div class="line" />

<div class="row">
  <div class="column">
    <div class="blog">04.20.2022</div>
  </div>
  <div class="column">
    <div>
      <a class="otherfont" href="/blog/post/the_jump_cut"
        >The jump cut<br />
        in adobe premiere
      </a>
    </div>
    <div class="otherfont2">Posted by Danny Matthews</div>

    <div class="otherfont3">
      What's up? My name is Danny Matthews, and today we're going to be talking
      about the most famous YouTube cut in all of the world.jump, cut. So is
      that further ado? Let's jump into Adobe Premiere and show you exactly what
      this is. Real quick, if you're subscribed to DoorDash
    </div>
    <div class="titler">
      <a class="blog" href="/blog/post/the_jump_cut">Read more </a>
    </div>
  </div>
  <div class="column">
    <div class="title">
      <a href="/blog/post/the_jump_cut">
        <img class="img" src="/images/thumbs/jumpcut.jpg" alt="video" />
      </a>
    </div>
  </div>
</div>

<div class="line" />

<div class="row">
  <div class="column">
    <div class="blog">04.15.2022</div>
  </div>
  <div class="column">
    <div>
      <a class="otherfont" href="/blog/post/make_video_editing_port"
        >The jump cut<br />
        in adobe premiere
      </a>
    </div>
    <div class="otherfont2">Posted by Danny Matthews</div>

    <div class="otherfont3">
      Welcome back to brand new video. My name is Danny Matthews. Now, today,
      somebody asked me to create a video specifically about building a
      portfolio for editing. This is our dear friend here. So you can thank them
      because they're the ones that motivated me to create this video
    </div>
    <div class="titler">
      <a class="blog" href="/blog/post/make_video_editing_port">Read more </a>
    </div>
  </div>
  <div class="column">
    <div class="title">
      <a href="/blog/post/make_video_editing_port">
        <img
          class="img"
          src="/images/thumbs/Editing-portfolio.jpg"
          alt="video"
        />
      </a>
    </div>
  </div>
</div>









<div class="spacer" />

<style>
  .headback {
    background-color: #000;
  }
  .header {
    font-family: "suit";
    font-size: 80px;
    color: #fff;
    text-align: center;
  }
  .subhead {
    font-family: "suit";
    font-size: 25px;
    padding-bottom: 200px;
    text-align: center;
    color: #fff;
  }
  .local {
    width: 100px;
    height: auto;
    padding-left: 10px;
    padding-bottom: 80px;
    padding-top: 15px;
  }
  .line {
    border: 1px solid #000;
    width: 100%;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .spacer {
    padding-top: 100px;
  }
  .img {
    width: 450px;
    height: 230px;
  }
  .column {
    float: left;
    width: 50%;
    padding: 0px;
  }

  /* Clear floats after the columns */
  .row {
    display: flex;
  }

  .title {
    transition: transform 0.5s ease;
    transform: translateX(0px);
  }
  .title:hover {
    transform: translateX(-10px);
  }
  .titler {
    transition: transform 0.5s ease;
    transform: translateX(0px);
  }
  .titler:hover {
    transform: translateX(10px);
  }
  .otherfont {
    text-decoration: none;
    font-size: 30px;
    font-family: "suit";
    color: rgb(90, 90, 90);
    padding-right: 80px;
  }
  .otherfont2 {
    font-size: 15px;
    font-family: "suit";
    color: rgb(90, 90, 90);
    padding-right: 80px;
  }

  .otherfont3 {
    font-size: 15px;
    padding-top: 30px;
    padding-bottom: 30px;
    font-family: "suit";
    color: rgb(90, 90, 90);
    padding-right: 80px;
  }

  .blog {
    text-decoration: none;
    color: rgb(90, 90, 90);
    font-size: 18px;
    font-family: Akkurat-Mono;
  }
</style>
