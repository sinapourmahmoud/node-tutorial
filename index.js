const express=require('express')

const app=express()

app.use(express.json());

let users=[{id:1,name:'sina',lastname:'pourmahmoud',password:45578},{id:2,name:'ali',lastname:'kiani',password:45578},{id:3,name:'mostafa',lastname:'gholinia',password:45578},{id:4,name:'mohammad',lastname:'dolatkhah',password:45578},]

app.get('/users',(req,res)=>{
    
    res.status(200).send(JSON.stringify(users))
})

app.get('/users/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const user=users.filter(user=> user.id==id)
    if (user.length==0){
        return res.status(404).send('user not found')

    }else{
        return res.status(200).send(JSON.stringify(user))
    }
})
app.get('/login',(req,res)=>{
    const{username,password}=req.query
    const found_user=users.filter(item=> item.password==password && item.name==username)
    if (found_user.length!=0){
        return res.status(200).send(`this is our user ${JSON.stringify(found_user)}`)
        

    }

    return res.status(404).send("user not found")
})


app.post('/signup',(req,res)=>{
    const name=req.body.name
    const lastname=req.body.lastname
    const password=req.body.password
    let higest=0
    for(const user in users){
        if (user.id>=higest){
            higest=user.id
        }
        if(user.name==name){
            return res.status(400).send("the user is already registered")
        }
    }
    users.push({id:higest+1,name,lastname,password})
    return res.status(200).send(`user is signed up! the name is ${name} and your password is ${password}`)
})


app.put("/edituser/:id",(req,res)=>{
    const id=parseInt(req.params.id)
    const{name,lastname,password}=req.body
    function my_func(item){
        if (item.id==id){
            return {id,name,lastname,password}
        }
        return item
    }
    users=users.map(my_func)
    return res.status(200).send(`changing was successful ${JSON.stringify({name,lastname,password})}`)
})

app.listen(3000,()=>{
    console.log('the server is running\n http://localhost:3000');
})



// there are two ways that we can get data from user
// if the datas storage was not that much we should send it from url 
// sometimes we want to pass some info to server in GET method so that's why we sent some indo to it.
