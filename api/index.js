const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

dotenv.config();
console.log("MONGO_URL:", process.env.MONGO_URL);
console.log("MONGO_URL type:", typeof process.env.MONGO_URL);

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname,"/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.error(err));

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.get("/", (req,res)=>{
  res.send("Server Working");
});
app.get("/api/", (req, res)=>res.send("<h1>Welcome to the Blog API</h1>"));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.listen(5000, () => {
   console.log("Backend gets started..");
});