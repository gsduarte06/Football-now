<template>
  <div>
    <h1 id="Title">Login</h1>
    <form @submit.prevent="onSubmit" id="Login">
      <input type="text" v-model="username" placeHolder="Username" required/>
      <br>
      <input type="password" v-model="password" placeHolder="Password"required />
      <br>
      <p>{{ errorMessage }}</p>
      <button type="submit">Login</button>
      <p @click="(event) => ChangeLogin(event)">Register</p>
    </form>
    <form @submit.prevent="createAccount" id="Register">
      <input type="text" v-model="username" placeHolder="Username"required />
      <br>
      <input type="email" v-model="email" placeHolder="Email" required/>
      <br>
      <input type="password" v-model="password" placeHolder="Password" required/>
      <br>
      <input type="password" v-model="confirmPassword" placeHolder="Confirm Password" required/>
      <br>
      <p>{{ errorMessage }}</p>
      <button type="submit">Register</button>
      <p @click="(event) => ChangeLogin(event)">Login</p>
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
}

#Register {
  display: none;
}

</style>
