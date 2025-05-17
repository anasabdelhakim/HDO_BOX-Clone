import React, { useEffect, useState, useRef } from "react";
import styles from "./IntroMovie.module.css";

const API_KEY = "3e844921c9ebc578a11464793d4faf86";
const BASE_URL = "https://api.themoviedb.org/3";

function IntroMovie() {
  const [introMovie, setIntroMovie] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window width
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch movie
  useEffect(() => {
    const controller = new AbortController();

    async function getTrendingMovies() {
      try {
        const response = await fetch(
          `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)];
        setIntroMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getTrendingMovies();
    return () => controller.abort();
  }, []);

  return (
    <div className={styles.introMovie}>
      {introMovie ? (
        <img
          src={
            introMovie.backdrop_path
              ? `https://image.tmdb.org/t/p/w1280${introMovie.backdrop_path}`
              : `https://image.tmdb.org/t/p/w500${introMovie.poster_path}`
          }
          alt={introMovie.title || "Movie Image"}
          className={styles.introImg}
        />
      ) : (
        <div className={styles.skeletonIntroImg}></div>
      )}

      {introMovie &&
        (windowWidth > 700 ? (
          <LargeSizeVer introMovie={introMovie} />
        ) : (
          <MobileSizeVer />
        ))}
    </div>
  );
}

function LargeSizeVer({ introMovie }) {
  const [checkSeeText, setCheckSeeText] = useState(true);
  function handleOverviewSize() {
    return setCheckSeeText((ch) => !ch);
  }
  const OverviewText = useRef(null);
  const isTextLong = introMovie.overview.length > 150;
  return (
    <div className={styles.LargeSize}>
      {introMovie ? (
        <>
          <div>
            <h2 className={styles.MovieTitle}>{introMovie.title}</h2>
            <p useRef={OverviewText} className={styles.OverView}>
              {checkSeeText
                ? `${introMovie.overview.slice(0, 150)}`
                : introMovie.overview}
              {isTextLong && (
                <button className={styles.SeeMore} onClick={handleOverviewSize}>
                  {checkSeeText ? "..." : <span>see less</span>}
                </button>
              )}
            </p>
          </div>
          <div>
            <div className={styles.BtnLarge}>
              <div className={`${styles.option} ${styles.playback}`}>
                <i className="fa-solid fa-play"></i>
                <p>PLAY</p>
              </div>
              <div className={`${styles.option} ${styles.myList}`}>
                <i className="fa-solid fa-plus"></i>
                <p>My List</p>
              </div>
              <div className={`${styles.option} ${styles.info}`}>
                <i className="fa-solid fa-circle-info"></i>
                <p>Info</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

function MobileSizeVer() {
  return (
    <div className={styles.movieOptions}>
      <div className={`${styles.optionmb} ${styles.myListmb}`}>
        <i className="fa-solid fa-plus"></i>
        <p>My List</p>
      </div>
      <div className={`${styles.optionmb} ${styles.playbackmb}`}>
        <i className="fa-solid fa-play"></i>
        <p>PLAY</p>
      </div>
      <div className={`${styles.optionmb} ${styles.infomb}`}>
        <i className="fa-solid fa-circle-info"></i>
        <p>Info</p>
      </div>
    </div>
  );
}

export default IntroMovie;
