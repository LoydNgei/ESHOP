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
import { resetCart } from '../redux/cartRedux';


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

  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(resetCart()); // Reset the cart when the user logs out
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
          { user ? (
            <>
              <PersonIcon onClick={handleClick} />
              <div>{user.name}</div>
            </>
          ) : (
            <PersonIcon onClick={handleClick} />
          )}
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
            <MenuItem onClick={handleLogout}>
              <Link to="/login" style={{ textDecoration: 'none', color: 'orange'}}>
                Logout
              </Link>
            </MenuItem>
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
