const express = require("express");
const multer = require("multer");
const cors = require("cors");

const bodyParser = require("body-parser");
const db = require("./db/mysql.js");

const app = express();
const conn = db.init();
const PORT = process.env.URL_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.set("port", process.env.PORT || 3000); // 포트 설정
app.set("host", process.env.HOST || "0.0.0.0"); // 아이피 설정

app.get("/", function (req, res) {
  const sql = process.env.ALL_QUERY;
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result);
  });
});
app.get("/product/:id", function (req, res) {
  const sql = `select * from products where product_id = ${req.params.id}`;
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted: " + err);
    else res.send(result[0]);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
