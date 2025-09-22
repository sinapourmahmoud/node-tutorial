const express = require("express");
const app = express();
const user_routes=require("./routes/user")
const product_routes=require("./routes/product")

//routes
app.use(express.json());
app.use('/users',user_routes)
app.use('/products',product_routes)



//running project
app.listen(3000, () => {
  console.log("the server is running\n http://localhost:3000");
});
