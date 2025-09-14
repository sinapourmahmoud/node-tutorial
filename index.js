const express = require("express");
const app = express();
const user_routes=require("./routes/user")
const product_routes=require("./routes/product")

app.use('/users',user_routes)
app.use('/products',product_routes)
app.use(express.json());




app.listen(3000, () => {
  console.log("the server is running\n http://localhost:3000");
});

// there are two ways that we can get data from user
// if the datas storage was not that much we should send it from url
// sometimes we want to pass some info to server in GET method so that's why we sent some indo to it.
