import { useState, useEffect } from "react";
import { GET } from "../../utils/fetch";
import Friend from "../friend";
import "./index.css";

const FriendsList = () => {
  return (
    <div className="FriendsList">
      <Friend />
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
};

export default FriendsList;
