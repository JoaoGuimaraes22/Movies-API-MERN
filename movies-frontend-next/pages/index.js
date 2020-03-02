import Head from "next/head";
import MovieList from "../components/moviesList/movieList";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Hello World</h1>
    </main>
    <MovieList />
  </div>
);

export default Home;
