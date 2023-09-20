
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
// import Cart from "./components/Cart";
import Header from './component/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <div className="App"> */}
      <Routes>
        <Route path="/" exact  element= { <Home />}/>  
        


       
        </Routes>
        
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
