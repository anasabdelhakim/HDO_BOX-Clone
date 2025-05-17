// API Base URL and Key
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "your_api_key_here";

// Authentication Endpoints
const AUTH_TOKEN_NEW = "/authentication/token/new";
const AUTH_SESSION_NEW = "/authentication/session/new";
const AUTH_ACCOUNT = "/account";

// Movie Endpoints
const MOVIE_TRENDING_DAY = "/trending/movie/day";
const MOVIE_TRENDING_WEEK = "/trending/movie/week";
const MOVIE_POPULAR = "/movie/popular";
const MOVIE_TOP_RATED = "/movie/top_rated";
const MOVIE_NOW_PLAYING = "/movie/now_playing";
const MOVIE_UPCOMING = "/movie/upcoming";
const MOVIE_LATEST = "/movie/latest";
const MOVIE_DETAILS = "/movie/{movie_id}";
const MOVIE_CREDITS = "/movie/{movie_id}/credits";
const MOVIE_VIDEOS = "/movie/{movie_id}/videos";
const MOVIE_RECOMMENDATIONS = "/movie/{movie_id}/recommendations";
const MOVIE_REVIEWS = "/movie/{movie_id}/reviews";
const MOVIE_IMAGES = "/movie/{movie_id}/images";
const MOVIE_KEYWORDS = "/movie/{movie_id}/keywords";

// TV Show Endpoints
const TV_TRENDING_DAY = "/trending/tv/day";
const TV_TRENDING_WEEK = "/trending/tv/week";
const TV_POPULAR = "/tv/popular";
const TV_TOP_RATED = "/tv/top_rated";
const TV_AIRING_TODAY = "/tv/airing_today";
const TV_ON_THE_AIR = "/tv/on_the_air";
const TV_LATEST = "/tv/latest";
const TV_DETAILS = "/tv/{tv_id}";
const TV_CREDITS = "/tv/{tv_id}/credits";
const TV_VIDEOS = "/tv/{tv_id}/videos";
const TV_RECOMMENDATIONS = "/tv/{tv_id}/recommendations";
const TV_REVIEWS = "/tv/{tv_id}/reviews";
const TV_IMAGES = "/tv/{tv_id}/images";

// Search Endpoints
const SEARCH_MOVIE = "/search/movie";
const SEARCH_TV = "/search/tv";
const SEARCH_PERSON = "/search/person";

// Genre Endpoints
const GENRE_MOVIE_LIST = "/genre/movie/list";
const GENRE_TV_LIST = "/genre/tv/list";

// Person Endpoints
const PERSON_DETAILS = "/person/{person_id}";
const PERSON_MOVIE_CREDITS = "/person/{person_id}/movie_credits";
const PERSON_TV_CREDITS = "/person/{person_id}/tv_credits";
const PERSON_IMAGES = "/person/{person_id}/images";

// Company Endpoints
const COMPANY_DETAILS = "/company/{company_id}";
const COMPANY_MOVIES = "/company/{company_id}/movies";

// Configuration Endpoints
const CONFIGURATION = "/configuration";

// Discover Endpoints
const DISCOVER_MOVIE = "/discover/movie";
const DISCOVER_TV = "/discover/tv";

// List Endpoints
const LIST_MOVIE_ITEMS = "/list/{list_id}/items";
