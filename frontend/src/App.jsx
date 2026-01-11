import { Route, Routes } from "react-router"
import HomePage from './pages/HomePage'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/home/:id" element={<Home/>}/>
    </Routes>
  )
}

export default App
