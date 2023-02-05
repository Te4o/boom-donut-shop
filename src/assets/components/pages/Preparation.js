import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
import { Typewriter  } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Preparation = () => (
  <div className="wrapper prep">
     <motion.div className="payment-page-bg" initial={{ y:0}} whileInView={{y:+1026}} transition={{ duration:5}}></motion.div>
      <div className="elements">
        <motion.div className="payment-page-donut" alt="donut 1"
        animate={{ rotate: 360 }}
        transition={{
          scale: 1,
          repeat: Infinity,
          repeatType: "",
          duration: 5,}}
          initial={{
            scale: 1,
        }}>
        </motion.div>  
        <div className="payment-big-title">
          <Typewriter className='payment-big-title' words={['Preparation']} loop={true} cursor cursorStyle='...'/>
        </div>
	   </div>
  </div>
);
  
export default Preparation