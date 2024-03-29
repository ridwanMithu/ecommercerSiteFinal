import  { useState, useEffect } from 'react'
import Cards from './Cards';

const ProductSection = () => {

  const[products, setProducts]=useState([]);

  const getProduct=()=>{
    fetch('https://dummyjson.com/products?limit=4')
      .then(res => res.json())
      .then((data)=>setProducts(data.products));
  }

  useEffect(()=>{
    getProduct();
  },[])

  console.log(products)

  return (

    <>
      <div className="text-4xl font-semibold text-center uppercase text-rose-600 my-7">Top Selling Products</div>
      <div  className="flex flex-wrap gap-3 justify-evenly">
        {
          products.map((product)=><Cards cardInfo={product} key={product.id} />
        )}
      </div>
    </>

  )
}

export default ProductSection