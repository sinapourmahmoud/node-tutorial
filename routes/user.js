const express=require("express")
const users_controller=require("../controllers/user")
const usersRoute=express.Router()



usersRoute.get("/users",users_controller.get_all_users)
usersRoute.get("/users/:id",users_controller.get_user)
usersRoute.post("/login",users_controller.login)
usersRoute.post("/signup",users_controller.signup)
usersRoute.put("/edituser/:id",users_controller.edit_user)

module.exports=usersRoute