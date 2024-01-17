<!-- YourVueComponent.vue -->
<template>
  <div id="background">
    <Navbar></Navbar>
    <div id="main-container">
      <div id="flex-row-dd">
        <span id="most-read">MOST READ</span><span id="top-news">TOP NEWS</span>
        <div id="vector"></div>
        <div id="rectangle"></div>
        <button id="rectangle-1"></button>
        <div id="rectangle-2">
          <div id="flex-row-a">
            <div id="rectangle-3"><img src="../assets/porto3" alt="" /></div>
            <span id="it-was-necessary-to-lose-fear"
              >It was necessary to lose fear: Estrela da Amadora beats Boavista
              (3-1)</span
            >
          </div>
          <div id="flex-row-bd">
            <div id="rectangle-4"></div>
            <div id="rectangle-5"></div>
            <div id="rectangle-6"></div>
          </div>
          <div id="flex-row">
            <span id="fc-porto-beats-casa-pia"
              >FC Porto beats Casa Pia (3-1) and catches Sporting one week before the
              Classic</span
            ><span id="frederico-varandas"
              >Frederico Varandas: "There isn't a Sporting fan who isn't traumatized
              <br />when they see João Pinheiro" </span
            ><span id="vitoria-da-silva"
              >Vitória da Silva: Sporting falls in Guimarães (2-3) with goals from Tiago,
              André and Dani Silva
            </span>
          </div>
        </div>
        <div id="rectangle-7"></div>
        <div id="rectangle-8"></div>
        <div id="rectangle-9"></div>
        <div id="rectangle-a"></div>
        <div id="rectangle-b"></div>
        <div id="rectangle-c"></div>
        <div id="rectangle-d"></div>
        <button id="rectangle-e"></button>
      </div>
      <div id="flex-row-ce">
        <span id="breaking-news">BREAKING NEWS</span>
        <div id="rectangle-11">
          <div id="frame">
            <div id="breaking-news-12">
              <div id="minutes-ago-benfica">
                <span id="minutes-ago">31 minutes ago<br /></span
                ><span id="benfica-is-victorious"
                  >Benfica is victourious on another match</span
                >
              </div>
              <div id="rectangle-13"></div>
              <div id="minutes-ago-porto">
                <span id="minutes-ago-14">40 minutes ago<br /></span
                ><span id="porto-loses-important"
                  >Porto loses important game for champions
                </span>
              </div>
              <div id="rectangle-15"></div>
              <div id="minutes-ago-braga">
                <span id="minutes-ago-16">43 minutes ago<br /></span
                ><span id="braga-as-an-important"
                  >Braga as an important match coming</span
                >
              </div>
              <div id="rectangle-17"></div>
              <div id="hour-ago-rosario-central">
                <span id="hour-ago">1 hour ago<br /></span
                ><span id="rosario-central-coach"
                  >Rosario Central coach on Di María's return</span
                >
              </div>
              <div id="rectangle-18"></div>
              <div id="hours-ago-petit">
                <span id="hours-ago">2 hours ago<br /></span
                ><span id="petit-por-um-fio">Petit por um fio: mudança no Bessa</span>
              </div>
              <div id="rectangle-19"></div>
              <div id="hours-ago-braga">
                <span id="hours-ago-1a">3 hours ago<br /></span
                ><span id="braga-as-an-important-match"
                  >Braga as an important match coming</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="div">
          <div class="div-2">
            <div class="div-3">
              <span class="span">SPORTING</span
              ><span class="span-2"
                ><div class="div-4">Mais noticias do Sporting</div>
              </span>
            </div>
            <div class="div-5">
              <div class="div-6">
                <div class="column">
                  <img src="../assets/sporting1.png" />
                </div>
                <div class="column-2">
                  <img src="../assets/sporting2.png" />
                </div>
                <div class="column-3">
                  <img src="../assets/sporting3.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="div-7">
            <div class="div-8">
              <span class="span-3">PORTO</span
              ><span class="span-4"
                ><div class="div-9">Mais noticias do Porto</div>
              </span>
            </div>
            <div class="div-10">
              <div class="div-11">
                <div class="column">
                  <img src="../assets/porto1.png" />
                </div>
                <div class="column-4">
                  <img src="../assets/porto2.png" />
                </div>
                <div class="column-5">
                  <img src="../assets/porto3.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="div-12">
            <div class="div-13">
              <span class="span-5">BENFICA</span
              ><span class="span-6"
                ><div class="div-14">Mais noticias do Benfica</div>
              </span>
            </div>
            <div class="div-15">
              <div class="div-16">
                <div class="column">
                  <img src="../assets/benfica1.png" />
                </div>
                <div class="column-6">
                  <img src="../assets/benfica2.png" />
                </div>
                <div class="column-7">
                  <img src="../assets/benfica3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from "./NavbarView.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
:root {
  --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
    "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB",
    "Microsoft Yahei UI", "Microsoft Yahei", "Source Han Sans CN", sans-serif;
}

.div {
  display: flex;
  max-width: 740px;
  flex-direction: column;
}
.div-2 {
  position: absolute;
  border-radius: 15px;
  border: 5px solid var(--1-border-orange, #ff8730);
  background-color: var(--1-blue-boxes, #010d34);
  display: flex;
  width: 700px;
  left: 525px;
  flex-direction: column;
  padding: 0 15px 30px 0;
}

.div-3 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}

.span {
  color: #fff;
  white-space: nowrap;
  border-radius: 15px 0px;
  background-color: var(--Border-orange, #ff8730);
  justify-content: center;
  padding: 15px 10px;
  font: 700 28px DM Sans, sans-serif;
}

.span-2 {
  align-self: center;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: auto 0;
}
.div-4 {
  color: #fff;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 12px DM Sans, sans-serif;
}

.img {
  aspect-ratio: 0.8;
  object-fit: contain;
  object-position: center;
  width: 20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: stretch;
  max-width: 100%;
}
.div-5 {
  margin: 10px 23px 0;
}

.div-6 {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

.img-2 {
  aspect-ratio: 1.38;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}

.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

.img-3 {
  aspect-ratio: 1.36;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  flex: 1;
}

.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

.img-4 {
  aspect-ratio: 1.37;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  flex: 1;
}

.div-7 {
  position: absolute;
  border-radius: 15px;
  border: 5px solid var(--1-border-orange, #ff8730);
  background-color: var(--1-blue-boxes, #010d34);
  display: flex;
  margin-top: 50px;
  top: 240px;
  width: 700px;
  left: 525px;
  flex-direction: column;
  padding: 0 15px 30px 0;
}

.div-8 {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}

.span-3 {
  color: #fff;
  white-space: nowrap;
  border-radius: 15px 0px;
  background-color: var(--Border-orange, #ff8730);
  justify-content: center;
  padding: 15px 33px;
  font: 700 28px DM Sans, sans-serif;
}

.span-4 {
  align-self: center;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: auto 0;
}
.div-9 {
  color: #fff;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 12px DM Sans, sans-serif;
}

.div-10 {
  margin: 10px 23px 0;
}

.div-11 {
  display: flex;
}

.img-5 {
  aspect-ratio: 1.38;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}

.column-4 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

.img-6 {
  aspect-ratio: 1.36;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  flex: 1;
}

.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

.img-7 {
  aspect-ratio: 1.37;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  flex: 1;
}

.div-12 {
  position: absolute;
  border-radius: 15px;
  border: 5px solid var(--1-border-orange, #ff8730);
  background-color: var(--1-blue-boxes, #010d34);
  display: flex;
  margin-top: 50px;
  top: 530px;
  width: 700px;
  left: 525px;
  flex-direction: column;
  padding: 0 15px 30px 0;
}

.div-13 {
  display: flex;
  width: 100%;
}

.span-5 {
  color: #fff;
  white-space: nowrap;
  border-radius: 15px 0px;
  background-color: var(--Border-orange, #ff8730);
  justify-content: center;
  padding: 15px 21px;
  font: 700 28px DM Sans, sans-serif;
}

.span-6 {
  align-self: center;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: auto 0;
}
.div-14 {
  color: #fff;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 12px DM Sans, sans-serif;
}

.div-15 {
  margin: 10px 23px 0;
}

.div-16 {
  display: flex;
}

.img-8 {
  aspect-ratio: 1.38;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}

.column-6 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

.img-9 {
  aspect-ratio: 1.36;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  flex: 1;
}

.column-7 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

.img-10 {
  aspect-ratio: 1.37;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  flex: 1;
}

#main-container {
  overflow: hidden;
}

#main-container,
#main-container * {
  box-sizing: border-box;
}

input,
select,
textarea,
button {
  outline: 0;
}

#main-container {
  position: relative;
  width: 1240px;
  height: 1593px;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
}

#flex-row-dd {
  position: relative;
  width: 1240px;
  height: 647px;
  margin: 0 0 0 0;
  z-index: 29;
}

#most-read {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 36px;
  top: 0;
  left: 900px;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  white-space: nowrap;
  z-index: 11;
}

#top-news {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  width: 182px;
  height: 42px;
  top: 21px;
  left: 309px;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 32px;
  font-weight: 700;
  line-height: 41.664px;
  text-align: center;
  white-space: nowrap;
  z-index: 16;
}

#vector {
  position: absolute;
  width: 805px;
  height: 606px;
  top: 39.5px;
  left: -2.5px;
  background: url(../assets/images/481a195e-8e51-4f52-8340-f47cd63f6a8f.png) no-repeat
    center;
  background-size: cover;
  z-index: 29;
}

#rectangle {
  position: absolute;
  width: 137px;
  height: 100px;
  top: 43px;
  left: 900px;
  background: #000d33;
  border: 5px solid #ff862f;
  z-index: 1;
  border-radius: 15px;
}

#rectangle-1 {
  position: absolute;
  width: 173px;
  height: 100px;
  left: 980px;
  cursor: pointer;
  background: #9caad3;
  border: none;
  z-index: 6;
  border-radius: 15px;
}

#rectangle-2 {
  position: absolute;
  width: 800px;
  height: 600px;
  top: 47px;
  left: 8px;
  background: #000d33;
  z-index: 15;
  border-radius: 15px;
}

#flex-row-a {
  position: relative;
  width: 729px;
  height: 219px;
  margin: 46px 0 0 42px;
  z-index: 28;
}

#rectangle-3 {
  position: absolute;
  width: 336px;
  height: 219px;
  top: 0;
  left: 0;
  z-index: 27;
  border-radius: 15px;
}

#it-was-necessary-to-lose-fear {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  width: 371px;
  height: 108px;
  top: 45px;
  left: 358px;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
  z-index: 28;
}

#flex-row-bd {
  position: relative;
  width: 700px;
  height: 150px;
  margin: 58px 0 0 42px;
  z-index: 24;
}

#rectangle-4 {
  position: absolute;
  width: 231px;
  height: 150px;
  top: 0;
  left: 0;
  background: #263154;
  z-index: 24;
  border-radius: 15px;
}

#rectangle-5 {
  position: absolute;
  width: 231px;
  height: 150px;
  top: 0;
  left: 235px;
  background: #263154;
  z-index: 21;
  border-radius: 15px;
}

#rectangle-6 {
  position: absolute;
  width: 230px;
  height: 150px;
  top: 0;
  left: 470px;
  background: #263154;
  z-index: 18;
  border-radius: 15px;
}

#flex-row {
  position: relative;
  width: 700px;
  height: 48px;
  margin: 16px 0 0 42px;
  z-index: 25;
}

#fc-porto-beats-casa-pia {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  width: 231px;
  height: 48px;
  top: 0;
  left: 0;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 15.624px;
  text-align: left;
  z-index: 25;
}

#frederico-varandas {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  width: 232px;
  height: 48px;
  top: 0;
  left: 234px;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 15.624px;
  text-align: left;
  z-index: 22;
}

#vitoria-da-silva {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  width: 230px;
  height: 48px;
  top: 0;
  left: 470px;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 15.624px;
  text-align: left;
  z-index: 19;
}

#rectangle-7 {
  position: absolute;
  width: 137px;
  height: 100px;
  top: 168px;
  left: 900px;
  background: #000d33;
  border: 5px solid #ff862f;
  z-index: 4;
  border-radius: 15px;
}

#rectangle-8 {
  position: absolute;
  width: 173px;
  height: 100px;
  top: 168px;
  left: 1067px;
  background: #9caad3;
  z-index: 7;
  border-radius: 15px;
}

#rectangle-9 {
  position: absolute;
  width: 137px;
  height: 100px;
  top: 293px;
  left: 900px;
  background: #000d33;
  border: 5px solid #ff862f;
  z-index: 5;
  border-radius: 15px;
}

#rectangle-a {
  position: absolute;
  width: 173px;
  height: 100px;
  top: 293px;
  left: 1067px;
  background: #9caad3;
  z-index: 8;
  border-radius: 15px;
}

#rectangle-b {
  position: absolute;
  width: 137px;
  height: 100px;
  top: 418px;
  left: 900px;
  background: #000d33;
  border: 5px solid #ff862f;
  z-index: 3;
  border-radius: 15px;
}

#rectangle-c {
  position: absolute;
  width: 173px;
  height: 100px;
  top: 418px;
  left: 1067px;
  background: #9caad3;
  z-index: 9;
  border-radius: 15px;
}

#rectangle-d {
  position: absolute;
  width: 137px;
  height: 100px;
  top: 543px;
  left: 900px;
  background: #000d33;
  border: 5px solid #ff862f;
  z-index: 2;
  border-radius: 15px;
}

#rectangle-e {
  position: absolute;
  width: 173px;
  height: 100px;
  top: 500px;
  left: 980px;
  cursor: pointer;
  background: #9caad3;
  border: none;
  z-index: 10;
  border-radius: 15px;
}

#flex-row-ce {
  position: relative;
  width: 1240px;
  height: 850px;
  margin: 96px 0 0 0;
  margin-left: 1vw;
  z-index: 79;
}

#box {
  position: absolute;
  width: 740px;
  height: 250px;
  top: 0;
  left: 500px;
  background: url(../assets/images/724fab66-6863-4826-8d2c-0189449cc233.png) no-repeat
    center;
  background-size: cover;
  z-index: 79;
}

#flex-row-d {
  position: relative;
  width: 717px;
  height: 36px;
  margin: 7px 0 0 8px;
  z-index: 83;
}

#sporting {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 36px;
  top: 0;
  left: 0;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  white-space: nowrap;
  z-index: 80;
}

#detail-arrow {
  position: absolute;
  width: 20px;
  height: 25.263px;
  top: 5px;
  left: 697px;
  background: url(../assets/images/9828f918-1823-4203-963d-edd7e1163b4b.png) no-repeat
    center;
  background-size: 100% 100%;
  z-index: 82;
}

#mais-noticias-do-sporting {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 16px;
  top: 10px;
  left: 553px;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 15.624px;
  text-align: left;
  white-space: nowrap;
  z-index: 83;
}

#flex-row-c {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 679px;
  height: 160px;
  margin: 17px 0 0 30px;
  z-index: 86;
}

#sporting-imagem {
  flex-shrink: 0;
  position: relative;
  width: 220px;
  height: 160px;
  background: url(../assets/images/1b7f6907-09d0-4a75-b98b-d20a1b4416c0.png) no-repeat
    center;
  background-size: cover;
  z-index: 84;
  border-radius: 15px;
}

#sporting-imagem-f {
  flex-shrink: 0;
  position: relative;
  width: 218px;
  height: 160px;
  background: url(../assets/images/9276cead-bff7-43cd-8f95-6d59228ea329.png) no-repeat
    center;
  background-size: cover;
  z-index: 86;
  border-radius: 15px;
}

#sporting-imagem-10 {
  flex-shrink: 0;
  position: relative;
  width: 219px;
  height: 160px;
  background: url(../assets/images/3b8a432a-efd1-4b07-b95d-3df0e4481db3.png) no-repeat
    center;
  background-size: cover;
  z-index: 85;
  border-radius: 15px;
}

#breaking-news {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 42px;
  top: 4px;
  left: 70px;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 32px;
  font-weight: 700;
  line-height: 41.664px;
  text-align: left;
  white-space: nowrap;
  z-index: 35;
}

#rectangle-11 {
  position: absolute;
  width: 400px;
  height: 800px;
  top: 50px;
  left: 0;
  background: #000d33;
  border: 5px solid #ff862f;
  z-index: 34;
  border-radius: 15px;
}

#frame {
  position: relative;
  width: 300px;
  height: 675px;
  margin: 50px 0 0 50px;
  z-index: 39;
  overflow: hidden;
}

#breaking-news-12 {
  position: absolute;
  width: 304px;
  height: 873px;
  top: 0;
  left: 0;
  z-index: 40;
  border-radius: 15px;
}

#minutes-ago-benfica {
  position: relative;
  width: 299px;
  height: 86px;
  margin: 0 0 0 1px;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
  text-overflow: initial;
  white-space: nowrap;
  z-index: 43;
}

#minutes-ago {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 36.456px;
  text-align: left;
}

#benfica-is-victorious {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
}

#rectangle-13 {
  position: relative;
  width: 300px;
  height: 10px;
  margin: 27px 0 0 0;
  background: #263154;
  z-index: 44;
  border-radius: 15px;
}

#minutes-ago-porto {
  position: relative;
  width: 300px;
  height: 92px;
  margin: 24px 0 0 0;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
  text-overflow: initial;
  white-space: nowrap;
  z-index: 42;
}

#minutes-ago-14 {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 36.456px;
  text-align: left;
}

#porto-loses-important {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
}

#rectangle-15 {
  position: relative;
  width: 300px;
  height: 10px;
  margin: 24px 0 0 0;
  background: #263154;
  z-index: 45;
  border-radius: 15px;
}

#minutes-ago-braga {
  position: relative;
  width: 304px;
  height: 92px;
  margin: 13px 0 0 0;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
  text-overflow: initial;
  white-space: nowrap;
  z-index: 41;
}
#minutes-ago-16 {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 36.456px;
  text-align: left;
}
#braga-as-an-important {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
}
#rectangle-17 {
  position: relative;
  width: 300px;
  height: 10px;
  margin: 35px 0 0 0;
  background: #263154;
  z-index: 46;
  border-radius: 15px;
}
#hour-ago-rosario-central {
  position: relative;
  width: 304px;
  height: 84px;
  margin: 24px 0 0 0;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
  text-overflow: initial;
  white-space: nowrap;
  z-index: 51;
}
#hour-ago {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 36.456px;
  text-align: left;
}
#rosario-central-coach {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
}
#rectangle-18 {
  position: relative;
  width: 300px;
  height: 10px;
  margin: 32px 0 0 0;
  background: #263154;
  z-index: 47;
  border-radius: 15px;
}
#hours-ago-petit {
  position: relative;
  width: 287.54px;
  height: 93px;
  margin: 24px 0 0 0;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
  text-overflow: initial;
  white-space: nowrap;
  z-index: 52;
}
#hours-ago {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 36.456px;
  text-align: left;
}
#petit-por-um-fio {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
}
#rectangle-19 {
  position: relative;
  width: 300px;
  height: 10px;
  margin: 23px 0 0 0;
  background: #263154;
  z-index: 48;
  border-radius: 15px;
}
#hours-ago-braga {
  position: relative;
  width: 304px;
  height: 92px;
  margin: 24px 0 0 0;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
  text-overflow: initial;
  white-space: nowrap;
  z-index: 49;
}
#hours-ago-1a {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 36.456px;
  text-align: left;
}
#braga-as-an-important-match {
  position: relative;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36.456px;
  text-align: left;
}
#rectangle-1b {
  position: relative;
  width: 300px;
  height: 10px;
  margin: 24px 0 0 0;
  background: #263154;
  z-index: 50;
  border-radius: 15px;
}
#flex-row-1c {
  position: relative;
  width: 169px;
  height: 36px;
  margin: 20px 0 0 217px;
  z-index: 38;
}
#detail-arrow-1d {
  position: absolute;
  width: 27px;
  height: 36px;
  top: 0;
  left: 142px;
  background: url(../assets/images/c68f53ce-5374-4528-b620-235e61372704.png) no-repeat
    center;
  background-size: cover;
  z-index: 37;
}
#more-news {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 28px;
  top: 1px;
  left: 0;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: left;
  white-space: nowrap;
  z-index: 38;
}
#box-1e {
  position: absolute;
  width: 740px;
  height: 250px;
  top: 300px;
  left: 500px;
  background: url(../assets/images/c97f7e3f-534d-4112-9ba4-a7b4b4be0237.png) no-repeat
    center;
  background-size: cover;
  z-index: 68;
}
#flex-row-ad {
  position: relative;
  width: 694px;
  height: 36px;
  margin: 7px 0 0 31px;
  z-index: 72;
}
#porto {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 36px;
  top: 0;
  left: 0;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  white-space: nowrap;
  z-index: 69;
}
#detail-arrow-1f {
  position: absolute;
  width: 20px;
  height: 25.263px;
  top: 5px;
  left: 674px;
  background: url(../assets/images/e17d2610-23b2-4255-a1b8-aa0394ea42a1.png) no-repeat
    center;
  background-size: 100% 100%;
  z-index: 71;
}
#mais-noticias-do-porto {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 16px;
  top: 10px;
  left: 548px;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 15.624px;
  text-align: left;
  white-space: nowrap;
  z-index: 72;
}
#flex-row-ce-20 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 679px;
  height: 160px;
  margin: 17px 0 0 30px;
  z-index: 75;
}
#porto-imagem {
  flex-shrink: 0;
  position: relative;
  width: 220px;
  height: 160px;
  background: url(../assets/images/46ebb3ff-c7a0-4fb9-90a8-8729168b8b68.png) no-repeat
    center;
  background-size: cover;
  z-index: 73;
  border-radius: 15px;
}
#porto-imagem-21 {
  flex-shrink: 0;
  position: relative;
  width: 218px;
  height: 160px;
  background: url(../assets/images/f7a8f4a1-9f91-4786-ae20-34e2fcaec4be.png) no-repeat
    center;
  background-size: cover;
  z-index: 74;
  border-radius: 15px;
}
#porto-imagem-22 {
  flex-shrink: 0;
  position: relative;
  width: 219px;
  height: 160px;
  background: url(../assets/images/10f4c17a-da83-4d64-b91a-ea7a6f252465.png) no-repeat
    center;
  background-size: cover;
  z-index: 75;
  border-radius: 15px;
}
#box-23 {
  position: absolute;
  width: 740px;
  height: 250px;
  top: 600px;
  left: 500px;
  background: url(../assets/images/22fb634f-156c-4f47-b39c-677b71666e47.png) no-repeat
    center;
  background-size: cover;
  z-index: 57;
}
#flex-row-a-24 {
  position: relative;
  width: 706px;
  height: 36px;
  margin: 7px 0 0 19px;
  z-index: 61;
}
#benfica {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 36px;
  top: 0;
  left: 0;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  white-space: nowrap;
  z-index: 58;
}
#detail-arrow-25 {
  position: absolute;
  width: 20px;
  height: 25.263px;
  top: 5px;
  left: 686px;
  background: url(../assets/images/79b3c437-e062-493b-946e-8657f08f22b0.png) no-repeat
    center;
  background-size: 100% 100%;
  z-index: 60;
}
#mais-noticias-do-benfica {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  height: 16px;
  top: 10px;
  left: 548px;
  color: #ffffff;
  font-family: DM Sans, var(--default-font-family);
  font-size: 12px;
  font-weight: 400;
  line-height: 15.624px;
  text-align: left;
  white-space: nowrap;
  z-index: 61;
}
#flex-row-f {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 679px;
  height: 160px;
  margin: 17px 0 0 30px;
  z-index: 64;
}
#benfica-imagem {
  flex-shrink: 0;
  position: relative;
  width: 220px;
  height: 160px;
  background: url(../assets/images/b4d60a9a-f49d-4e51-8cdf-905e722461e5.png) no-repeat
    center;
  background-size: cover;
  z-index: 62;
  border-radius: 15px;
}
#benfica-imagem-26 {
  flex-shrink: 0;
  position: relative;
  width: 218px;
  height: 160px;
  background: url(../assets/images/c6f2986f-dd63-4da6-a11d-435cde2f72cc.png) no-repeat
    center;
  background-size: cover;
  z-index: 63;
  border-radius: 15px;
}
#benfica-imagem-27 {
  flex-shrink: 0;
  position: relative;
  width: 219px;
  height: 160px;
  background: url(../assets/images/75f0d9c3-fca6-473e-ba19-df3f6a478d3b.png) no-repeat
    center;
  background-size: cover;
  z-index: 64;
  border-radius: 15px;
}
</style>
