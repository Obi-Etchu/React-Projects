
import './App.css'
import { BrowserRouter as Router , Route, Routes, BrowserRouter } from 'react-router-dom'
import Recipe from './Recipes'
import Details from './Details'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Recipe/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
