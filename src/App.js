import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ArticlePage from "./components/ArticlePage";
import NavBar from "./components/NavBar";
import SignInPage from "./components/SignInPage.jsx"
import { UserContext } from "./contexts/User";
import { useState } from "react";

function App() {
  
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <Header id='header'/>
        <NavBar id='navbar'/>
           <Routes>            
               <Route path = '/' element = {<HomePage/>} />
               <Route path = '/signin' element = {<SignInPage/>}/>
               <Route path = '/articles/:topic' element = {<HomePage/>}/>
               <Route path = '/articles/article/:article_id' element = {<ArticlePage/>}/>
           </Routes>
       </div>
     </UserContext.Provider>
     </BrowserRouter>
  );
}

export default App;
