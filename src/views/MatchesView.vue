<template>
  <div id="background">
    <Navbar></Navbar>
    <div id="MainMatch" @click="GoToGame">
      <div id="match">
        <div id="Sporting">
          <img src="../assets/sporting_logo.png" alt="" />
          <p>SPORTING</p>
        </div>
        <p id="title">Matchday 15 of 36</p>
        <div id="score">
          <div id="result">
            <p id="goals">0 : 5</p>
          </div>
          <p id="small">08/12/2023</p>
          <p id="small">15:00H</p>
        </div>
        <p id="ended">ENDED</p>
        <div id="Benfica">
          <img src="../assets/benfica_logo.png" alt="" />
          <p>BENFICA</p>
        </div>
      </div>
    </div>
    <div id="grid">
      <div id="YourGames">
        <div id="YourGamestitle"><p id="header">YOUR GAMES</p></div>
        <div id="YourGamesbox">
          <div id="boxteams">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams2">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">2 - 1</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
        </div>
      </div>
      <div id="Ranking">
        <div id="Rankingtitle"><p id="header">RANKING</p></div>
        <div id="Rankingbox"></div>
      </div>
      <div id="AllGames">
        <div id="AllGamestitle"><p id="header">ALL GAMES</p></div>
        <div id="AllGamesbox">
          <div id="boxteams">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams2">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">2 - 1</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams3">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams4">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">2 - 1</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams5">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams6">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">2 - 1</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams7">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams8">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">2 - 1</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams9">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams10">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams11">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams12">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams13">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams14">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams15">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
            </div>
          </div>
          <div id="boxteams16">
            <div id="team1">
              <img src="../assets/benfica_logo.png" alt="" />
              <p>Benfica</p>
            </div>
            <div id="matchresult">
              <div id="matchscore">0 - 2</div>
              <p>10/12/2023</p>
              <p>15:00H</p>
            </div>
            <div id="team2">
              <img src="../assets/sporting_logo.png" alt="" />
              <p>Belenenses</p>
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
  methods: {
    GoToGame() {
      this.$router.push({ name: "Game" });
    },
  },
};
</script>

<style>
#background {
  background-color: #131426;
  height: auto;
  width: auto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

#header {
  height: 100%;
}

#MainMatch {
  width: 100%;
  height: 450px;
  border-bottom: 5px solid #ff8730;
  border-top: 5px solid #ff8730;
  margin-top: 200px;
  background: var(--1-blue-boxes, #010d34);
}

#match {
  display: grid;
  grid-template-columns: 12.5% 10% 10% 5% 20% 5% 10% 10% 12.5%;
  grid-template-rows: 100px 250px 100px;
}

#Sporting {
  margin: auto;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;
}

#score {
  margin: auto;
  grid-column-start: 5;
  grid-column-end: 5;
}

#title {
  grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 1;
  margin: auto;
}

#result {
  margin: auto;
}

#goals {
  margin: auto;
  text-align: center;
  width: 145px;
  height: 110px;
  background: var(--2-Blue-boxes, #263154);
  grid-row-start: 2;
  grid-row-end: 3;
}

#small {
  margin: auto;
  text-align: center;
}

#ended {
  margin: auto;
  text-align: center;
  grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 3;
}

#Benfica {
  margin: auto;
  grid-column-start: 7;
  grid-column-end: 9;
  grid-row-start: 2;
  grid-row-end: 2;
}

#grid {
  width: 100%;
  height: 3096px;
  display: grid;
  grid-template-columns: 5% 40% 10% 40% 5%;
  grid-template-rows: 95px 701px 95px 2147px;
}

#YourGames {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 7% 93%;
}

#YourGamestitle {
  margin: auto;
  width: 13vw;
  height: 100%;
  background-color: #ff8730;
  border-radius: 1vw 1vw 0vw 0vw;
  grid-row-start: 1;
  grid-row-end: 1;
}

#YourGamestitle p {
  text-align: center;
}

#YourGamesbox {
  border-radius: 1vw;
  border: 0.3vw solid var(--2-border-orange, #eb6300);
  background: var(--2-Blue-boxes, #263154);
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 10% 35% 10% 35% 10%;
}

#boxteams {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams #team2 img {
  width: 70%;
  margin: auto;
}
#boxteams #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams2 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams2 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams2 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams2 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams2 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams2 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams2 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams2 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams2 #team2 img {
  width: 71%;
  margin: auto;
}
#boxteams2 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams3 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams3 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams3 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams3 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams3 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams3 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams3 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams3 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams3 #team2 img {
  width: 70%;
  margin: auto;
}
#boxteams3 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams4 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams4 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams4 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams4 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams4 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams4 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams4 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams4 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams4 #team2 img {
  width: 71%;
  margin: auto;
}
#boxteams4 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams5 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 6;
  grid-row-end: 6;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams5 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams5 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams5 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams5 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams5 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams5 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams5 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams5 #team2 img {
  width: 70%;
  margin: auto;
}
#boxteams5 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams6 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 6;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams6 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams6 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams6 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams6 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams6 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams6 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams6 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams6 #team2 img {
  width: 71%;
  margin: auto;
}
#boxteams6 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams7 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams7 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams7 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams7 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams7 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams7 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams7 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams7 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams7 #team2 img {
  width: 70%;
  margin: auto;
}
#boxteams7 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams8 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams8 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams8 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams8 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams8 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams8 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams8 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams8 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams8 #team2 img {
  width: 71%;
  margin: auto;
}
#boxteams8 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams9 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams9 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams9 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams9 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams9 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams9 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams9 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams9 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams9 #team2 img {
  width: 70%;
  margin: auto;
}
#boxteams9 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams10 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams10 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams10 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams10 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams10 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams10 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams10 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams10 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams10 #team2 img {
  width: 71%;
  margin: auto;
}
#boxteams10 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams11 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 8;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams11 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams11 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams11 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams11 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams11 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams11 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams11 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams11 #team2 img {
  width: 70%;
  margin: auto;
}
#boxteams11 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams12 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 8;
  grid-row-end: 8;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams12 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams12 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams12 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams12 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams12 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams12 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams12 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams12 #team2 img {
  width: 71%;
  margin: auto;
}
#boxteams12 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams13 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 10;
  grid-row-end: 10;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams13 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams13 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams13 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams13 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams13 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams13 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams13 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams13 #team2 img {
  width: 70%;
  margin: auto;
}
#boxteams13 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams14 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 10;
  grid-row-end: 10;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams14 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams14 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams14 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams14 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams14 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams14 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams14 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams14 #team2 img {
  width: 71%;
  margin: auto;
}
#boxteams14 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams15 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 12;
  grid-row-end: 12;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams15 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams15 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams15 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams15 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams15 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams15 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams15 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams15 #team2 img {
  width: 70%;
  margin: auto;
}
#boxteams15 #team2 p {
  font-size: 22px;
  margin: auto;
}

#boxteams16 {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--3-blue-boxes, #566cb3);
  stroke-width: 2px;
  stroke: var(--Border-orange, #ff8730);
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 12;
  grid-row-end: 12;
  display: grid;
  grid-template-columns: 5% 27.5% 5% 25% 5% 27.5% 5%;
  grid-template-rows: 20% 60% 20%;
}

#boxteams16 #team1 {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams16 #team1 img {
  width: 100%;
  margin: auto;
}
#boxteams16 #team1 p {
  font-size: 22px;
  margin: auto;
}

#boxteams16 #matchresult {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
  margin: auto;
}
#boxteams16 #matchresult #matchscore {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: var(--1-blue-boxes, #010d34);
  margin: auto;
  color: #ffffff;
  text-align: center;
}

#boxteams16 #matchresult p {
  margin: auto;
  text-align: center;
  font-size: 15px;
}

#boxteams16 #team2 {
  width: 100%;
  height: 100%;
  grid-column-start: 6;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 2;
  margin: auto;
}

#boxteams16 #team2 img {
  width: 71%;
  margin: auto;
}
#boxteams16 #team2 p {
  font-size: 22px;
  margin: auto;
}

#Ranking {
  width: 100%;
  height: 100%;
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 7% 93%;
}
#Rankingtitle {
  margin: auto;
  width: 13vw;
  height: 100%;
  background-color: #ff8730;
  border-radius: 1vw 1vw 0vw 0vw;
  grid-row-start: 1;
  grid-row-end: 1;
}
#Rankingtitle p {
  text-align: center;
}

#Rankingbox {
  width: 100%;
  height: 100%;
  border-radius: 1vw;
  border: 0.3vw solid var(--2-border-orange, #eb6300);
  background: var(--2-Blue-boxes, #263154);
}

#AllGames {
  margin: auto;
  width: 100%;
  height: 90%;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: 5% 37.5% 15% 37.5% 5%;
  grid-template-rows: 3% 97%;
}

#AllGamestitle {
  margin: auto;
  width: 13vw;
  height: 100%;
  background-color: #ff8730;
  border-radius: 1vw 1vw 0vw 0vw;
  grid-column-start: 3;
  grid-column-end: 3;
}
#AllGamestitle p {
  margin: auto;
  text-align: center;
}

#AllGamesbox {
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 2;
  grid-row-end: 4;
  border-radius: 1vw;
  border: 0.3vw solid var(--2-border-orange, #eb6300);
  background: var(--2-Blue-boxes, #263154);
  display: grid;
  grid-template-columns: 10% 35% 10% 35% 10%;
  grid-template-rows: 4% 12% 4% 12% 4% 12% 4% 12% 4% 12% 4% 12% 4%;
}

footer {
  width: 100%;
  height: 39px;
  background: var(--3-blue-boxes, #566cb3);
}
</style>
