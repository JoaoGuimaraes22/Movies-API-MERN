const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const router = express.Router();

// @route GET
// @desc Fetches all of the movies_popular data from MongoDB
// @access Public
router.get(
  "/",
  /*auth (to be implemented), */ (req, res, next) => {
    const uri = require("../keys/keys").mongoURI;
    const dbName = "Cluster0";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    (async function() {
      try {
        await client.connect();
        console.log("Connected correctly to server");

        const db = client.db(dbName);
        db.collection("movies_popular")
          .find()
          .toArray((e, d) => {
            console.log(d.length);
            res.json(d);
          });
      } catch (err) {
        console.log(err.stack);
      }
      client.close();
      console.log("Ended");
    })();
  }
);

module.exports = router;
