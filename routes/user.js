const express=require("express")
const users_controller=require("../controllers/user")
const usersRoute=express.Router()



usersRoute.get("/users",users_controller.get_all_users)
usersRoute.get("/users/:name",users_controller.get_user)
usersRoute.post("/login",users_controller.login)
usersRoute.post("/signup",users_controller.signup)
usersRoute.put("/edituser/:name",users_controller.edit_user)
usersRoute.post("/logout",users_controller.logout)

module.exports=usersRoute