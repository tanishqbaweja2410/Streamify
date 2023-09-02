import React from "react";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            replies: [],
          },
        ],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    replies: [{
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        replies: [{
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            replies: [],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            replies: [{
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                replies: [],
              },
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                replies: [],
              }],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            replies: [],
          }],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        replies: [],
      }],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {/* replies */}
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies}/>
        {/* {comment.replies.map((reply,index) => <CommentsList key={index} data={reply} />)} */}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 my-5 ml-5 w-[1000px]">
      <h1 className="text-2xl font-bold">Comments : </h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
