import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header id='header'/>
        {/* <NavBar id='navbar'/> */}
           <Routes>            
               <Route path = '/' element = {<HomePage/>}/>
           </Routes>
       </div>
     </BrowserRouter>
  );
}

export default App;
