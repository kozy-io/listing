//server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database')
const port = 3000;
const expressStaticGzip = require('express-static-gzip');

app.use(bodyParser.json());
// app.use('/:listingID',express.static("public"));
app.use('/:listingID', expressStaticGzip('public', {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: function (res, path) {
       res.setHeader("Cache-Control", "public, max-age=31536000");
    }
 }));
 
app.get('/:listingID/desc', (req, res) => {
  let id = req.params.listingID;
  db.getDescription(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(500);
      }
    }        
  })
});

app.get('/:listingID/basic-amen/', (req, res) => {
  let id = req.params.listingID;
  db.getBasicAmenity(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(500);
      }
    }
  });
});

app.get('/:listingID/special-amen', (req, res) => {
  let id = req.params.listingID;
  db.getSpecialAmenity(id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(500);
      }
    }
  });
});

app.post('/:listingID/desc', (req, res) => {
  let id = req.params.listingID;
  let newDesc = req.body;
  console.log(newDesc);
  db.addDescription(id, newDesc, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(result);
      res.status(200).send(result);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;