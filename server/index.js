const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const userModel = require("./models/User")

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
    const {name, email, password} = req.body;
    bcrypt.hash(password, 8)
    .then(hash => {
        userModel.create({name, email, password: hash})
        .then(user => res.json("Success"))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, (err, response) => {
                if(response){
                    const token = jwt.sign({email: user.email, role: user.role},
                        "jwt-secret-key", {expiresIn: "1d"})
                    res.cookie("token", token)
                    return res.json({Status: "success", role: user.role})
                }else{
                    return res.json("The password is incorrect")
                }
            })
        } else {
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

const port = 3001

app.listen(port, () => {
    console.log("Server is powered")
})