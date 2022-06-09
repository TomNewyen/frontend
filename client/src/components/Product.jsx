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
  const [filteredProducts,setFilterProducts] = useState([])
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3001/api/products?category=${cat}`
            : "http://localhost:3001/api/products"
         
        );
       console.log(res) 
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  


  return (
    <Container>
        {filteredProducts.map((item)=>(
         <ProductItem item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Product