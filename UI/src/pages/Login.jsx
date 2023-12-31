import styled from "styled-components"
import { mobile } from '../responsive'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../redux/apiCalls"
import { useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { loginSuccess } from "../redux/userRedux"
import { resetCart } from "../redux/cartRedux"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    // background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://i.ibb.co/Bc6QbCH/Stylish-Footwear.jpg");
    background-size: 50% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    // background-color: blue;

`
const Wrapper = styled.div`
    width: 50%;    
    padding: 20px;
    background-color: #FFA500;
    ${mobile({ width: "75%" })}
    border-radius: 10px;
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
    border: 1px solid gray;
    border-radius: 10px;
`


const Button = styled.button`
    width: 20%;
    height: 30px;
    border: none;
    padding: 8px;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
    background-color: teal;
    &:hover {
        background-color: green;
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
`

const Error = styled.span`
    color: red;
`

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { isFetching, error }  = useSelector((state) => state.user);
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const user = await login(dispatch, {email, password});
            console.log('User Data', user)
            dispatch(loginSuccess(user));
            dispatch(resetCart());
            if (response.status === 401) {
                // Handle incorrect credentials error
                console.log("Incorrect credentials");
                // You can dispatch an action or update the state to indicate incorrect credentials
              }
            navigate("/");
        } catch(error) {
            console.log('Login failed', error)
        }
    }

    return (
        <Container>
            <Wrapper>
                <Title>Welcome Back!</Title>
                <Form>
                    <Input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></Input>
                    <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input>
                    <Button onClick={handleClick} disabled = {isFetching}>LOGIN</Button>
                    {/* <Error>{error && !isFetching && "Something went wrong"}</Error> */}
                    <Link>Forgot password?</Link>
                    <RouterLink to="/register" style={{textDecoration: "None", color: "green"}}>CREATE ACCOUNT</RouterLink>
                </Form>
            </Wrapper>
        </Container>
    )
}


export default Login
