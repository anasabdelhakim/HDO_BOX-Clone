import { MovieCategories } from "../MediaCard/MediaCard";
import styles from "./MediaRow.module.css"; // Import CSS Module
import IntroMovie from "../IntroMovie/IntroMovie";

export function AppClassifcation({ categories, title = "" }) {
  return (
    <div className={styles.container}>
      {!title && <IntroMovie />}
      <h1 className={styles.sectionName}>{title}</h1>
      <div className={styles.LineBreak}></div>
      {categories.map((category, index) => (
        <section className={styles.movieSection} key={index}>
          <div className={styles.movieSectionTitle}>
            <h3>{category.title}</h3>
            <a href="#">See All</a>
          </div>
          <MovieCategories
            title={category.title}
            fetchUrl={category.fetchUrl}
          />
        </section>
      ))}
    </div>
  );
}
