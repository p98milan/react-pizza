import { MotionConfig } from 'framer-motion';
import React from 'react';
import { motion } from 'framer-motion';
import {PizzaList} from '../PizzaList';
import PizzaItem from '../components/PizzaItem';
import '../styles/Pizza.css'


const Pizza = () => {
  return (
    <motion.div
        className='pizza'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.4}}
    >
        <h2>Pizzák</h2>
        <div className="pizzaList">
            {
                PizzaList.map(pizza=>{
                    return <PizzaItem name={pizza.name} image={pizza.image} price={pizza.price}/>
                })
            }
        </div>
    </motion.div>
    )
}

export default Pizza;