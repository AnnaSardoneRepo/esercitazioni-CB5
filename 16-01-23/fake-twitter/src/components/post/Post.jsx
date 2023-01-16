import { useState, useEffect } from "react";
import { GET } from "../../utils/fetch";
import "./index.css";

const Post = ({data})=> {
    const [user, setUser] = useState({});
    const [photo, setPhoto] = useState({});

    useEffect(() => {
      GET(`users/${data.userId}`).then((user) => setUser(user));
      GET(`photos/${data.userId}`).then((photo) => setPhoto(photo));    
    }, []);


  return (
    <div className="Post">
        <img className="avatar" src={photo.thumbnailUrl} alt="avatar" />
        <div className="textPost">
        <h4>@{user.name}</h4>
        <p>{data.title}</p>
        
        </div>
        
    </div>
  )
}



export default Post;

// {"userId":1,"id":1,
// "title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}