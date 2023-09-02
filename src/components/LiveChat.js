import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      //   console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="bg-slate-100 rounded-t-lg w-full h-[500px] p-2 ml-2 border border-black overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((msg, index) => (
            <ChatMessage key={index} name={msg.name} message={msg.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-b-lg"
        onSubmit={(e) => {
          e.preventDefault();
            // console.log("On Form Submit, ", liveMessage);
          dispatch(addMessage({name: "Tanishq Baweja",message: liveMessage}));
          setLiveMessage("");
        }}
      >
        <input
          className="w-72 px-2"
          type="text"
          onChange={(e) => setLiveMessage(e.target.value)}
          value={liveMessage}
          placeholder="Chat..."
        />
        <button className="px-2 mx-2 bg-green-200 rounded-md font-semibold">Send 👉
        </button>
      </form>
    </>
  );
};

export default LiveChat;
