import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import RouterIndex from './routes/RouterIndex'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RouterIndex />
      </BrowserRouter>
    </>
  )
}

export default App
