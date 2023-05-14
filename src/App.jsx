// import MeraCard from "./components/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import PageNotFound from "./components/pagenotfound/PageNotFound";
// import (BrowserRouter as Router,Route,Routes) from ""

const App = () => {

  return (
  <>

  
  {/* <h2>test</h2> */}
    <Router>
    <Header />
      <Routes>
        <Route path="/home" element = {<Home />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/contact" element = {<Contact />}></Route>
        <Route path="*" element = {<PageNotFound />}></Route>
        <Route path="/product/:id" element = {<PageNotFound />}></Route>
      </Routes>
    </Router>

  </>

  )
  
};


export default App