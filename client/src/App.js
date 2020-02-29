import React  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SearchBook from "./pages/SearchBooks";


const App = () => (
  <Router>
    <div className = "container">
      
      <Route exact path = "/" component = {SearchBook} />
    
    </div>


  </Router>
  
  
);

export default App;
