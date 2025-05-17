import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HdoNav from "./components/HdoNav/HdoNav";
import "./App.css";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home"));
const Movie = lazy(() => import("./pages/Movies"));
const TVShows = lazy(() => import("./pages/TvShows"));
const Search = lazy(() => import("./pages/Search"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <div className="hdo-app">
      <BrowserRouter basename="/Movie_test">
        <HdoNav />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="/tvshows" element={<TVShows />} />
            <Route path="/search" element={<Search />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
