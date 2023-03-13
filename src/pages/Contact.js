import React from 'react';
import contactBg from '../assets/pizzaLeft.jpg';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <motion.div
            className='contact'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <div className="contact-left" style={{backgroundImage: `url(${contactBg})`}}>
            </div>
            <div className="contact-right">
                <h2>Kapcsolat</h2>
                <form action="" method="post">
                    <label>Teljes név</label>
                    <input type="text" placeholder="Add meg a teljes neved..."/>

                    <label>E-mail cím</label>
                    <input type="email" placeholder='Add me az e-mail címed...' />

                    <label>Üzenet</label>
                    <textarea rows="6" placeholder='Üzenet...'></textarea>

                    <button>Küldés</button>
                </form>
            </div>
        </motion.div>
  )
}

export default Contact;