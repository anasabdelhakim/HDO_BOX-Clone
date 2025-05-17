// src/pages/Movie.jsx

import { categoriesMovies } from "../api/tmdb";
import { AppClassifcation } from "../components/MideaRow/MideaRow";

const Movie = () => {
  return <AppClassifcation categories={categoriesMovies} title="Movie" />;
};

export default Movie;
