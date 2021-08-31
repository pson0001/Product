import React, { useState } from 'react'
import './navigation.scss'
const Navigation = (props) => {
  const [ifInsights, setIfInsights] = useState('insights')

  props.getIfInsights(ifInsights)
  return (
    <div className="nav">
      <div className="navTitle">
        <div>Product Forcasting Case Study</div> <div>By Ezra Aydin</div>
      </div>
      <div className="navItems">
        <ul>
          <li
            onClick={() => setIfInsights('insights')}
            className={ifInsights === 'insights' ? 'selected' : ''}
          >
            Insights and Model
          </li>

          <li
            onClick={() => setIfInsights('notebook')}
            className={ifInsights === 'notebook' ? 'selected' : ''}
          >
            Notebook
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
