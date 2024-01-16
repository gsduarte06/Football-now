<template>
  <div id="background">
    <Navbar></Navbar>
    <div id="teams">
      <div id="Benfica">
        <img src="@\assets\benfica_logo.png" alt="" />
        <p>{{ homeTeam }}</p>
      </div>

      <div id="Resultado">
        <p>{{ score }}</p>
      </div>
      <div id="Sporting">
        <img src="@\assets\sporting_logo.png" alt="" />
        <p>{{ awayTeam }}</p>
      </div>
    </div>
    <div id="field">
      <img src="@\assets\football_field.png" alt="" />
    </div>
    <div id="headersStats">
      <div id="summary" @click="changeState('summary')">
        <p>SUMMARY</p>
      </div>
      <div id="stats" @click="changeState('stats')"><p>STATS</p></div>
      <div id="lineups" @click="changeState('lineups')"><p>LINEUPS</p></div>
    </div>

    <div id="switch">
      <div id="contentContainer ">
        <div id="summaryContent">

        </div>
      </div>
      <div id="statsContent">
        <div class="grid-container">
    <div class="grid-item">
      <div class="label">Ball Possession</div>
      <div class="value">74%</div>
      <div class="value1">26%</div>
      <div class="rectangle"></div>
      <div class="rectangle1"></div>
      <div class="backrectangle"></div>
    </div>

    <div class="grid-item">
      <div class="label"><p>Goal Attempts</p></div>
      <div class="value">16</div>
      <div class="value1">9</div>
      <div class="rectangle"></div>
      <div class="rectangle1"></div>
      <div class="backrectangle"></div>
    </div>

    <div class="grid-item">
      <div class="label"><p>Shots on Goal</p></div>
      <div class="value">7</div>
      <div class="value1">6</div>
      <div class="rectangle"></div>
      <div class="rectangle1"></div>
          <div class="backrectangle"></div>
        </div>

    <div class="grid-item">
      <div class="label"><p>Shots off Goal</p></div>
      <div class="value">4</div>
      <div class="value1">2</div>
      <div class="rectangle"></div>
      <div class="rectangle1"></div> 
       <div class="backrectangle"></div>
    </div>

    <div class="grid-item">
      <div class="label"><p>Corner Kicks</p></div>
      <div class="value">12</div>
      <div class="value1">5</div>
      <div class="rectangle"></div>
      <div class="rectangle1"></div>
      <div class="backrectangle"></div>
    </div>

    <div class="grid-item">
      <div class="label"><p>Yellow Cards</p></div>
      <div class="value">0</div>
      <div class="value1">4</div>
      <div class="rectangle"></div>
      <div class="rectangle1"></div> 
           <div class="backrectangle"></div>
    </div>

    <div class="grid-item">
      <div class="label"><p>Fouls</p></div>
      <div class="value">0</div>
      <div class="value1">4</div>
      <div class="rectangle"></div>
      <div class="rectangle1"></div>
      <div class="backrectangle"></div>
    </div>

    <div class="grid-item">
      <div class="label"><p>Passes</p></div>
      <div class="value">150</div>
      <div class="value1">90</div>
      <div class="rectangle"></div>
      <div class="rectangle1"></div>
      <div class="backrectangle"></div>
    </div>
  </div>
      </div>
      <div id="lineupsContent"></div>
    </div>

    <footer></footer>
  </div>
</template>

<script>
import Navbar from "./NavbarView.vue";
import { UseGameStore } from "@/stores/games";

export default {
  data() {
    return {
      currentState: "summary",
      match: [],
      homeTeam: "",
      awayTeam: "",
      events: [],
      score: "0-0",
      gameStore: UseGameStore(),
      index: 0,
    };
  },
  components: {
    Navbar,
  },

  methods: {
    changeState(state) {
      document.getElementById(`${this.currentState}Content`).style.display = "none";
      document.getElementById(`${this.currentState}`).style.background = "#263154";
      document.getElementById(`${state}`).style.background = "#010D34";
      document.getElementById(`${state}Content`).style.display = "grid";
      this.currentState = state;
    },

    iterateArrayWithDelay() {
      if (this.index < this.match.length) {
        const match = this.match[this.index];

        this.homeTeam = match.homeTeam;
        this.awayTeam = match.awayTeam;
        this.score = match.homeScore + " - " + match.awayScore;

        match.events.forEach((event) => {
          if (event.event === "half") {
            const divPar = document.createElement("div");
            divPar.classList.add("lineHalf");
            const divChildLeft = document.createElement("div");
            divChildLeft.classList.add("text");
            const divChildRight = document.createElement("div");
            divChildRight.classList.add("text");
            divChildRight.classList.add("right");

            const pLeft = document.createElement("p");
            pLeft.innerHTML = this.score;
            divChildLeft.appendChild(pLeft);
            const pRight = document.createElement("p");
            pRight.innerHTML = event.minute;
            divChildRight.appendChild(pRight);

            divPar.appendChild(divChildLeft);
            divPar.appendChild(divChildRight);

            document.getElementById("summaryContent").appendChild(divPar);

            console.log("half");
          } else {
            const divPar = document.createElement("div");
            divPar.classList.add("line");
            const divChild = document.createElement("div");
            const pleft = document.createElement("p");
            const pright = document.createElement("p");
            const icon = document.createElement("div");
            icon.id = "YellowCard";
            if (event.team === this.homeTeam) {
              divChild.classList.add("text");
            } else {
              divChild.classList.add("text");
              divChild.classList.add("right");
            }

            if (event.event === "card") {
              if (divChild.classList.contains("right")) {
                pleft.innerHTML = event.player;
                pright.innerHTML = event.minute;
              }
            }
            divChild.appendChild(pleft);
            divChild.appendChild(icon);
            divChild.appendChild(pright);

            divPar.appendChild(divChild);

            document.getElementById("summaryContent").appendChild(divPar);
          }
        });

        this.index++;
        // Continue iteration after a 2-second delay
        setTimeout(this.iterateArrayWithDelay, 2000);
      }
    },

    async fecthData() {
      await this.gameStore.fetchGames();
      this.match = this.gameStore.getGameEvents(1);
      console.log(this.match);

      setTimeout(this.iterateArrayWithDelay, 10);
    },
  },

  mounted() {
    document.getElementById("summary").style.background = "#010D34";
    this.fecthData();
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

#teams {
  display: flex;
  width: 40vw;
  height: 10vh;
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 100px;
  justify-content: space-between;
}

#Resultado {
  display: block;
  width: 6vw;
  height: 6vh;
  border-radius: 15px;
  background: var(--1-border-orange, #ff8730);
  margin: auto;
  margin-top: 7vh;
  text-align: center;
  color: #fff;
}
#Resultado p {
  margin-top: 5px;
  margin-bottom: auto;
}

#Benfica,
#Sporting {
  text-align: center;
}

#BenficaLogo {
  width: 12vw;
  height: 10vh;
}

#SportingLogo {
  width: 12vw;
  height: 10vh;
}

#field {
  width: 900px;
  height: 600px;
  margin: auto;
  margin-top: 10vh;
}

#summary,
#stats,
#lineups {
  width: 220px;
  height: 62px;
  border-radius: 15px 15px 0px 0px;
  border-top: 5px solid var(--1-border-orange, #ff8730);
  border-right: 5px solid var(--1-border-orange, #ff8730);
  border-left: 5px solid var(--1-border-orange, #ff8730);
  background: var(--1-blue-boxes, #263154);
  color: #fff;
  text-align: center;
}
#headersStats {
  margin-top: 20vh;
}

#summary {
  margin-left: 16vw;
  margin-bottom: -7vh;
}
#stats {
  margin-left: 28vw;
  margin-bottom: -7vh;
}
#lineups {
  margin-left: 40vw;
}

#summary p,
#stats p,
#lineups p {
  margin-top: 10px;
}

#summary img {
  width: auto;
  height: auto;
}
#switch {
  margin-left: 16vw;
  width: 1240px;
  height: 1800px;
  border-radius: 0px 15px 15px 15px;
  border: 5px solid var(--1-border-orange, #ff8730);
  background: var(--1-blue-boxes, #010d34);
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}

footer {
  width: 100%;
  height: 39px;
  background: var(--3-blue-boxes, #566cb3);
}

#contentContainer {
  width: 80%; /* Take 80% of the width within #switch */
  margin: auto; /* Center the content container */
}

#summaryContent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90%, 90%));
  gap: 10px;
  margin: auto;
}
#statsContent,#lineupsContent{
  display: none;
}
.lineHalf {
  position: relative; /* Add position relative to the container */
  margin-left: 10%;
  margin-top: 2vh;
  background-color: #263154;
  border-radius: 10px;
  display: inline-block;
}
.line {
  position: relative; /* Add position relative to the container */
  margin-left: 10%;
  margin-top: 2vh;
  background-color: #263154 0%;
  border-radius: 10px;
  display: inline-block;
}

.lineHalf {
  height: 33px;
  display: inline-block;
}

.line {
  height: 50px;
  display: inline-block;
}

.text p {
  font-size: 16px;
  display: inline-block;
  margin: 10px;
}

.text {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 5%; /* Adjust left position to match margin-left of the container */
  transform: translateY(-50%);
  width: 80%; /* Adjust width as needed */
  text-align: left;
  color: white; /* Set text color */
}

.text.right {
  display: inline-block;
  text-align: right;

  left: auto; /* Reset left position for right-aligned text */
  right: 5%; /* Adjust right position to match margin-left of the container */
}



#YellowCard {
  width: 19.05px;
  height: 28.95px;
  background: #f9e21b;
  border-radius: 5px;
  display: inline-block;
}

.soccer-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.team {
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  display: grid;
  grid-template-rows: repeat(7, 1fr); /* Adjust the number based on the number of stats */
}

.stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.number {
  font-weight: bold;
}

.percentage {
  font-weight: bold;
  color: #0066cc;
}


.grid-container {
  display: grid;
  grid-template-columns: 75vw;
  grid-template-rows:10vh 10vh 10vh 10vh 10vh 10vh 10vh 10vh ;
  justify-content: center;
  gap:20px ;
}

.grid-item {
  text-align: center;
  padding: 20px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 36vw 36vw;
  grid-template-rows: 2vh 2vh 3vh;
  grid-gap: 1vh;
}

.label {
  color: #fff;
  font-weight: 700;
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 3;
}

.value {
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  grid-column-start: 1;
  grid-column-end: 1;
  text-align: left;
}
.value1 {
  color: #fff;
  font-weight: 700;
  font-size: 28px;
  grid-column-start: 2;
  grid-column-end: 2;
  text-align: right;
}



.rectangle{
  background-color: var(--2-Blue-boxes, #ff8730);
  grid-column-start: 1;
  grid-column-end: 1;
  border-radius: 2vw 0vw 0vw 2vw;
}
.rectangle1{
  background-color: var(--2-Blue-boxes, #ffffff);
  grid-column-start: 2;
  grid-column-end: 2;
  border-radius: 0vw 2vw 2vw 0vw;
}

</style>

