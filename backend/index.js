const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));  //  Increase JSON size limit
app.use(express.urlencoded({ limit: "50mb", extended: true })); //  Increase URL-encoded payload size
app.use(cors({ origin: 'https://food-website-4.onrender.com/' }));



const PORT = process.env.PORT || 8080;  

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, )
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});






// User Schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,

    confirmpassword: {
      type: String,
      required: true,
      
     
    

  }}
});

const UserModel = mongoose.model("User", userSchema);





//api

app.get("/",(req,res)=>{
    res.send("server is running")
})

//sign up
app.post("/signup", async (req, res) => {
  try {
      console.log(req.body);
      const { email, firstName, lastName, password } = req.body;

      if (!email || !firstName || !lastName || !password) {
          return res.status(400).json({ message: "All fields are required" });
      }

      const existingUser = await UserModel.findOne({ email });

      if (existingUser) {
          return res.status(400).json({ message: "User already exists",alert : false });
      }

      const newUser = new UserModel({ firstName, lastName, email, password });
      await newUser.save();

      res.status(201).json({ message: "User registered successfully", alert : true });

  } catch (err) {
      console.error("Signup Error:", err);
      res.status(500).json({ message: "Internal server error" });
  }
});



// const bcrypt = require("bcrypt");

// app.post("/signup", async (req, res) => {
//   try {
//     console.log(req.body);
//     const { email, firstName, lastName, password } = req.body;

//     if (!email || !firstName || !lastName || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const existingUser = await UserModel.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists", alert: false });
//     }

//     // Hash the password before storing it
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new UserModel({ firstName, lastName, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully", alert: true });

//   } catch (err) {
//     console.error("Signup Error:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });


//login




app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await UserModel.findOne({ email });

     const dataSend = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    console.log(dataSend);
    res.json({ message: "Login successful", alert: true, data: dataSend });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Product Schema
const SchemaProduct = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String },
});

const productModel = mongoose.model("Product", SchemaProduct);

app.post("/uploadProduct", async (req, res) => {
  try {
    console.log(req.body); // Log incoming data to check if it's received correctly

    const { name, category, image, price, description } = req.body;

    if (!name || !category || !image || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newProduct = new productModel({ name, category, image, price, description });
    await newProduct.save();

    res.status(201).json({ message: "Upload Successfully", product: newProduct });
  } catch (error) {
    console.error("Error uploading product:", error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
});


//api
app.get("/product", async (req, res) => {
  try {
    const data = await productModel.find({});
    res.send(JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("Internal Server Error");
  }
});


  





   
    


//server is running
app.listen(PORT,()=>console.log("server is running at port : " + PORT)
)


