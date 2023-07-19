import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./component/pages/HomePage";
import AboutPage from "./component/pages/AboutPage";
import ContactPage from "./component/pages/ContactPage";
import NavBar from "./component/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./component/pages/PageNotFound";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route  path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
