
import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import img from './image/IMG_5416.jpg'

function App() {
  return (
    <div className="App">
    <div className='AppContent' > 
    <ProfilePhoto img={img} />
      <div className='content'>
       <h4>Name :</h4>
        <FullName />
        <h4>Address :</h4>
        <Address />
      </div>
    </div>
    </div>
  );
}

export default App;
