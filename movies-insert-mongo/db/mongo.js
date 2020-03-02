const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const moviesPopular = require("../helpers/moviesPopular");
const moviesComing = require("../helpers/moviesComing");
const moviesPlaying = require("../helpers/moviesPlaying");

const mongoMovies = () => {
  // Connection URL
  const uri = require("../keys/keys").mongoUri;
  // Database Name
  const dbName = "Cluster0";
  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true });

  (async function() {
    try {
      await client.connect();
      console.log("Connected correctly to server");

      const db = client.db(dbName);

      // Insert a single document
      const dataPopular = await moviesPopular();
      const dataUpcoming = await moviesComing();
      const dataPlaying = await moviesPlaying();

      const colPop = await db
        .collection("movies_popular")
        .drop()
        .catch((err) => {
          console.log(`${err}, or there was no movies collection`);
        });

      const colUp = await db
        .collection("movies_upcoming")
        .drop()
        .catch((err) => {
          console.log(`${err}, or there was no movies collection`);
        });

      const colPlay = await db
        .collection("movies_playing")
        .drop()
        .catch((err) => {
          console.log(`${err}, or there was no movies collection`);
        });

      dataPopular.forEach(async (el) => {
        let r = await db.collection("movies_popular").insertOne({
          title: el.title,
          releaseDate: el.releaseDate,
          img: el.img,
          desc: el.desc,
          rating: el.rating
        });
        assert.equal(1, r.insertedCount);
      });

      dataUpcoming.forEach(async (el) => {
        let r = await db.collection("movies_upcoming").insertOne({
          title: el.title,
          releaseDate: el.releaseDate,
          img: el.img,
          desc: el.desc,
          rating: el.rating
        });
        assert.equal(1, r.insertedCount);
      });

      dataPlaying.forEach(async (el) => {
        let r = await db.collection("movies_playing").insertOne({
          title: el.title,
          releaseDate: el.releaseDate,
          img: el.img,
          desc: el.desc,
          rating: el.rating
        });
        assert.equal(1, r.insertedCount);
      });
    } catch (err) {
      console.log(err.stack);
    }

    client.close();
    console.log("Ended");
  })();
};

module.exports = mongoMovies;
