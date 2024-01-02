const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");
//Connecting to mongodb 
mongoose.connect(
    "mongodb://localhost/blog",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
//routes
app.use(require("./routes/index"));
app.use(require("./routes/blog"));
app.use(require("./routes/compose"));


app.listen(3000,()=>{
    console.log("App listening on port 3000");
});