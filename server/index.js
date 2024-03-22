const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const userModel = require("./models/User")
const nodemailer = require('nodemailer');
const crypto = require("crypto");

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())

mongoose.connect("mongodb://localhost:27017/Examp", { useNewUrlParser: true, useUnifiedTopology: true });

const varifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json("Token is missing")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) {
                return res.json("Error with token")
            }else {
                if(decoded.role === "admin") {
                    next()
                } else {
                    return res.json("not admin")
                }
            }
        })
    }
}

app.get("/dashboard", varifyUser , (req, res) => {
    res.json("Success")
    console.log(req)
})

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  userModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res.status(400).json("Email already exists please proceed Login to account");
      }
      bcrypt.hash(password, 8)
        .then((hash) => {
          userModel.create({ name, email, password: hash })
            .then((user) => {
              return res.json("Success");
            })
            .catch((err) => {
              return res.json(err);
            });
        })
        .catch((err) => {
          return res.json(err);
        });
    })
    .catch((err) => {
      return res.json(err);
    });
});

  app.post("/login", (req, res) => {
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if (!user) {
          return res.status(400).json("Email does not exist please check the mail or proceed to create account");
        }
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if(response){
                    const token = jwt.sign({email: user.email, role: user.role, name: user.name},
                        "jwt-secret-key", {expiresIn: "1d"})
                    res.cookie("token", token)
                    return res.json({Status: "success", role: user.role, name: user.name})
                }else{
                    return res.json("The password is incorrect")
                }
            })
        } else  {
            return res.json("No record record existed")
        }
    })
})


app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const emailCount = await userModel.countDocuments({
    email,
    resetPasswordRequestTime: { $gte: startOfDay, $lt: endOfDay },
  });
  if (emailCount >= 5) {
    return res.status(429).json({ message: "Too many requests" });
  }
  const token = crypto.randomBytes(32).toString("hex");
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  user.resetPasswordRequestTime = new Date();
  await user.save();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "taskzenreset@gmail.com",
      pass: "rhjlcwveeeaktiry",
    },
  });
  const mailOptions = {
    from: "taskzenreset@gmail.com",
    to: email,
    subject: "Password Reset Request",
    text: `You are receiving this email because you (or someone else) has requested the reset of the password for your account.\n\nPlease click on the following link, or paste this into your browser to complete the process:\n\nhttp://localhost:3001/changePassword/${token}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    } else {
      console.log("Email sent: " + info.response);
      return res.json({ message: "Email sent" });
    }
  });
});


app.post("/changePassword/:token", async (req, res) => {
  const { token, password } = req.body;
  const user = await userModel.findOne({ resetPasswordToken: token });
  if (!user) {
    return res.status(404).json({ message: "Invalid or expired token" });
  }
  const now = new Date();
  if (now > user.resetPasswordExpires) {
    return res.status(400).json({ message: "Token expired" });
  }
  const hash = await bcrypt.hash(password, 8);
  user.password = hash;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;
  await user.save();
  return res.json({ message: "Password updated" });
});

app.post('/account', (req, res) => {
  // Handle the request (e.g., save data, send a response)
  res.status(200).json({ message: 'Account created successfully' });
});

app.post('/home', (req, res) => {
  // Handle the request (e.g., save data, send a response)
  res.status(200).json({ message: 'Account created successfully' });
});

app.post('/TaskZen', (req, res) => {
  // Handle the request (e.g., save data, send a response)
  res.status(200).json({ message: 'Account created successfully' });
});

app.post('/portfolio', (req, res) => {
  // Handle the request (e.g., save data, send a response)
  res.status(200).json({ message: 'Account created successfully' });
});


const port = 3001

app.listen(port, () => {
    console.log("Server is powered")
})