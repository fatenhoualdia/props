import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'
import image  from './img/img.jpg';
function App() {
  const handleName=(x)=>{

    return alert(`hello,${x}`)

  }
 
  return (
    <div className="App">
  <Profile fullName ='faten khoualdia' bio='' profession='web developer' handleName={handleName}>
    <img src={image}  alt="profile"> </img>
  </Profile>
    </div>
  );
}

export default App;