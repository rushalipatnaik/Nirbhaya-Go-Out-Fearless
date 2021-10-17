// all imports
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const got = require("got");
const mongoose = require("mongoose");

// express app
const app = express();

const User = require("./db");

mongooseConn().catch((err) => console.log(err));

// mongoose connection
async function mongooseConn() {
  await mongoose
    .connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => console.log("db connected!"))
    .catch((err) => console.log(err));
}

// middlewares
app.use(express.json());
app.use(cors());

app.post("/user", async (req, res) => {
  try {
    const { uid, contacts } = req.body;
    const user = await User.create({ uid, contacts });

    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

app.patch("/user/:uid", async (req, res) => {
  try {
    const { contacts } = req.body;
    const { uid } = req.params;
    const user = await User.findOne({ uid });

    user.contacts = contacts;
    await User.updateOne({ uid }, user);

    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

app.get("/user/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid });

    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/sendMessage", async (req, res) => {
  try {
    const { message, contacts } = req.body;
    const response = await got
      .post("https://www.fast2sms.com/dev/bulkV2", {
        json: {
          route: "q",
          message,
          language: "english",
          flash: 0,
          numbers: `${contacts[0]},${contacts[1]}`,
        },
        headers: {
          authorization: process.env.AUTHORIZATION_TOKEN,
        },
      })
      .json();

    res.json(response);
  } catch (err) {
    console.log(err);
  }
});

// app listening at PORT 8000
app.listen(process.env.PORT || 8000, () => {
  console.log("listening at port: ", 8000);
});
