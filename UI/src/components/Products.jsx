import { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

axios.defaults.withCredentials = true;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    
    const apiBaseUrl = 'https://eshopapi.vercel.app/api';


    const getProducts = async () => {
      try {
        const url = cat
          ? `${apiBaseUrl}/products?category=${cat}`
          : `${apiBaseUrl}/products`;

        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);

        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response data:', err.response.data);
          console.error('Response status:', err.response.status);
          console.error('Response headers:', err.response.headers);
        } else if (err.request) {
          // The request was made but no response was received
          console.error('No response received:', err.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', err.message);
        }
      }
      };

    getProducts();
  }, [cat]);

  // Filtering items according to properties
  
  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) => 
        item[key].includes(value)
        )
      )
    );
  }, [products, cat, filters])
  




  // Sort Items(Newest...)


  useEffect(() => {
    if(sort === "newest") {
      setFilteredProducts(prev=>
        [...prev].sort((a,b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts(prev=>
        [...prev].sort((a,b) => a.price - b.price)
      );
  } else {
    setFilteredProducts((prev) =>
      [...prev].sort((a,b) => a.price - b.price)
    );
  }
  }, [sort]);






  return (
    <Container>
        { filteredProducts.map((item) => (
            <Product item = { item } key = { item._id }></Product>
        )) }
    </Container>
  )
}

export default Products