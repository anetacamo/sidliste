import React from "react";

const Video = ({ source }) => {
  return (
    <div className="video-container">
      <iframe
        src={source}
        frameborder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
export default Video;
