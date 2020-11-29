import './App.scss'
import React, { useState } from 'react'

import Navigation from './components/Navigation'
import TableauEmbed from './components/TableauEmbed'
import Modelling from './components/Modelling'

function App() {
  const [showInsights, setShowInsights] = useState(true)
  const getIfInsights = (e) => {
    setShowInsights(e)
  }
  return (
    <div>
      <Navigation getIfInsights={getIfInsights}></Navigation>
      <div className="container">
        {showInsights ? <TableauEmbed></TableauEmbed> : <Modelling></Modelling>}
      </div>
    </div>
  )
}

export default App
