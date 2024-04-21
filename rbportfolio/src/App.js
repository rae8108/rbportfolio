import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import GitHub from "./GitHub";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route path="/product" element={<GitHub />} />
          <Route path="/basket" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
