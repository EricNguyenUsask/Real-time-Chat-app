

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Canada.2019",
});
connection.connect();

// create database and create table
app.get("/init", (req, res) => {
  connection.query(
    "CREATE DATABASE IF NOT EXISTS LoginSystem;",
    (err, result) => {
      if (err) throw err;
      console.log("Create DB success!", result);
    }
  );

  connection.query("USE LoginSystem;", (err, result) => {
    if (err) throw err;
    console.log("Create DB success!", result);
  });

  connection.query(
    "CREATE TABLE IF NOT EXISTS Login (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255));",
    (err, result) => {
      if (err) throw err;
      res.send("Database and table created successfully.");
    }
  );
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send("username and password are required.");
    return;
  }

  const query = `INSERT INTO Login (username, password) VALUES ('${username}', '${password}')`;

  connection.query(query, (err, result) => {
    console.log(err);
    if (err) {
      res.status(500).send("Error inserting post.");
      console.log(err);
      return;
    }

    res.send("Post added successfully.");
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  connection.query(
    "SELECT * FROM Login WHERE username = ? AND password = ?",
    [username, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
