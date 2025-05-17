// src/pages/TvShows.jsx

import { categoriesTVShows } from "../api/tmdb";
import { AppClassifcation } from "../components/MideaRow/MideaRow";

const TvShows = () => {
  return <AppClassifcation categories={categoriesTVShows} title="TV Shows" />;
};

export default TvShows;
