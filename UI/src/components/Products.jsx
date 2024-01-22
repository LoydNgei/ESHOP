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
    
    const apiBaseUrl = 'https://eshopcentre.vercel.app/api';


    const getProducts = async () => {
      try {
        const url = cat
          ? `${apiBaseUrl}/products?category=${cat}`
          : `${apiBaseUrl}/products`;

        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    getProducts();
  }, [cat]);

  // Filtering items according to properties
  // useEffect(() => {
  //   cat && setFilteredProducts(
  //     products.filter(item => Object.entries(filters).every(([key, value]) => 
  //       item[key].includes(value)
  //       )
  //     )
  //   );
  // }, [products, cat, filters])


  
  // Filtering items according to properties
  useEffect(() => {
    if (cat) {
      setFilteredProducts(products.filter(item => item.categories.includes(cat)));
    } else {
      setFilteredProducts([...products]);
    }
  }, [products, cat]);

    




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