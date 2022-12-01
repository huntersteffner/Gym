import Header from './components/Header'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import PersonalTraining from './pages/PersonalTraining'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About/>
      <PersonalTraining/>
      <Footer/>
    </>
  )
}
