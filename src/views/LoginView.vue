<template>
  <div>
    <div id="box">
      <form @submit.prevent="onSubmit" id="Login">
        <h1 id="Title">Log in</h1>
        <input
          id="username"
          type="text"
          v-model="username"
          placeHolder="Username"
          required
        />
        <br />
        <input
          id="passsword"
          type="password"
          v-model="password"
          placeHolder="Password"
          required
        />
        <br />
        <p>{{ errorMessage }}</p>
        <button @click="(event) => ChangeLogin(event)">Register</button>
        <button type="submit">Log In</button>
      </form>

      <form @submit.prevent="createAccount" id="Register">
        <h1 id="TitleRegister">Register</h1>
        <input type="text" v-model="username" placeHolder="Username" required />
        <br />
        <input type="email" v-model="email" placeHolder="Email" required />
        <br />
        <input type="password" v-model="password" placeHolder="Password" required />
        <br />
        <input
          type="password"
          v-model="confirmPassword"
          placeHolder="Confirm Password"
          required
        />
        <br />
        <p>{{ errorMessage }}</p>
        <button @click="(event) => ChangeLogin(event)">Login</button>
        <button type="submit">Register</button>
      </form>
    </div>
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
    async onSubmit() {
      this.errorMessage = "";

      const user = this.userStore.getUsers.find(
        (user) => user.username === this.username && user.password === this.password
      );

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
      if (this.password === this.confirmPassword) {
        const user = this.userStore.getUsers.find(
          (user) => user.username == this.username
        );
        if (!user) {
          this.userStore.createAccount(this.username, this.email, this.password);
          this.$router.push({ name: "Login" });
        } else {
          this.errorMessage = "User already created";
          return;
        }
      } else {
        this.errorMessage = "Passwords are not equal";
        return;
      }
    },

    ChangeLogin(event) {
      this.errorMessage = "";
      this.username = "";
      this.password = "";
      this.confirmPassword = "";
      this.email = "";
      var form = event.srcElement.parentElement;
      form.style.display = "none";
      if (form.id === "Login") {
        document.getElementById("Register").style.display = "block";
      } else {
        document.getElementById("Login").style.display = "block";
      }
    },
  },
};
</script>

<style>
#Login {
  display: inline-block;
  background-color: #263154;

  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  text-align: center;
}

#Register {
  display: none;
  background-color: #263154;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  text-align: center;
}

#Title {
  color: #fff;
  font-family: Gelasio;
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 38px;
  margin-top: 25vh;
}
#TitleRegister {
  color: #fff;
  font-family: Gelasio;
  font-size: 55px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 38px;
  margin-top: 15vh;
}
label {
  display: block;
  margin-top: 20px;
}

input {
  padding: 10px;
  margin-top: 46px;
  width: 634px;
  height: 59px;
  border-radius: 10px;
  background-color: #9caad3;
  color: rgba(0, 0, 0, 0.6);
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
  background-color: #566cb3;
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
  background-color: #566cb3;
  color: #fff;
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

p {
  font-family: DM Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
