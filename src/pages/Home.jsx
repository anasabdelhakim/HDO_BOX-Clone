// src/pages/Home.jsx

import { categoriesHome } from "../api/tmdb";
import { AppClassifcation } from "../components/MideaRow/MideaRow";

const Home = () => {
  return <AppClassifcation categories={categoriesHome} />;
};

export default Home;
