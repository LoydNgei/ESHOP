// import React from 'react'
// import styled from 'styled-components'
// import  ShoppingCartOutlinedIcon  from '@mui/icons-material/ShoppingCartOutlined';
// import { mobile } from '../responsive'
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Badge from '@mui/material/Badge';
// import {logoutUser} from '../redux/userRedux';
// import PersonIcon from '@mui/icons-material/Person';




// const Container = styled.div`
//     height: 60px;
//     background-color: ;
//     ${mobile({ height: "50px" })}

// `
// const Wrapper = styled.div`
//     padding: 10px 20px;
//     display: flex;
//     justify-content: space-between;
//     ${mobile({ padding: "10px 0px" })}


// `
// const Left = styled.div`
//     flex: 1;
// `

// const Logo = styled.h1`
//     font-weight: bold;
//     ${mobile({ fontSize: "24px" })}
// `
// const Center = styled.div`
//     display: flex;
//     align-items: center;
// `

// const Right = styled.div`
//     flex: 1;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     margin: 5 40px;
//     ${mobile({ flex: 2, justifyContent: "center" })}

// `
// const MenuItem = styled.div`
//     font-size:18px;
//     cursor: pointer;
//     margin-left: 25px;
//     ${mobile({ fontSize: "12px", marginLeft: "10px" })}
//     text-decoration: none !important; 
//     color: inherit !important;
// `


// const Navbar = () => {
//     const quantity = useSelector(state => state.cart.quantity);
//     const dispatch = useDispatch();

//     const handleClick = () => {
//         dispatch(logoutUser());
//     }

//     // console.log(quantity);
//     return (
//         <Container>
//             <Wrapper>
//                 <Left>
//                     <Link to = '/' style={{textDecoration: "None"}}>
//                         <Logo>TUSHOP</Logo>
//                     </Link>     
//                 </Left>
//                 <Center>
//                     Search
//                 </Center>
//                 <Right>
//                     <MenuItem>
//                     <PersonIcon onClick={handleClick}>
//                     <Link to = '/login' style={{textDecoration: "None"}}>
//                         <MenuItem onClick={handleClick}>LOGOUT</MenuItem>
//                     </Link>
//                     </PersonIcon>
//                     </MenuItem>

                  
//                     <Link to="/cart">                    
//                         <MenuItem>
//                             <Badge badgeContent={quantity} color="primary">
//                                 <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
//                             </Badge>
//                         </MenuItem>
//                     </Link>
//                 </Right>

//             </Wrapper>
//         </Container>
//     )
// }

// export default Navbar



import React, { useState } from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../redux/userRedux';
import PersonIcon from '@mui/icons-material/Person';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Container = styled.div`
  height: 60px;
  background-color: ;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 10 40px;
  gap: 30px;
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setAnchorEl(null); // Close the dropdown after logout
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>TUSHOP</Logo>
          </Link>
        </Left>
        <Center>
          {/* Add your search box component here */}
          {/* <input type="text" placeholder="What are you looking for?" /> */}
        </Center>
        <Right>
          <PersonIcon onClick={handleClick} style={{}}/>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem>
              <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                SignUp
              </Link>
            </MenuItem>
            <Link to="/login" style={{ textDecoration: 'none', color: 'orange'}}>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Link>
          </Menu>

          <Link to="/cart">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
