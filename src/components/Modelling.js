import React from 'react'

import JupViewer from './jupView/JupView'

// const ipynb = require('https://raw.githubusercontent.com/ShivBhosale/React-Jupyter-Viewer/master/ipynb-viewer/src/BenchmarkNotebook.ipynb')
const Modelling = () => {
  return (
    <div>
      <JupViewer file="https://raw.githubusercontent.com/ShivBhosale/React-Jupyter-Viewer/master/ipynb-viewer/src/BenchmarkNotebook.ipynb" />
    </div>
  )
}
export default Modelling
