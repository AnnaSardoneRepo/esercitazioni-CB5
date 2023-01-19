import "./index.css";
import { useEffect, useState } from "react";
import Friend from "../friend";
import { GET } from "../../utils/fetch";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then((data) =>
      setFriendsList(data)
    );
  }, []);

  return (
    <div className="FriendsList">
      {friendsList.map((friend) => (
        <Friend data={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;
