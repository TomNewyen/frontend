import React from 'react'
import styled from 'styled-components'
import ProductItem from './ProductItem'

import axios from "axios";

import { useEffect, useState } from "react";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Product = ({ cat,filters,sort }) => {
  const [products,setProducts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState([])
  
  useEffect(()=>{
    const getProducts = async () => {
    try {
      const res = await axios.get(
        cat ? `http://localhost:3001/server/products?category=${cat}`
            : "http://localhost:3001/server/products"
      )
      setProducts(res.data)
    } catch (error) {}
  }
  getProducts()
},[cat])

useEffect(() => {
  cat &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
}, [products, cat, filters]);


  return (
    <Container>
         {cat
        ? filteredProducts.map((item) => <ProductItem item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <ProductItem item={item} key={item.id} />)}
    </Container>
  )
}

export default Product