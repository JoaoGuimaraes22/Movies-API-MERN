const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const router = express.Router();

// @route GET
// @desc Fetches all of the movie data from MongoDB
// @access Public
router.get(
  "/",
  /*auth (to be implemented), */ (req, res, next) => {
    const uri = require("../keys/keys").mongoURI;
    const dbName = "Cluster0";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    let data = [
      {
        _id: "5e59ae31621729770d484112",
        title: "A Rainy Day in New York",
        releaseDate: "2019-07-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        desc:
          "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        rating: "6.8"
      },
      {
        _id: "5e59ae31621729770d484112",
        title: "A Rainy Day in New York",
        releaseDate: "2019-07-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        desc:
          "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        rating: "6.8"
      },
      {
        _id: "5e59ae31621729770d484112",
        title: "A Rainy Day in New York",
        releaseDate: "2019-07-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        desc:
          "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        rating: "6.8"
      },
      {
        _id: "5e59ae31621729770d484112",
        title: "A Rainy Day in New York",
        releaseDate: "2019-07-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        desc:
          "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        rating: "6.8"
      },
      {
        _id: "5e59ae31621729770d484112",
        title: "A Rainy Day in New York",
        releaseDate: "2019-07-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        desc:
          "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        rating: "6.8"
      },
      {
        _id: "5e59ae31621729770d484112",
        title: "A Rainy Day in New York",
        releaseDate: "2019-07-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        desc:
          "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        rating: "6.8"
      },
      {
        _id: "5e59ae31621729770d484112",
        title: "A Rainy Day in New York",
        releaseDate: "2019-07-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        desc:
          "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        rating: "6.8"
      },
      {
        _id: "5e59ae31621729770d484112",
        title: "A Rainy Day in New York",
        releaseDate: "2019-07-26",
        img:
          "https://image.tmdb.org/t/p/w185_and_h278_bestv2/uPGq1mkEXznUpapDmOSxbsybjfp.jpg",
        desc:
          "Two young people arrive in New York to spend a weekend, but once they arrive they're met with bad weather and a series of adventures.",
        rating: "6.8"
      }
    ];
    res.json(data);
    //     (async function() {
    //       try {
    //         await client.connect();
    //         console.log("Connected correctly to server");

    //         const db = client.db(dbName);
    //         db.collection("movies")
    //           .find()
    //           .toArray((e, d) => {
    //             console.log(d.length);
    //             res.json(d);
    //           });
    //       } catch (err) {
    //         console.log(err.stack);
    //       }
    //       client.close();
    //       console.log("Ended");
    //     })();
  }
);

module.exports = router;
