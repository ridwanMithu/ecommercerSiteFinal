
import './App.css'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import ProductSection from './Component/ProductSection'

function App() {

  return (
    <>
      <Navbar />;
      <HeroSection/>;
      <div className="text-4xl font-semibold text-center uppercase text-rose-600 my-7">Top Selling Products</div>
      <ProductSection />

    </>
  )
}

export default App
