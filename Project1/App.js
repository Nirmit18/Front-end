import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./assets/App.scss";
import "./assets/Header.scss";




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </Router>
    
  );
}

export default App;
