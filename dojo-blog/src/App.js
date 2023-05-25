import Navbar from './Navbar';
import HomePage from './homePage';


function App() {
    return (
    <div className="App">
      <div className="div">
        <div className="navbar">
        <Navbar/>
        </div>
        
        {/* <h1>Starting with the ReactApp</h1> */}
        <div className="home">
        <HomePage/>
        </div>
            
 
      </div>
    </div>
  );
}

export default App;
