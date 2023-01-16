
import PostList from './components/postsList';
import InputPost from './components/inputPost/InputPost';
import './App.css';
import logo from './assets/img/bird.png' 

function App() {
  return (
    <div className="App">
      <img className='logo' src={logo} alt="" />
      <h1>Fake Twitter</h1>
      <InputPost/>
      <PostList/>
    </div>
  );
}

export default App;
