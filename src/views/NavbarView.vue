<template >

<div id="mySidenav" class="sidenav">
<div class="TopNav">
    <img src="@\assets\football-now.png" alt="">
<p class = "titleNavBar">Football Now</p>
</div>

  <a @click="navigate('Main')"><p>Home</p></a>
  <a @click="navigate('News')"><p>News</p></a>
  <a @click="navigate('Matches')"><p>Matches</p></a>
</div>
  <div id="TopBar">
    <svg id="Navbar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 58" fill="none" @click="openNav()">
      <rect width="90.2222" height="12.8889" fill="#D9D9D9" />
      <rect y="45.1111" width="90.2222" height="12.8889" fill="#D9D9D9" />
      <rect y="22.5557" width="90.2222" height="12.8889" fill="#D9D9D9" />
    </svg>
    <div id="Searchbar">
      <svg
        id="Searchicon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
        fill="none">
        <g clip-path="url(#clip0_518_15259)">
          <path
            d="M33.9676 29.8688L27.1251 23.6188C26.8655 23.3822 26.6957 23.0633 26.6447 22.7159C26.5937 22.3686 26.6645 22.0143 26.8451 21.7132C28.6433 18.6898 29.2746 15.1145 28.6203 11.6589C27.966 8.20333 26.0711 5.10536 23.2917 2.947C20.5123 0.788636 17.0396 -0.281564 13.5261 -0.0625459C10.0126 0.156472 6.69999 1.64963 4.21072 4.13642C1.72144 6.62321 0.226788 9.93247 0.0075505 13.4425C-0.211687 16.9525 0.859583 20.4217 3.0201 23.1984C5.18062 25.975 8.28169 27.868 11.7407 28.5216C15.1997 29.1753 18.7787 28.5446 21.8051 26.7482C22.1065 26.5677 22.4611 26.497 22.8088 26.548C23.1565 26.599 23.4758 26.7685 23.7126 27.0279L30.0563 34.0209C30.3269 34.3178 30.6566 34.555 31.0243 34.7173C31.3919 34.8796 31.7894 34.9634 32.1913 34.9634C32.5933 34.9634 32.9908 34.8796 33.3584 34.7173C33.7261 34.555 34.0557 34.3178 34.3263 34.0209C34.8379 33.4212 35.0918 32.644 35.0328 31.8583C34.9738 31.0725 34.6067 30.3419 34.0113 29.8251L33.9676 29.8688ZM14.5688 25.3671C12.4323 25.3671 10.3437 24.7344 8.56703 23.5489C6.79033 22.3635 5.40526 20.6785 4.58685 18.7069C3.76844 16.7353 3.55342 14.5656 3.96896 12.4719C4.38451 10.3783 5.41197 8.45471 6.9215 6.94424C8.43103 5.43378 10.3549 4.40424 12.4499 3.98572C14.545 3.5672 16.7172 3.77849 18.6921 4.5929C20.667 5.4073 22.3559 6.78826 23.5454 8.56126C24.7349 10.3343 25.3716 12.4197 25.3751 14.5541C25.3774 15.9733 25.0996 17.3789 24.5575 18.6907C24.0155 20.0025 23.2199 21.1947 22.2162 22.199C21.2125 23.2033 20.0205 24 18.7083 24.5436C17.396 25.0872 15.9894 25.3671 14.5688 25.3671Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_518_15259">
            <rect width="35" height="35" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div id="notUser">
      <svg
        id="Notification"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 31 32"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.4839 0C18.7629 0.0127325 21.9036 1.30184 24.2201 3.58581C26.5366 5.86978 27.8407 8.96305 27.8477 12.1901V19.6429C27.8268 20.0841 27.912 20.5239 28.0965 20.9265C28.5526 21.8094 29.4648 21.4384 30.3996 22.7554C30.7339 23.2329 30.9299 23.7908 30.9668 24.3695C31.0037 24.9483 30.88 25.5259 30.6089 26.0408C30.3379 26.5556 29.9297 26.9882 29.428 27.2923C28.9264 27.5965 28.3501 27.7606 27.761 27.7672H3.25953C2.4966 27.7722 1.75639 27.5119 1.16943 27.0323C0.582473 26.5526 0.186469 25.8843 0.0512603 25.1454C-0.083949 24.4064 0.0503217 23.6442 0.430392 22.9932C0.810463 22.3421 1.41192 21.8441 2.12869 21.5868C2.96174 21.2826 3.14267 20.4739 3.14267 19.6504V12.1901C3.14958 8.96689 4.4506 5.87696 6.76223 3.59362C9.07387 1.31028 12.2088 0.0185903 15.4839 0ZM10.5836 32C8.8534 32 8.8534 29.4032 10.5836 29.4032H20.3842C22.1143 29.4032 22.1143 32 20.3842 32H10.5836Z"
          fill="white"
        />
      </svg>

      <img src=" @\assets\user.png" alt="" id= "User" @click="openModal()"></img>


    </div>
  </div>
<div id="account">
  <div id="close"><img src="../assets/x.png" alt="" @click="closeModal()"></div>
    <div id="Name">
        <img src=" @\assets\user.png" alt="" id= "Icon" ></img>
        <p>{{username}}</p>
    </div>
    <div id="Team">
      <select name="clubs" id="clubs" @change="onChange($event)">
        <option value="benfica">Benfica</option>
        <option value="porto">Porto</option>
        <option value="sporting">Sporting</option>
        <option value="braga">Braga</option>
      </select>
    </div>
    <div id="Inputs">
      <input id="currentpsw" type="password" placeholder="Current Password" v-model="currentPW" required>
      <input id="newpsw" type="password" placeholder="New Password" v-model="newPW" required>
    </div>
    <div id="Buttons">
    <button id="Change" @click="changePW()">Change</button>
    <button id="Logout" @click="Logout()">Logout</button>
    </div>
</div>
</template>

<script>

import { UserStore } from "@/stores/users";


export default {
    data() {
      return {
        userStore: UserStore(),
        currentPW:"",
        newPW:"",
        username: "",
      }
    },
    methods: {
      Logout(){
        this.$router.push({ name: "Login" });
      },
              openNav() {
            document.getElementById("mySidenav").style.width = "250px";
            document.addEventListener("mouseup", e => {
                if( !(e.target.nodeName === "a")){
                  document.getElementById("mySidenav").style.width = "0";
                }
              })
          },
          openModal(){
                document.getElementById("account").style.display="block";
          },
          closeModal(){
          document.getElementById("account").style.display="none";
          },
          onChange(event){
                this.userStore.setFavoutiteTeam(event.target.value);
          },
          navigate(Page){
              this.$router.push({ name: `${Page}` });
          },

          changePW(){
            console.log(this.userStore.getLoggedInUser());
              if(this.userStore.getLoggedInUser().password === this.currentPW){
                this.userStore.setPassword(this.newPW);
              }else{
                alert("Current password doesn't match")
              }
          }
    },

  mounted(){
    this.username = this.userStore.getLoggedInUser().username;
  }
}

</script>

<style>


#TopBar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding-top: 1vh;
  background-color: #131426;
}
#Navbar {
  width: 12vw;
  height: 5vh;
}

#Searchbar {
  width: 50vw;
  height: 5vh;
  background: #405493;
}

#Searchicon {
  width: 6vw;
  height: 3vh;
  float: right;
  margin-top: 1vh;
}

#notUser {

  display: flex;
  align-items: center;
  justify-content: space-between;

}

#Notification {
  width: 5vw;
  height: 3vh;
}

#User { 
    margin-left:100px;
  height: 7vh;

}


/* SideNav */
/* The side navigation menu */
.sidenav {
  height: 100%; 
  width: 0; 
  position: fixed; 
  z-index: 1; 
  top: 0; 
  left: 0;
  background-color:  #2F3F73; 
  overflow-x: hidden; 
  transition: 0.5s; 
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #fff;
  background: #566CB3;
  display: block;
  transition: 0.3s;
  border-top: 1px solid #000;
}
.sidenav img{
    height: 75px;
    width: 75px;
    padding: 10px;

}

.titleNavBar{
    height: 66px;
    width: 131px;
    text-decoration: none;
      transition: 0.3s;
    color: #fff;
    font-size: 24px;
    float:right
}
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

#close{
  width: 34px;
height: 34px;
border-radius: 0px 0px 0px 10px;
background-color: #713205;
float: right;
}

#account{
  position: fixed;
  right:0;  
  top:0;
  display:none;
width: 500px;
height: 700px;
border-radius: 0px 0px 10px 10px;
background: #B25200;
justify-content: center;
text-align: center;
}

#Name{
  padding-top: 30px;
}

#Icon{
width: 150px;
height: 150px;
border-radius: 100px;
background-color: #582900;
margin-left: 175px;
margin-right: 175px;

}

#Team{
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

#clubs{
  width: 100%;
height: auto;
border-radius: 10px 10px 10px 10px;
background: var(--4-Blue-boxes, #9CAAD3);
display: grid;
grid-template-columns: 100px ;
font-size: 33px;
font-family:"DM Sans";
}



#change img{
  margin-top: 40px;

}

#change{
  width: 70px;
height:   auto;
border-radius: 0px 10px 10px 0px;
background: var(--4-Blue-boxes, #9CAAD3);
}

#Inputs input{
  font-size: 25px;
}


#currentpsw{
  width: 350px;
  height: auto;
  margin-top: 20px;
  border-radius: 10px;
  background: #EBBA90;
  font-size: 25px;
}
#newpsw{
  width: 350px;
height: auto;
margin-top: 10px;
border-radius: 10px;
background: #EBBA90;
font-size: 25px;
}

#Change{
  width: 304px;
height: auto;
margin-top: 30px;
font-size: 25px;
}

#Logout{
  width: 304px;
height: auto;
margin-top: 5px;
font-size: 25px;
}
</style>
