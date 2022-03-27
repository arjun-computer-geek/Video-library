import styles from "./home.module.css";
import { useEffect, useState } from "react";
import { useVideo } from "context/video-context";
import { Category } from "components";
import { getCategorisedVideos } from "functions";

export const Home = () => {
  const {
    videos,
    videoState: { categoryBy },
  } = useVideo();

  const categoryFilteredVideos = getCategorisedVideos(videos, categoryBy);

  console.log(categoryFilteredVideos);
  return (
    <div>
      <Category />
      <div className={styles.cardContainer}>
        {categoryFilteredVideos.map((video) => {
          return (
            <div className={styles.videoCard} key={video._id}>
              <img src={video.gif} className={styles.image} />
              <div className={styles.videoDetail}>
                <img className={styles.videoThumbnail} src={video.thumbnail} />
                <span className={styles.videoTitle}>
                  {video.title}
                  <small className={styles.views}>
                    {video.views} Views {video.created} ago
                  </small>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
