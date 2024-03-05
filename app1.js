let express = require("express");
let cors = require("cors");
let connection = require("./db1");
let app = express();

app.use(express.json());
app.use(cors());
app.get("/student", (req, res) => {
  connection.query("select * from student", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/student", (req, res) => {
  let { id, name, address } = req.body;
  connection.query(
    `insert into student (id,name,address) values ('${id}','${name}','${address}')`,
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete("/student/:id", (req, res) => {
  let id = req.params.id;
  connection.query(`delete from student where id='${id}'`, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.put("/student/:id1", (req, res) => {
  let id1 = req.params.id1;
  let { id, name, address } = req.body;
  connection.query(
    `update student set name='${name}', address='${address}' where id='${id}'`,
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }
  );
});

app.listen(4000);
