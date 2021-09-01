import JupViewer from './jupView/JupView'

const Notebook = () => {
  return (
    <div style={{ marginBottom: '100px' }}>
      <JupViewer file="https://raw.githubusercontent.com/pson0001/Product/main/src/assets/coles.ipynb"></JupViewer>
    </div>
  )
}
export default Notebook
