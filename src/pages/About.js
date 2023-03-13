import React from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

const About = () => {
  return (
    <motion.div
        className='about'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.4}}
    >
        <div className="aboutTop" style={{backgroundImage: `url(${AboutImage})`}}></div>
        <div className="aboutContainer">
            <h2>Rólunk</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo hic nisi, quidem suscipit optio, eaque officiis sed aut earum eveniet molestias aliquam ipsa officia quas autem necessitatibus placeat minima cupiditate laudantium sunt. Dolores, modi voluptas eligendi ex ut maxime beatae blanditiis itaque assumenda incidunt quidem tempore aut? Obcaecati tempore, dolore dolor alias sed rerum neque dicta ratione quo odio consequatur voluptatem vero reprehenderit officiis pariatur? Vitae, facere, dignissimos inventore unde quas adipisci optio corporis perferendis suscipit asperiores quasi? Fugiat, est! Earum error dignissimos libero iusto aliquam, corrupti quos repellendus. Aliquam soluta facere eveniet expedita excepturi deserunt aspernatur illo tempora exercitationem.</p>
        </div>
    </motion.div>
  )
}

export default About;