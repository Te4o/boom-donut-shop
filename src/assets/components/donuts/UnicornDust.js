import React from 'react'; 
import { motion } from "framer-motion";
const UnicornDust = () => (
 <div className="row">
  <div className="column1">
    <motion.div className="menu-title" whileHover={{ color:"#e198b5" }}>Unicorn Dust</motion.div>
  </div>
  <div className="column2">
    <motion.a className="menu-donut4" href="/payment" alt="Unicorn Dust"
      animate={{ rotate: 180 }}
      transition={{
        scale: 1,
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,}}
        initial={{
            scale: 1,
        }}
        whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },        
          }}
        whileTap={{ scale: 0.8 }}
    ></motion.a>
  </div>
</div>
);

export default UnicornDust;