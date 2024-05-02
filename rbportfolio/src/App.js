import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import GitHub from "./GitHub";
import Contact from "./Contact";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import Project4 from "./Projects/Project4";
import Project5 from "./Projects/Project5";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/project1" element={<Project1 />} />
          <Route path="/projects/project2" element={<Project2 />} />
          <Route path="/projects/project3" element={<Project3 />} />
          <Route path="/projects/project4" element={<Project4 />} />
          <Route path="/projects/project5" element={<Project5 />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
