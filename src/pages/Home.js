import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroImage from '../assets/pizza.jpeg';
import '../styles/Home.css';

const Home = () => {
  return (
    <motion.div
      className='home'
      style={{backgroundImage: `url(${HeroImage})`}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.4}}
    >
      <div className="home-container">
        <h1>React Pizzéria</h1>
        <p>A React fejlesztők kedvenc pizzáit nálunk találod!</p>
        <Link to='/pizza'>
          <button>Rendelés</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Home;