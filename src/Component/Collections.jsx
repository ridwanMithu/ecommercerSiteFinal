import  { useState, useEffect } from 'react'
import Cards from './Cards';

const Collections = () => {

  const[products, setProducts]=useState([]);

  const getProduct=()=>{
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data)=>setProducts(data.products));
  }

  useEffect(()=>{
    getProduct();
  },[])


  return (

    <>
      <div className="text-4xl font-semibold text-center uppercase text-rose-600 my-7">Browse All Products</div>
      <div  className="flex flex-wrap gap-3 justify-evenly">
        {
          products.map((product)=><Cards cardInfo={product} key={product.id} />
        )}
      </div>
    </>

  )
}

export default Collections