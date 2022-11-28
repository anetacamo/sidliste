import React from "react";

const Video = ({ source }) => {
  return (
    <div className="video-container">
      <iframe
        src={source}
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default Video;
