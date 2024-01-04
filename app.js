const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Connecting to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://shiv04313:p35htOeLIFDIqDxN@bloggify.wid7sej.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/blog"));
app.use(require("./routes/compose"));

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
