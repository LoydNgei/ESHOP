import styled from "styled-components"
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from "axios"


// import {register} from '../redux/apiCalls'
// import { publicRequest } from "../requestMethods";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    // background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://i.ibb.co/M5FKtZX/Laptop.jpg");
    background-size: 50% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;    
    padding: 20px;
    background-color: #FFA500;
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
    &:hover {
      background-color: green;
  }
`

const Register = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setPassword('')
            setConfirmPassword('')
            setError("Passwords do not match")
            return;
        }
        const user = {
            username: username,
            email: email,
            password: password,
        };

        // CONSUME REGISTER BACKEND API USING AXIOS

        axios.defaults.withCredentials = true;
        
        try {
            const apiBaseUrl = 'https://eshopapi.vercel.app/api';
            const response = await axios.post(`${apiBaseUrl}/auth/register`, user);

            console.log(response.data);

            if (response.status === 201) {
                navigate("/login");
              } else {
                const data = response.data || {};
                setError(data.error || "Registration failed");
              }
        } catch (error) {
              console.error(error);
          
              // Check if error.response exists before accessing error.response.data
              if (error.response && error.response.data) {
                setError(error.response.data.error || "Registration failed");
              } else {
                setError("Registration failed");
              }
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
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button onClick={handleRegister}>CREATE</Button>

          {error && <div>
            {error.message}</div>}
          <>Already have an Account? <Link to="/login" style={{color: "green", margin: "10px", textDecoration: "None"}}>LOGIN</Link></>
        </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
