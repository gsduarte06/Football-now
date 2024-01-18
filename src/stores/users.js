import { defineStore } from "pinia";

export const UserStore = defineStore("users", {
  state: () => ({
    users: JSON.parse(localStorage.getItem("usersFootballNow")) || [],
    userLoggedInUsername: JSON.parse(sessionStorage.getItem("LogedInuserFootballNow")) || null,
  }),
  getters: {
    getUsers() {

      return this.users;
      
    },

    getLoggedInUserUse() {
      return this.users.find((user) => user.username == this.userLoggedInUsername)
  },
  },
  actions: {
    setLoggedInUser(user){
        this.userLoggedInUsername = user
        this.uploadData()
    },


    createAccount(username,email,password){
        if(!this.users.find((user)=> user.username == username)){
            this.users.push({"username": username, "email": email, "password": password, "club":""})
            this.uploadData();
        }else{
            
        }
    },

    setPassword(password){
      this.getLoggedInUserUse.password=password;
      this.uploadData()
    },

    uploadData(){
      localStorage.setItem("usersFootballNow", JSON.stringify(this.users));
      sessionStorage.setItem("LogedInuserFootballNow", JSON.stringify(this.userLoggedInUsername));

    },
    setFavoutiteTeam(team){
      this.getLoggedInUserUse.club = team;
      this.uploadData();
  },
  getLoggedInUser() {
    return this.users.find((user) => user.username == this.userLoggedInUsername)
},
  },

});



