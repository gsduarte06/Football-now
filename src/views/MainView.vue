<template>
  <div id="background">
    <Navbar></Navbar>
    <div id="topnew"></div>
    <div id="calendar">
      <div id="calendarbox">
        <p id="calendartitle">CALENDAR</p>
        <div>
          <img id="leftbutton" src="../assets/Left.png" alt="" />
          <img id="rightbutton" src="../assets/Right.png" alt="" />
        </div>
        <div id="calendarday"><img src="../assets/Group 18.png" alt="" /></div>
      </div>
    </div>
    <div id="mainmatch">
      <div id="mainmatchtitle"><p>TOP GAMES</p></div>
      <div id="mainmatchbox"></div>
    </div>
    <div id="games">
      <div id="gamestitle"><p>GAMES</p></div>
      <div id="gamesbox"></div>
    </div>
    <div id="lastgame">
      <div id="lastgametitle"><p>LAST GAMES</p></div>
      <div id="lastgamebox"></div>
    </div>

    <div id="news">
      <div id="newstitle"><p>NEWS</p></div>
      <div id="newsbox"></div>
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

<style>
#background {
  background-color: #131426;
  height: auto;
  width: 100vw;
}

#topnew {
  width: 36vw;
  height: 40vh;
  border-radius: 1vw;
  background-image: url("../assets/benfica.jpg");
  margin-top: 10vh;
  margin-left: 15vw;
}

#calendar {
margin-left: 65vw;
margin-top: -40vh;
}

#calendarbox {
  width: 25vw;
  height: 80vh;
  border-radius: 1vw;
  border: 0.3vw solid var(--2-border-orange, #eb6300);
  background: var(--2-Blue-boxes, #263154);
}

#calendartitle {
  display: block;
  color: #fff;
  font-family: DM Sans;
  font-size: 1.8vw;
  margin-left: 2vw;
  margin-top: 4vh;
}

#calendarday {
  margin-left: 2vw;
  margin-top: -8vh;
}

#mainmatch {
  margin-left: 15vw;
}

#mainmatchtitle {
  width: 12vw;
  height: 4vh;
  margin-top: -30vh;
  margin-left: 11vw;
  background-color: #ff8730;
  border-radius: 1vw 1vw 0vw 0vw;
  color: #fff;
  font-family: DM Sans;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}

#mainmatchbox {
  width: 35vw;
  height: 70vh;
  border-radius: 1vw;
  border: 0.4vw solid #ff8730;
  background: var(--1-blue-boxes, #010d34);
}

#games {
  margin-left: 65vw;
  margin-top: -45vh;
}
#gamestitle {
  width: 12vw;
  height: 4vh;
  margin-top: 10vh;
  margin-left: 7vw;
  background-color: #ff8730;
  border-radius: 1vw 1vw 0vw 0vw;
  color: #fff;
  font-family: DM Sans;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}

#gamesbox {
  width: 25vw;
  height: 50vh;
  border-radius: 1vw;
  border: 0.3vw solid var(--2-border-orange, #eb6300);
  background: var(--2-Blue-boxes, #263154);
}

#lastgame {
  margin-top: -10vh;
  margin-left: 15vw;
}

#lastgametitle {
  width: 16vw;
  height: 4vh;
  margin-left: 10vw;
  background-color: #ff8730;
  border-radius: 1vw 1vw 0vw 0vw;
  color: #fff;
  font-family: DM Sans;
  font-size: 1.8vw;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}

#lastgamebox {
  width: 35vw;
  height: 80vh;
  border-radius: 1vw;
  border: 0.4vw solid #ff8730;
  background: var(--1-blue-boxes, #010d34);
}

#news {
  margin-left: 65vw;
  margin-top: -68vh;
  margin-bottom: 30vh;
}

#newstitle {
  width: 12vw;
  height: 4vh;
  margin-left: 7vw;
  background-color: #ff8730;
  border-radius: 1vw 1vw 0vw 0vw;
  color: #fff;
  font-family: DM Sans;
  font-size: 1.8vw;
  font-style: normal;
  line-height: normal;
  text-align: center;
}

#newsbox {
  width: 25vw;
  height: 60vh;
  border-radius: 1vw;
  border: 0.3vw solid var(--2-border-orange, #eb6300);
  background: var(--2-Blue-boxes, #263154);
}

div p {
  color: #fff;
  font-family: DM Sans;
  font-size: 1.8vw;
  font-style: normal;
  line-height: normal;
}

footer {
  width: 100%;
  height: 39px;
  background: var(--3-blue-boxes, #566cb3);
}
</style>

