const express = require("express");  //express server
const app = express();               //kreiranje aplikacije
const mysql = require("mysql");
const cors = require("cors");  //to allow requests from frontend to API

app.use(cors());
app.use(express.json());  //MORA da se podaci sa frontenda salju u json formatu

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employesserver",
});

//post request od strane frontenda - insert data in db
//req - sadrzi stvari poslane iz frontenda
//res - ono sto saljemo ka frontendu

app.post("/create", (req, res) => {
  //ove varijable saljemo u db
  const prozvođač = req.body.prozvođač;   //ako je.name onda je moramo tako poslati sa frontenda
  const model = req.body.model;
  const cijena = req.body.cijena;
  const broj_sjedišta = req.body.broj_sjedišta;
  const broj_vrata = req.body.broj_vrata;
  const parking_senzor = req.body.parking_senzor;
  const klima = req.body.klima;
  const automatik = req.body.automatik;
  const zeleni_karton = req.body.zeleni_karton;
  const slika = req.body.slika;
  const godiste = req.body.godiste;
  const gorivo = req.body.gorivo;
  db.query(
    "INSERT INTO vozila (prozvođač, model, cijena, broj_sjedišta, broj_vrata, parking_senzor, klima, automatik, zeleni_karton, slika, godiste, gorivo ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
    [prozvođač, model, cijena, broj_sjedišta, broj_vrata, parking_senzor, klima, automatik, zeleni_karton, slika, godiste, gorivo ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//za prikaz informacija poslanih ka backendu
app.get("/vozila", (req, res) => {
  db.query("SELECT * FROM vozila", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/vozila/:idvozila", (req, res) => {
  db.query("SELECT * FROM vozila WHERE idvozila = ?", [req.params.idvozila], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result[0]);
    }
  });
});

app.get("/dostupnost_auta", (req, res) => {
  db.query("SELECT * FROM dostupnost_auta", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.get("/dostupnost_auta/:iddostupnost_auta", (req, res) => {
  db.query("SELECT * FROM dostupnost_auta WHERE iddostupnost_auta = ?", [req.params.iddostupnost_auta], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result[0]);
    }
  });
});

app.put("/update", (req, res) => {
  const idvozila = req.body.idvozila;
  const cijena = req.body.cijena;
  db.query(
    "UPDATE vozila SET cijena = ? WHERE idvozila = ?",
    [cijena, idvozila],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:idvozila", (req, res) => {
  const vozila = req.params.idvozila;
  db.query("DELETE FROM vozila WHERE idvozila = ?", idvozila, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {  
  console.log("Your server is running on port 3001");
}); 
