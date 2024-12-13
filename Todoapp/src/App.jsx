import './App.css'
import { Routes,Route } from 'react-router-dom'
import Todo from './pages/Todo'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import FormHandling from './pages/FormHandling'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Todo/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/FormHandling' element={<FormHandling/>}/>
    </Routes>
    </>
  )
}

export default App
