<template>
  <div class="landing-page">
    <div class="overlap">
      <img class="rectangle" src="../assets/images/landing-page-images/background-image.svg" alt="background-image">
      <img class="img" src="../assets/images/landing-page-images/background-polign.svg" alt="background-polign">
      <img class="horizontal-rectangles" src="../assets/images/landing-page-images/horizontal-rectangles.svg" alt="horizontal-rectangles">
      <img class="vertical-rectangles" src="../assets/images/landing-page-images/vertical-rectangles.svg" alt="vertical-rectangles">
      <img class="bars" src="../assets/images/landing-page-images/bars.svg" alt="bars">
      <div class="logo">
        <img class="logo-football-now" src="../assets/images/landing-page-images/football-now-logo.svg" alt="football-now-logo">
      </div>
      <div class="title">Football Now</div>
      <p class="text">
        The web app that gives you <br />
        all you need to know about <br />
        the Portuguese Football League
      </p>
    </div>
    <div class="signin-signup">
      <div class="sign-in">
        <div class="div-wrapper">
          <div class="text-wrapper-2">SIGN IN</div>
        </div>
      </div>
      <div class="sign-up">
        <div class="overlap-2">
          <div class="text-wrapper-3">SIGN UP</div>
        </div>
      </div>
    </div>
    <div class="block-1-container">
      <div class="block-1-section">
        <div class="block-1-image-section">
          <img class="block-1-rectangle" alt="" src="../assets/images/landing-page-images/info-box-1.svg" />
          <img class="league-logo" alt="" src="../assets/images/landing-page-images/league-logo.svg" />
          <div class="block-1-image-section">
            <div class="title-1">Know all about the League</div>
            <div class="text-1">In this website you are able to follow all the hot games of the game day</div>
          </div>
        </div>
      </div>
    </div>
    <div class="social-bar">
      <img class="twitter" src="../assets/images/landing-page-images/twitter-icon.svg" alt="twitter-icon">
      <img class="facebook" src="../assets/images/landing-page-images/facebook-icon.svg" alt="facebook-icon">
      <img class="instagram" src="../assets/images/landing-page-images/instagram-icon.svg" alt="instagram-icon">
      <img class="youtube" src="../assets/images/landing-page-images/youtube-icon.svg" alt="youtube-icon">
    </div>
    <div class="footer">
      <p class="footer-text">@2023 FootballNow</p>
    </div>
  </div>
</template>

<style>
.landing-page {
  background-color: #131426;
  height: 3170px;
  position: relative;
  width: 1440px;
}

.overlap {
  height: 1037px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1440px;
}

.landing-page .rectangle {
  height: 1030px;
  left: 5px;
  mix-blend-mode: soft-light;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1435px;
}

.landing-page .img {
  height: 1030px;
  left: 0;
  position: absolute;
  top: 0;
  width: 960px;
}

.landing-page .horizontal-rectangles {
  height: 1022px;
  left: 0;
  position: absolute;
  top: 8px;
  width: 819px;
}

.landing-page .vertical-rectangles {
  height: 1028px;
  left: 0;
  position: absolute;
  top: 0;
  width: 794px;
}

.landing-page .bars {
  height: 1037px;
  left: 509px;
  position: absolute;
  top: 0;
  width: 636px;
}

.landing-page .title {
  color: #ffffff;
  font-family: "Gelasio", Helvetica;
  font-size: 80px;
  font-weight: 400;
  left: 81px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 169px;
  white-space: nowrap;
  width: 573px;
}

.landing-page .text{
  color: #ffffff;
  font-family: "Gelasio", Helvetica;
  font-size: 40px;
  font-weight: 500;
  left: 81px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-shadow: 0px 4px 4px #00000040;
  top: 298px;
  width: 819px;
}

.landing-page .signin-signup {
  height: 415px;
  left: 81px;
  position: absolute;
  top: 530px; 
  width: 552px;
}

.landing-page .sign-in {
  height: 78px;
  left: 0;
  position: absolute;
  top: 0;
  width: 258px;
}

.landing-page .div-wrapper {
  background-color: #405493;
  height: 78px;
  position: relative;
  width: 256px;
}

.landing-page .text-wrapper-2 {
  color: #ffffff;
  font-family: "DM Sans", Helvetica;
  font-size: 32px;
  font-weight: 700;
  left: 68px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 16px;
  width: 125px;
}

.landing-page .sign-up {
  height: 78px;
  left: 296px;
  position: absolute;
  top: 0;
  width: 258px;
}

.landing-page .overlap-2 {
  background-color: #566cb3;
  height: 78px;
  position: relative;
  width: 256px;
}

.landing-page .text-wrapper-3 {
  color: #ffffff;
  font-family: "DM Sans", Helvetica;
  font-size: 32px;
  font-weight: 700;
  left: 68px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 17px;
  width: 136px;
}

.landing-page .logo {
  height: 230px;
  left: 175px;
  position: absolute;
  top: 650px;
  width: 262px;
}

.landing-page .social-bar {
  background-image: url(../assets/images//landing-page-images/social-bar.svg);
  background-size: 100% 100%;
  height: 301px;
  left: 1361px;
  position: absolute;
  top: 363px;
  width: 79px;
}

.landing-page .twitter {
  height: 21px !important;
  left: 25px !important;
  position: absolute !important;
  top: 45px !important;
  width: 26px !important;
}

.landing-page .facebook {
  height: 32px !important;
  left: 30px !important;
  position: absolute !important;
  top: 101px !important;
  width: 17px !important;
}

.landing-page .instagram {
  height: 30px !important;
  left: 23px !important;
  position: absolute !important;
  top: 167px !important;
  width: 31px !important;
}

.landing-page .youtube {
  height: 24px !important;
  left: 23px !important;
  position: absolute !important;
  top: 232px !important;
  width: 31px !important;
}

.landing-page .footer {
  background-image: url(../assets/images/landing-page-images/footer-rectangle.svg);
  background-color: transparent !important;
  left: 0 !important;
  position: absolute !important;
  top: 3131px !important;
  background-size: 100% 100%;
  height: 39px;
  position: relative;
  width: 1440px;
}

.landing-page .footer-text {
  color: #ffffff;
  font-family: "DM Sans", Helvetica;
  font-size: 20px;
  font-weight: 400;
  left: 626px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 5px;
  width: 188px;
}

.landing-page .block-1-image-section {
position: absolute;
top: 0px;
left: 0px;
width: 550px;
height: 400px;
mix-blend-mode: normal;
}
.landing-page .league-logo {
position: absolute;
top: 17px;
left: 45px;
width: 445.33px;
height: 328px;
overflow: hidden;
}
.landing-page .title-1 {
position: absolute;
top: 0px;
left: 0px;
font-weight: 800;
display: inline-block;
width: 675px;
height: 61px;
}
.landing-page .text-1 {
position: absolute;
top: 69px;
left: 0.23px;
font-size: 32px;
font-weight: 500;
color: #fff;
display: inline-block;
width: 674.77px;
height: 23px;
}
.landing-page .block-1-image-section {
position: absolute;
top: 80px;
left: 560px;
width: 675px;
height: 92px;
}
.landing-page .block-1-image-section {
position: absolute;
top: 0px;
left: 0px;
width: 1235px;
height: 400px;
}
.landing-page .section-1-container {
position: absolute;
top: 0px;
left: 0px;
width: 1281px;
height: 400px;
}
.landing-page .block-1-container {
  position: absolute;
  top: 1100px; /* Adjust the top value according to your layout */
  left: 81px;
  width: 1281px;
  height: auto;
  overflow-y: auto;
  text-align: left;
}

</style>
