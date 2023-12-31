import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  Width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ height: "30vh" })}
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: red;
  font-size: 40px;
  font-type: bold;

`
const Button = styled.button`
  border: none;
  margin: 10px;
  padding: 12px;
  background-color: white;
  color: green;
  cursor: pointer;
  font-weight: 400;
  border-radius: 10px;
  font-weight: bold;
  &:hover {
    background-color: yellow;
}

`

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={ item.img } />
      <Info>
        <Title>{ item.title }</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}


export default CategoryItem
