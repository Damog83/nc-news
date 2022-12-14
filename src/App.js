import { BrowserRouter, Routes, Route} from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/Home/HomePage";
import ArticlePage from "./pages/Article/ArticlePage";
import NavBar from "./components/NavBar";
import SignInPage from "./pages/Signin/SignInPage";
import SignOutPage from "./pages/Signout/SignOutPage";
import PageNotFound from "./pages/Error/PageNotFound";

function App() {
  
  const [user, setUser] = useState();

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <div id="content">
        <Header id='header'/>
        <NavBar id='navbar'/>
           <Routes>            
               <Route path = '/' element = {<HomePage/>} />
               <Route path = '/signIn' element = {<SignInPage/>}/>
               <Route path = '/signOut' element = {<SignOutPage/>}/>
               <Route path = '/articles/:topic' element = {<HomePage/>}/>
               <Route path = '/articles/article/:article_id' element = {<ArticlePage/>}/>
               <Route path = '*' element={<PageNotFound/>} />
           </Routes>
          </div>
       </div>
     </UserContext.Provider>
     </BrowserRouter>
  );
}

export default App;