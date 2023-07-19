import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import HomePage from './component/pages/HomePage';
import AboutPage from './component/pages/AboutPage';
import ContactPage from './component/pages/ContactPage';
function App() {
  return (
    <div className="container">
    <HomePage/>
    <AboutPage/>
    <ContactPage/>
    </div>
  );
}

export default App;
