const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

// Users

const userHandlers = require("./userHandlers");

app.get("/api/users", userHandlers.postUser);
app.get("/api/users/:id", userHandlers.getUserById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

//movies

// const movieHandlers = require("./movieHandlers");

// app.get("/api/movies", movieHandlers.postMovie);
// app.get("/api/movies/:id", movieHandlers.getMovieById);

// app.listen(port, (err) => {
//   if (err) {
//     console.error("Something bad happened");
//   } else {
//     console.log(`Server is listening on ${port}`);
//   }
// });


