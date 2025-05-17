// src/api/tmdb.js

const API_KEY = "3e844921c9ebc578a11464793d4faf86"; // use .env for security
const BASE_URL = "https://api.themoviedb.org/3";

// Helper function to build full fetch URL
const buildUrl = (path) =>
  `${BASE_URL}${path}?api_key=${API_KEY}&language=en-US`;

// Factory function to create category objects
const createCategory = (title, path) => ({
  title,
  fetchUrl: buildUrl(path),
});

// Category Paths
const CategoryPaths = {
  trendingTV: "/trending/tv/day",
  trendingMovies: "/trending/movie/day",
  popularTV: "/tv/popular",
  popularMovies: "/movie/popular",
  upcomingMovies: "/movie/upcoming",
  topRatedMovies: "/movie/top_rated",
  topRatedTV: "/tv/top_rated",
  airingTodayTV: "/tv/airing_today",
  onTheAirTV: "/tv/on_the_air",
  nowPlayingMovies: "/movie/now_playing",
};

// Home Page Categories
export const categoriesHome = [
  createCategory("Trending TV Shows Today", CategoryPaths.trendingTV),
  createCategory("Trending Movies Today", CategoryPaths.trendingMovies),
  createCategory("Popular TV Shows", CategoryPaths.popularTV),
  createCategory("Upcoming Movies", CategoryPaths.upcomingMovies),
  createCategory("Top Rated Movies", CategoryPaths.topRatedMovies),
  createCategory("Airing Today TV Shows", CategoryPaths.airingTodayTV),
];

// Movies Page Categories
export const categoriesMovies = [
  createCategory("Trending Movies Today", CategoryPaths.trendingMovies),
  createCategory("Popular Movies", CategoryPaths.popularMovies),
  createCategory("Top Rated Movies", CategoryPaths.topRatedMovies),
  createCategory("Upcoming Movies", CategoryPaths.upcomingMovies),
  createCategory("Now Playing Movies", CategoryPaths.nowPlayingMovies),
];

// TV Shows Page Categories
export const categoriesTVShows = [
  createCategory("Trending TV Shows Today", CategoryPaths.trendingTV),
  createCategory("Popular TV Shows", CategoryPaths.popularTV),
  createCategory("Top Rated TV Shows", CategoryPaths.topRatedTV),
  createCategory("Airing Today TV Shows", CategoryPaths.airingTodayTV),
  createCategory("Currently On The Air", CategoryPaths.onTheAirTV),
];
