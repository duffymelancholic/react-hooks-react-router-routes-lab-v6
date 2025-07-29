import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch("http://localhost:4000/movies");
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    }

    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
}

export default Home;
