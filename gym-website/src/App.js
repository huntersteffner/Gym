import Header from './components/Header'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import PersonalTraining from './pages/PersonalTraining'
import Footer from './components/Footer'

import {Route, Routes} from 'react-router-dom'


export default function App() {

  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/personal-training' element={<PersonalTraining/>} />
      </Routes>
      
      {/* <Home />
      <About/>
      <PersonalTraining/> */}
      <Footer/>
    </>
  )
}
