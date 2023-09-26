import styled from 'styled-components'
import {categories} from '../data'
import CategoryItem from './CategoryItem'
import {mobile} from '../responsive'


// const Heading = styled.h1`
//     margin: 20px 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;

// `

const Container = styled.div`
    display: flex;
    padding: 60px;
    justify-content: space-between;
    ${mobile({padding: "0px", flexDirection: "column"})}

`

const Categories = () => {
  return (
    <Container>
        { categories.map((item) => (
            <CategoryItem item = { item } key = { item.id }></CategoryItem>
        ))}
    </Container>
  );
};

export default Categories