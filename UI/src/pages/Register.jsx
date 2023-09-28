import styled from "styled-components"
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'
import {useState} from 'react'
// import {register} from '../redux/apiCalls'
import axios from "axios"
import { publicRequest } from "../requestMethods";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://i.ibb.co/M5FKtZX/Laptop.jpg");
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
    margin: 20px 10px 0px 0px;
    padding: 13px;
    color: white;
    font-size: 16px;
    border: 1px solid gray;
    border-radius: 10px;
`

const Agreement = styled.span`
    font-size: 15px;
    margin: 24px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    margin-bottom: 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();

        // if (password !== confirmPassword) {
        //     setPassword('')
        //     // setConfirmPassword('')
        //     setError("Passwords do not match")
        //     return;
        // }
        const user = {
            username: username,
            email: email,
            password: password,
        };

        try {
            const response = await axios({
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                url: "http://localhost:4000/api/auth/register",
                // body: JSON.stringify(user),
            });


            // console.log(response.data);


            if (response.status === 200) {
                return response.data;
            // } else {
            //     const data = await response.json();
            //     setError(data.error || "Registration failed");

            //     console.log(response.data);
            // }
            }

        } catch (error) {
            console.error(error.response.data);   // NOTE - use "error.response.data` (not "error")
            setError("Registration failed");
        }
    };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Link to="/login">
            <Button onClick={handleRegister}>CREATE</Button>
        </Link>
          {error && <div>
            {error.message}</div>}
         <a>Already have an Account? <Link to="/login" style={{color: "yellow", margin: "10px", textDecoration: "None"}}>LOGIN</Link></a>
        </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
