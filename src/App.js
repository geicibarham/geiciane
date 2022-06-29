
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/about/about';
import Projects from './components/projects/Project';
import Footer from './components/footer';
import Home from './components/home/home';
import ContactForm from './components/Form';
function App() {
  return (
    <Router>
      <main>
    
      <Routes>

      <Route
            path='/'
            element={<Home />}
          />
      <Route
            path='/form'
            element={<ContactForm />}
          />
     
    </Routes>
    </main>
    </Router>

  );
}

export default App;
