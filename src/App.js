import Header from './Components/Header';
import './App.css';
import All from "./Components/All"
import { Route, Routes } from 'react-router-dom';
import Breakfast from './Components/Breakfast';
import Lunch from './Components/Lunch';
import Shakes from './Components/Shakes'
import Home from './Components/Home';



function App() {
  
  return (
    <div className="App">
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/all" element={<All />}></Route>
          <Route path="/breakfast" element={<Breakfast />}></Route>
          <Route path='/lunch' element={<Lunch />}></Route>
          <Route path='/shakes' element={<Shakes />}></Route>

        </Routes>
        
      </main>
      
    </div>
  );
}

export default App;
