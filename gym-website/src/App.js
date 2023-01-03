import Header from './components/Header/Header'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import PersonalTraining from './pages/PersonalTraining'
import Footer from './components/Footer'

import {Route, Routes} from 'react-router-dom'
import GroupClasses from './pages/GroupClasses'
import Membership from './pages/Membership'
import Careers from './pages/Careers'




export default function App() {

  
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/personal-training' element={<PersonalTraining/>} />
        <Route path='/group-classes' element={<GroupClasses/>} />
        <Route path='/membership' element={<Membership/>} />
        <Route path='/careers' element={<Careers/>} />
      </Routes>
      <Footer/>
      
    </>
  )
}
