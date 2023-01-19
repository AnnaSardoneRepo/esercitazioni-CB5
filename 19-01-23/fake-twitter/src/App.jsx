
import PostList from './components/postsList';
import InputPost from './components/inputPost/InputPost';
import Friend from './components/friend/Friend';
import FriendsList from './components/friendsList/FriendsList';
import logo from './assets/img/bird.png' 
import './App.css';

function App() {
  return (
    <>
<div className="header"> 
<img className='logo' src={logo} alt="" />
      <h1>Ci<span className='yelloow'>pp</span>tter</h1></div>
<section className="App">
      <div className="friendsSection scroll">
      <FriendsList/>
      </div>
      <div className="mainSection scroll">
      <InputPost/>
      <PostList/>
      </div>
      <div className="popularSection">
        Popular
 
      </div>
      </section>
      <div className="footer">Un giorno sarò un footer... spero</div>
    </>
  );
}

export default App;
