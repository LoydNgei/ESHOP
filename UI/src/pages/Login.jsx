import styled from "styled-components"
import {mobile} from '../responsive'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../redux/apiCalls"
import { useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"






const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://i.ibb.co/Bc6QbCH/Stylish-Footwear.jpg");
    background-size: 50% 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 40%;    
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    padding: 20px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    width: 70%;
    margin: 10px 0px;
    padding: 13px;
    font-size: 16px;
    color: white;
    border: 1px solid gray;
    border-radius: 10px;
`


const Button = styled.button`
    width: 20%;
    height: 30px;
    border: none;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: teal;
    &:hover {
        background-color: white;
    }
    color: white;
    cursor: pointer;
    &: disabled {
        color: red;
        cursor: not-allowed;
    }    
`

const Link = styled.a`
    margin: 10px 0px;
    font-size: 16px;
    // text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
    color: red;
`

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error }  = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    }

    return (
        <Container>
            <Wrapper>
                <Title>SIGN UP</Title>
                <Form>
                    <Input type="text" placeholder="User Name" onChange={(e) => setUsername(e.target.value)}></Input>
                    <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input>
                    <Button onClick={handleClick} disabled = {isFetching}>LOGIN</Button>
                    <Error>{error && !isFetching && "Something went wrong"}</Error>
                    <Link>Forgot password?</Link>
                    <RouterLink to="/register" style={{textDecoration: "None", color: "yellow"}}>CREATE ACCOUNT</RouterLink>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login