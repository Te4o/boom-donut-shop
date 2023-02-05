import styled from "styled-components";
import React from 'react'
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="wrapper home">
      <div className="start-page-bg"></div>
      <motion.div className="start-page-donut1" alt="donut 1" initial={{ y: -2000 }} animate={{ y: 0 }}></motion.div>
      <motion.div className="start-page-donut2" alt="donut 2" initial={{ y: -2000,x:5000 }} animate={{ y: 0 ,x:0}}></motion.div>
      <div className="text-warpper">
        <div className="text">
          <motion.div className="start-small-title" initial={{ x: "-1000px" }} animate={{ x: "0" }}>The</motion.div>
          <motion.div className="start-big-title" initial={{ x: "-1000px" }} animate={{ x: "0" }}>Donut <span className="shop">Shop</span></motion.div>
        </div>
        <a href='/menu'>
          <motion.button className='start-btn' type="button" initial={{ y: -1000 }} animate={{ y: 0 }} whileTap={{scale:1.1}}> Start</motion.button>
        </a>
      </div> 
    </div>
  )
}