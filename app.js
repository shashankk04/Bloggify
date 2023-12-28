const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");


//routes
app.use(require("./routes/index"));
app.use(require("./routes/compose"));


app.listen(3000,()=>{
    console.log("App listening on port 3000");
});