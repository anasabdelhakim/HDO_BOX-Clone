import React, { useEffect, useRef, useState } from "react";
import styles from "./MediaCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
const SwiperBreakPoints = {
  0: { slidesPerView: 3.15 },
  640: { slidesPerView: 4.15 },
  768: { slidesPerView: 5.15 },
  1024: { slidesPerView: 5.15 },
  1280: { slidesPerView: 7.15 },
  1536: { slidesPerView: 8.15 },
};

const defaultArray = Array.from({ length: 8 });

export const MovieCategories = React.memo(function MovieCategories({
  fetchUrl,
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movieCategories", fetchUrl],
    queryFn: async () => {
      const res = await fetch(fetchUrl);
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });

  const allItems = isLoading || error ? defaultArray : data.results;
  const items = allItems.slice(0, 15); // Limit number of items rendered

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width >= 1536) setSlidesPerView(8.15);
      else if (width >= 1280) setSlidesPerView(7.15);
      else if (width >= 1024) setSlidesPerView(5.15);
      else if (width >= 768) setSlidesPerView(5.15);
      else setSlidesPerView(3.15);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };
  const navigate = useNavigate();

  const handleMovieEntery = (id) => {
    navigate(`/movie/${id}`);
    console.log(id);
  };

  const isAtEnd = currentIndex >= items.length - Math.round(slidesPerView);

  return (
    <div className={styles.sliderContainer}>
      <div
        ref={prevRef}
        className={`${styles.customNav} ${styles.leftArrow}`}
        style={{
          display: windowWidth <= 700 || currentIndex === 0 ? "none" : "flex",
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div
        ref={nextRef}
        className={`${styles.customNav} ${styles.rightArrow}`}
        style={{ display: windowWidth <= 700 || isAtEnd ? "none" : "flex" }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={handleSlideChange}
        spaceBetween={10}
        breakpoints={SwiperBreakPoints}
        allowTouchMove={true}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className={styles.movieItem}
            onClick={() => handleMovieEntery(item?.id)}
          >
            {item?.poster_path ? (
              <>
                <picture>
                  <source
                    srcSet={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                    type="image/webp"
                  />
                  <img
                    src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                    alt={item.title || item.name}
                    className={styles.posterImg}
                    loading="lazy"
                  />
                </picture>

                <span>{item.title || item.name}</span>
              </>
            ) : (
              <div className={styles.skeletonImg}></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
