const express=require('express')
const {get_all_users,get_user, login, signup, edit_user,get_all_products,get_product}=require('./controllers/main')
const app=express()

app.use(express.json());


app.get('/users',(req,res)=>{
    
    get_all_users(req,res)
})

app.get('/users/:id',(req,res)=>{
    get_user(req,res)
})
app.get('/login',(req,res)=>{
    login(req,res)
})


app.post('/signup',(req,res)=>{
    signup(req,res)
})


app.put("/edituser/:id",(req,res)=>{
   edit_user(req,res)
})
app.get("/products",(req,res)=>{
   get_all_products(req,res)
})
app.get("/products/:id",(req,res)=>{
   get_product(req,res)
})

app.listen(3000,()=>{
    console.log('the server is running\n http://localhost:3000');
})



// there are two ways that we can get data from user
// if the datas storage was not that much we should send it from url 
// sometimes we want to pass some info to server in GET method so that's why we sent some indo to it.
