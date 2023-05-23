import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBarPage from "./layouts/components/NavBarPage";
import Page1 from "./layouts/Page1";
import Page2 from "./layouts/Page2";
import Page3 from "./layouts/Page3";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/test1_idocNet/" element={<NavBarPage />}></Route>
          <Route path="/test1_idocNet/page1" element={<Page1 />}></Route>
          <Route path="/test1_idocNet/page2" element={<Page2 />}></Route>
          <Route path="/test1_idocNet/page3" element={<Page3 />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
