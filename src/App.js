import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Album from "./views/Album";
import File from "./views/File";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100">
      <Router>
        <Route exact path="/" component={Album} />
        <Route path="/file" component={File} />
      </Router>
    </div>
  );
}

export default App;
