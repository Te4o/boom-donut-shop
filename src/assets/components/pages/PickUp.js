import React from 'react';
import { motion } from "framer-motion";

const PickUp = () => (
<div className="wrapper done"> 
    <div className="elements2">
        <motion.div className="payment-page-donut" alt="donut 1" initial={{ y: 1000 }} animate={{ y: 0 }}></motion.div>  
        <motion.div className="payment-big-title2" initial={{ x: "-1000px" }}
            animate={{ x: "0" }}>You can now come <br></br>and pick up <br></br> your amazing Donut!
        </motion.div>
        <a href='/'> <motion.button className='done-btn' type="button" initial={{ y: -1000 }} animate={{ y: 0 }}>Done</motion.button></a>
    </div>
</div>
);

export default PickUp