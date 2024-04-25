import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header/Header'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <ScrollToTop/>
        <Header/>
        <Routes>
       
       
        </Routes>
     
      </BrowserRouter>
  )
}

export default App
