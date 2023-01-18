import { useState, useEffect } from "react";
import { GET } from "../../utils/fetch";
import Post from "../post";
import "./index.css";

const PostList = () => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then((posts) => setMsgList(posts));
    
  }, []);

  return (
    <div className="PostList">
      {msgList.map((msg) => (
        <Post data={msg} key={msg.id} />
      ))}
    </div>
  );
};

export default PostList;
