import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import './App.css';
import './index.css';

function App() {
  return (
      <div className="App">
          <Navbar />
          <h2>Movies Lib</h2>
          <Outlet />
      </div>
  )
}

export default App
