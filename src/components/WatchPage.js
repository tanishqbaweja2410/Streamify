import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams, Link } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import RelatedVideoCard from "./RelatedVideoCard";
import { YOUTUBE_REL_VIDEOS_API } from "../utils/constants";

const WatchPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
  }, [searchParams.get("v")]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_REL_VIDEOS_API + searchParams.get("v"));
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="w-full">
      <div className="px-5 flex w-full">
        <div>
          <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="flex w-full">
        <CommentsContainer />
        <div>
          {videos!= undefined && videos.length >= 1 && videos.map((video) => (
            <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
              <RelatedVideoCard info={video} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
