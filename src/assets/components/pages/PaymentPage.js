import React from 'react';
import { motion } from "framer-motion";

const PaymentPage = () => (
<div className="wrapper pay">
  <div className="payment-div">
    <div className="elements3">
      <div className="text-wrapper">
        <motion.div className="donut-mid-title" initial={{ x: 5000 }} animate={{ x: 0 }}>You can</motion.div>
        <motion.div className="donut-small-title" initial={{ x: -5000 }} animate={{ x: 0 }}>Pay Us</motion.div>
        <motion.div className="donut-big-title" initial={{ y: 5000 }} animate={{ y: 0 }}>Now</motion.div>
      </div>
      <div className='button-wrapper'>
        <a href="/preparation"><motion.button className='apple-btn' type="button" whileTap={{scale:1.1}} initial={{x:50}} animate={{x:0}}></motion.button></a>
        <a href="/preparation"><motion.button className='gpay-btn' type="button" whileTap={{scale:1.1}} initial={{x:50}} animate={{x:0}}></motion.button></a>
        <motion.div className="payment-page-donut1" alt="donut 1" initial={{ x: -5000 }} animate={{ x: 0 }}></motion.div>
        <motion.div className="payment-page-donut2" alt="donut 2" initial={{ x: 5000 }} animate={{ x: 0 }}></motion.div>
      </div>
    </div>
  </div>
</div>
);

export default PaymentPage