import React, { useEffect, useState } from 'react'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch("api/movies");
      const data = await response.json();
      setLoading(false);
      setMovies(data);
    }
    getMovies();
  }, [])


  return (
    <div>
      <h1>Hellow World</h1>
      <div>
        {loading ? <div className=""><h1>Loading</h1></div> : <div className="">
          {movies.map((mov) => { return (<div><h1>{mov.title}</h1></div>) })}
        </div>}
      </div>
    </div>
  )
}

export default App
