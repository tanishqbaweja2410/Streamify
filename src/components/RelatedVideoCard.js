import React from "react";

const RelatedVideoCard = ({ info }) => {
  // console.log(info);
  // if(info === undefined) return;
  const {snippet} = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="flex ml-2 mt-5 w-[399px] h-28">
    <img
      className="w-[40%] rounded-lg"
      src={thumbnails.medium.url}
      alt=""
    />
    <ul className="px-2 overflow-hidden">
      <li className="text-base font-semibold">
        {title}
      </li>
      <li className="text-sm font-light">
        {channelTitle}
      </li>
    </ul>
  </div>
  );
};

export default RelatedVideoCard;
