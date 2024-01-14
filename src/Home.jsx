
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
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
