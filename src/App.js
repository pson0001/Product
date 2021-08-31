import './App.scss'
import React, { useState } from 'react'

import Navigation from './components/Navigation'
import TableauEmbed from './components/TableauEmbed'
import Modelling from './components/Modelling'
import Notebook from './components/Notebook'

function App() {
  const [showInsights, setShowInsights] = useState('insights')
  const getIfInsights = (e) => {
    setShowInsights(e)
  }
  return (
    <div>
      <Navigation getIfInsights={getIfInsights}></Navigation>
      <div className="container">
        {showInsights === 'insights' ? <TableauEmbed></TableauEmbed> : null}
        {showInsights === 'notebook' ? <Notebook></Notebook> : null}
      </div>
    </div>
  )
}

export default App
