import React from 'react'
import styled from 'styled-components'
import  ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import {logoutUser} from '../redux/userRedux';




const Container = styled.div`
    height: 60px;
    background-color: ;
    ${mobile({ height: "50px" })}

`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}


`
const Left = styled.div`
    flex: 1;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 5 40px;
    ${mobile({ flex: 2, justifyContent: "center" })}

`
const MenuItem = styled.div`
    font-size:18px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    text-decoration: none !important; 
    color: inherit !important;
`


const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logoutUser());
    }

    // console.log(quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to = '/' style={{textDecoration: "None"}}>
                        <Logo>ESHOP</Logo>
                    </Link>     
                </Left>
                <Right>
                    <Link to = '/' style={{textDecoration: "None"}}>
                        <MenuItem>HOME</MenuItem>
                    </Link>


                    <Link to = "/login" style={{textDecoration: "None"}}>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>

                    <Link to = '/login' style={{textDecoration: "None"}}>
                        <MenuItem onClick={handleClick}>LOGOUT</MenuItem>
                    </Link>

                    <Link to="/cart">                    
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar

