<div class="content">
  <div class="based">GOD WITH YOU</div>
  <div class="hero">
    <div class="headercolr"><h1>YOU'RE NOT ALONE</h1></div>
    <div class="subheadcolr">
      <h2 class="h2">enter your prayer request and we WILL pray for you</h2>
      <h3>
        we do not track your information. check the html with f12 button if you
        need to verify
      </h3>
    </div>
  </div>
  <div class="spacer" />

  <form name="contact" method="POST" class="form" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <div class="centerform">
      <div class="form__group field">
        <input
          type="input"
          maxlength="28"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
        />
        <label for="name" class="form__label">NAME (optional)</label>
      </div>

      <div class="spacer2" />

      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="prayer"
          id="prayer"
        />
        <label for="name" class="form__label">PRAYER IN NEED</label>
      </div>
    </div>

    <div class="spacer2" />

    <label for="phone" class="phone">want to be called for prayer?</label>

    <select onchange="yesnoCheck(this);" class="answer" id="call">
      <option value="Null">null</option>
      <option value="other">yes</option>
      <option value="no">no</option>
    </select>

    <div class="centerform">
      <div id="ifYes" style="display: none;" class="form__group field">
        <input
          id="phone"
          name="phone"
          placeholder="(123)456.7890"
          type="text"
          class="form__field"
          onkeydown="javascript:backspacerDOWN(this,event);"
          onkeyup="javascript:backspacerUP(this,event);"
          
        />
        <label for="name" class="form__label">PHONE</label>
      </div>
    </div>

    <script>
      var zChar = new Array(" ", "(", ")", "-", ".");
      var maxphonelength = 13;
      var phonevalue1;
      var phonevalue2;
      var cursorposition;

      function ParseForNumber1(object) {
        phonevalue1 = ParseChar(object.value, zChar);
      }

      function ParseForNumber2(object) {
        phonevalue2 = ParseChar(object.value, zChar);
      }

      function backspacerUP(object, e) {
        if (e) {
          e = e;
        } else {
          e = window.event;
        }
        if (e.which) {
          var keycode = e.which;
        } else {
          var keycode = e.keyCode;
        }

        ParseForNumber1(object);

        if (keycode >= 48) {
          ValidatePhone(object);
        }
      }

      function backspacerDOWN(object, e) {
        if (e) {
          e = e;
        } else {
          e = window.event;
        }
        if (e.which) {
          var keycode = e.which;
        } else {
          var keycode = e.keyCode;
        }
        ParseForNumber2(object);
      }

      function GetCursorPosition() {
        var t1 = phonevalue1;
        var t2 = phonevalue2;
        var bool = false;
        for (i = 0; i < t1.length; i++) {
          if (t1.substring(i, 1) != t2.substring(i, 1)) {
            if (!bool) {
              cursorposition = i;
              bool = true;
            }
          }
        }
      }

      function ValidatePhone(object) {
        var p = phonevalue1;

        p = p.replace(/[^\d]*/gi, "");

        if (p.length < 3) {
          object.value = p;
        } else if (p.length == 3) {
          pp = p;
          d4 = p.indexOf("(");
          d5 = p.indexOf(")");
          if (d4 == -1) {
            pp = " " + pp;
          }
          if (d5 == -1) {
            pp = pp + ".";
          }
          object.value = pp;
        } else if (p.length > 3 && p.length < 7) {
          p = " " + p;
          l30 = p.length;
          p30 = p.substring(0, 4);
          p30 = p30 + ".";

          p31 = p.substring(4, l30);
          pp = p30 + p31;

          object.value = pp;
        } else if (p.length >= 7) {
          p = " " + p;
          l30 = p.length;
          p30 = p.substring(0, 4);
          p30 = p30 + ".";

          p31 = p.substring(4, l30);
          pp = p30 + p31;

          l40 = pp.length;
          p40 = pp.substring(0, 8);
          p40 = p40 + ".";

          p41 = pp.substring(8, l40);
          ppp = p40 + p41;

          object.value = ppp.substring(0, maxphonelength);
        }

        GetCursorPosition();

        if (cursorposition >= 0) {
          if (cursorposition == 0) {
            cursorposition = 2;
          } else if (cursorposition <= 2) {
            cursorposition = cursorposition + 1;
          } else if (cursorposition <= 5) {
            cursorposition = cursorposition + 2;
          } else if (cursorposition == 6) {
            cursorposition = cursorposition + 2;
          } else if (cursorposition == 7) {
            cursorposition = cursorposition + 4;
            e1 = object.value.indexOf(")");
            e2 = object.value.indexOf("-");
            if (e1 > -1 && e2 > -1) {
              if (e2 - e1 == 4) {
                cursorposition = cursorposition - 1;
              }
            }
          } else if (cursorposition < 11) {
            cursorposition = cursorposition + 3;
          } else if (cursorposition == 11) {
            cursorposition = cursorposition + 1;
          } else if (cursorposition >= 12) {
            cursorposition = cursorposition;
          }

          var txtRange = object.createTextRange();
          txtRange.moveStart("character", cursorposition);
          txtRange.moveEnd("character", cursorposition - object.value.length);
          txtRange.select();
        }
      }

      function ParseChar(sStr, sChar) {
        if (sChar.length == null) {
          zChar = new Array(sChar);
        } else zChar = sChar;

        for (i = 0; i < zChar.length; i++) {
          sNewStr = "";

          var iStart = 0;
          var iEnd = sStr.indexOf(sChar[i]);

          while (iEnd != -1) {
            sNewStr += sStr.substring(iStart, iEnd);
            iStart = iEnd + 1;
            iEnd = sStr.indexOf(sChar[i], iStart);
          }
          sNewStr += sStr.substring(
            sStr.lastIndexOf(sChar[i]) + 1,
            sStr.length
          );

          sStr = sNewStr;
        }

        return sNewStr;
      }
      var clipboard = new Clipboard(".btn");

      clipboard.on("success", function (e) {
        console.log(e);
      });

      clipboard.on("error", function (e) {
        console.log(e);
      });
    </script>

    <script type="text/javascript">
      function yesnoCheck(that) {
        if (that.value == "other") {
          alert("We will text you before calling to make sure its a good time");
          document.getElementById("ifYes").style.display = "block";
        } else {
          document.getElementById("ifYes").style.display = "none";
        }
      }
    </script>

    <div class="spacer" />
    <div class="container">
      <button class="button" type="submit"> submit </button>
    </div>

  </form>
</div>

<style>
  .container {
    height: 200px;
    position: relative;
  }
  .button {
    background-color: #009d9d;
    font-family: "Akkurat-Mono";
    color: #e6e6fa;
    border-radius: 5px;
    border: none;
    width: 180px;
    height: 60px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .centerform {
    margin-left: 34%;
  }
  .form {
    text-align: center;
  }
  .answer {
    color: #e6e6fa;
    background-color: #008080;
    border-color: #008080;
    font-family: "Akkurat-Mono";
  }
  .phone {
    color: #e6e6fa;
    font-family: "Akkurat-Mono";
  }
  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
    font-family: "Akkurat-Mono";
  }

  .form__field {
    font-family: "Akkurat-Mono";
    width: 100%;
    border: 0;
    border-bottom: 2px solid;
    outline: 0;
    font-size: 1.3rem;
    color: #e6e6fa;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  ::placeholder {
    color: transparent;
  }

  :placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #e6e6fa;
  }

  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: primary;
    font-weight: 700;

    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, primary, secondary);
    border-image-slice: 1;
  }
  /* reset input */
  /* demo */

  .headercolr {
    color: #e6e6fa;
    font-family: "FoundersGrotesk-Medium";
  }
  .subheadcolr {
    padding-top: 20px;
    color: #e6e6fa;
    font-family: "Akkurat-Mono";
  }
  .h2 {
    font-size: 20px;
  }
  .subheadcolr h3 {
    font-size: 11.4px;
  }
  .based {
    color: #e6e6fa;
    font-size: 15px;
    text-align: center;
    padding-top: 40px;
    font-family: "Akkurat-Mono";
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 50vh;
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

  .spacer {
    padding-top: 200px;
  }

  .spacer2 {
    padding-top: 50px;
  }
  @media only screen and (max-width: 1200px) {
    .hero h1 {
      font-size: 95px;
      line-height: 85px;
      padding-bottom: 15px;
    }
    .h2 {
      font-size: 18px;
    }
    .subheadcolr h3 {
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 1000px) {
    .hero h1 {
      font-size: 80px;
      line-height: 70px;
      padding-bottom: 15px;
    }
  }

  @media only screen and (max-width: 850px) {
    .hero h1 {
      font-size: 70px;
      line-height: 65px;
      padding-bottom: 15px;
    }
    .h2 {
      font-size: 18px;
    }
    .subheadcolr h3 {
      font-size: 10px;
    }
  }

  @media only screen and (max-width: 750px) {
    .hero h1 {
      font-size: 55px;
      line-height: 50px;
      padding-bottom: 15px;
    }
  }

  @media only screen and (max-width: 650px) {
    .centerform {
      margin-left: 16.4%;
    }
    :placeholder-shown ~ .form__label {
      font-size: 1rem;
    }
    .form__group {
      font-size: 1rem;
      width: 80%;
    }

    .form__field {
      font-size: 1rem;
    }

    .based {
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

    .h2 {
      font-size: 9px;
    }
    .subheadcolr h3 {
      font-size: 7px;
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
