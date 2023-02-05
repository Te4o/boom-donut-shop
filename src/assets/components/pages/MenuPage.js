import React from 'react'
import MarbleMagic from '../donuts/MarbleMagic'
import SkyShaped from '../donuts/SkyShaped'
import TrueBlood from '../donuts/TrueBlood'
import UnicornDust from '../donuts/UnicornDust'

export default function MenuPage() {
  return (
    <div className="wrapper menu-bg"> 
    <div className="menu-div">
       <div className="menu-small-title">The</div>
       <div className="menu-big-title">Menu</div>
       <div className="rows">
          <SkyShaped />
          <MarbleMagic />
          <TrueBlood />
          <UnicornDust />
       </div>
       </div>
   </div> 
  )
}