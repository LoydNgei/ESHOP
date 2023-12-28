import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #977d68;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const Title = styled.div`
    font-size: 40px;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}

    
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })};
    
`


const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`


const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`


const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;

`


const Newsletter = () => {
  return (
    <Container>
        <Title>NEW TO TUSHOP?</Title>
        <Desc>Subscribe to our newsletter to get updates on our latest offers!</Desc>
        <InputContainer>
            <Input placeholder = "Your email"></Input>
            <Button>
                <SendIcon></SendIcon>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter;
