<template>
  <div>
    <div id="box">
      <form @submit.prevent="onSubmit" id="Login">
        <h1 id="Title">Sign In</h1>
        <input id="username" type="text" v-model="username" placeHolder="Username" required/>
        <br>
        <input id="passsword" type="password" v-model="password" placeHolder="Password" required />
        <br>
        <p>{{ errorMessage }}</p>
        <button type="submit">Sign In</button>
        <button @click="(event) => ChangeLogin(event)">Sign Up</button>
      </form> 
    </div>
      <form @submit.prevent="createAccount" id="Register">
        <input type="text" v-model="username" placeHolder="Username" required />
        <br>
        <input type="email" v-model="email" placeHolder="Email" required/>
        <br>
        <input type="password" v-model="password" placeHolder="Password" required/>
        <br>
        <input type="password" v-model="confirmPassword" placeHolder="Confirm Password" required/>
        <br>
        <p>{{ errorMessage }}</p>
        <button type="submit">Register</button>
        <button @click="(event) => ChangeLogin(event)">Login</button>
      </form>
   
  </div>
</template>

<script>
import { UserStore } from "@/stores/users";

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
      errorMessage: "",
      userStore: UserStore(),
    };
  },
  methods: {
    onSubmit() {
      this.errorMessage = "";

      const user = this.userStore.getUsers.find(
        (user) =>
          user.username === this.username && user.password === this.password
      );
      console.log(this.userStore.getUsers);

      if (!user) {
        this.errorMessage = "Username ou password errados";
        return;
      }

      // Guardar o id do utilizador na store e redirecionar para a Home
      this.userStore.setLoggedInUser(this.username);

      this.$router.push({ name: "Landing" });
    },

    createAccount() {
        this.errorMessage = "";
        if(this.password === this.confirmPassword){
            const user = this.userStore.getUsers.find((user) =>user.username == this.username);
            if(!user){
                this.userStore.createAccount(this.username,this.email,this.password);
                this.$router.push({ name: "Login" });
            }else{
                this.errorMessage = "User already created";
                return;
            }
        }else{
            this.errorMessage = "Passwords are not equal";
            return;
        }
    },

    ChangeLogin(event) {
      this.errorMessage="";
      this.username ="";
      this.password ="";
      this.confirmPassword="";
      this.email="";
      var form = event.srcElement.parentElement;
      form.style.display = "none";
      if (form.id === "Login") {
        document.getElementById("Register").style.display = "block";
        document.getElementById("Title").innerHTML = "Register";
      } else {
        document.getElementById("Login").style.display = "block";
        document.getElementById("Title").innerHTML = "Login";
      }

    },
  },
};
</script>

<style>
#Login {
  display: block;
  background-color: #263154;
  border-radius: 30px;
  height: 1024px;
  left: 0;
  position: fixed;
  top: 0;
  width: 1090px;
  text-align: center;
}


#Register {
  display: none;
}

#Title{
color: #FFF;
font-family: Gelasio;
font-size: 55px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 310px;
margin-bottom: 38px;
}


label {
  display: block;
  margin-top: 20px;
}

input[type="text"], input[type="password"] {
  padding: 10px;
  margin-top: 46px;
  width: 634px;
  height: 59px;
  border-radius: 10px;
  background-color:  #9CAAD3;
  color: rgba(0, 0, 0, 0.60);
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

button[type="submit"] {
  color: white;
  padding: 10px;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  width: 232px;
  height: 59px;
  border-radius: 10px;
  background-color: #566CB3;
}

button {
  color: white;
  padding: 10px;
  border: none;
  margin-top: 47px;
  margin-left: 84px;
  margin-right: 84px;
  cursor: pointer;
  width: 232px;
  height: 59px;
  border-radius: 10px;
  background-color: #566CB3;
  color: #FFF;
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}



</style>