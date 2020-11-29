import React, { useState } from 'react'
import './navigation.scss'
const Navigation = (props) => {
  const [ifInsights, setIfInsights] = useState(true)

  props.getIfInsights(ifInsights)
  return (
    <div className="nav">
      <div className="navTitle">
        <div>Influenza Case Study</div> <div>By Ezra Aydin</div>
      </div>
      <div className="navItems">
        <ul>
          <li
            onClick={() => setIfInsights(true)}
            className={ifInsights ? 'selected' : ''}
          >
            Insights
          </li>
          <li
            onClick={() => setIfInsights(false)}
            className={ifInsights ? '' : 'selected'}
          >
            Modelling
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
