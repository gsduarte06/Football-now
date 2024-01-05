import { defineStore } from "pinia";

export const UserStore = defineStore("users", {
  state: () => ({
    users: JSON.parse(localStorage.getItem("usersFootballNow")) || [],
    userLoggedInUsername: null,
  }),
  getters: {
    getUsers() {
      return this.users;
    },
    getLoggedInUser() {
        return this.users.find((user) => user.username == this.userLoggedInUsername)
    },
  },
  actions: {
    setLoggedInUser(user){
        this.userLoggedInUsername = user
    },

    createAccount(username,email,password){
        if(!this.users.find((user)=> user.username == username)){
            this.users.push({"username": username, "email": email, "password": password})
            localStorage.setItem("usersFootballNow", JSON.stringify(this.users))
        }else{
            
        }
    },


  },
});



