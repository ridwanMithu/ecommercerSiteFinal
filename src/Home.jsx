
import { Outlet } from 'react-router-dom'
import './App.css'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import ProductSection from './Component/ProductSection'
import Footer from './Component/Footer'

function Home() {

  return (
    <>
      <Navbar />;
      <Outlet />;
      <Footer />;


    </>
  )
}

export default Home
