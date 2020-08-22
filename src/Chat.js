import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./chat.css";
function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setinput] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed >>>>>>>>>>>>>", input);
    setinput("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat_headerInfo">
          <h3>roomname</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciver"} `}>
          <span className="chat_name">aadi</span>
          hey guys
          <span className="chat_timestamp">3.52 pm</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="type a message"
          />
          <button type="submit" onClick={sendMessage}>
            send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
