import styled from "styled-components"
import {mobile} from '../responsive'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    // background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1612835362596-4b0b2b1b0b0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXR5JTIwY2FyJTIwYmVzdCUyMHN0b3JlJTIwY2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80");
    background-size: cover;
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
`

const Link = styled.a`
    margin: 10px 0px;
    font-size: 16px;
    text-decoration: underline;
    cursor: pointer;
`


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN UP</Title>
            <Form>
                <Input type="text" placeholder="User Name"></Input>
                <Input type="password" placeholder="Password"></Input>
                <Button>LOGIN</Button>
                <Link>Forgot password?</Link>
                <Link>Create Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
