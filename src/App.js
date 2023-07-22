import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./component/pages/HomePage";
import AboutPage from "./component/pages/AboutPage";
import ContactPage from "./component/pages/ContactPage";
import NavBar from "./component/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./component/pages/PageNotFound";
import AddUser from "./component/user/AddUser";
import EditUser from "./component/user/EditUser";
import ViewUser from "./component/user/ViewUser";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/edit/:userId" element={<EditUser />} />
          <Route exact path="/users/view/:userId" element={<ViewUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
