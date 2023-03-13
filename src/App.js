import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <AnimatedRoutes/>
      <Footer/>

    </Router>
  );
}

export default App;
