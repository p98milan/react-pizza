import React from 'react';
import Empty from '../assets/empty.jpg';
import { motion } from 'framer-motion';
import '../styles/NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <motion.div
            className='notFound'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="emptyBg"></div>
            <div className="notFound-content">
                <h2>404!! A keresett oldal nem található...</h2>
                <Link to="/">Vissza a kezdőoldalra 🍕</Link>
            </div>
        </motion.div>
    )
}

export default NotFoundPage;