import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <div key={movie.title}>
            <h3>{movie.title}</h3>
            <p>Run Time: {movie.time}</p>
            <label> Genres:
              <ul>
                {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
              </ul>
            </label>
          </div>
        )
      })}
  </div>;
}

export default Movies;
