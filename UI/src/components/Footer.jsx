import React from 'react'
import styled from 'styled-components'

// Social media Icons

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import {mobile} from '../responsive';



const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column'})};
`

const Left = styled.div`
    flex: 1;
    diplay: flex;
    flex-direction: column;
    padding: 20px;

`

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;    
`;

const SocialContainer = styled.div`

    display: flex;
    
`;

const SocialIcon = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none"})};

`

const Title = styled.h3`
    margin-bottom: 30px;

`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: 'lightgreen'})};

`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`;

const Payment = styled.img`
    width: 50%;
`;



const Footer = () => {
  return (
    <Container>

        <Left>
            <Logo>ESHOP</Logo>
            <Desc>JOIN US ON</Desc>
            <SocialContainer>
                <SocialIcon>
                    <FacebookIcon></FacebookIcon>
                </SocialIcon>
                <SocialIcon>
                    <InstagramIcon></InstagramIcon>
                </SocialIcon>
                <SocialIcon>
                    <TwitterIcon></TwitterIcon>
                </SocialIcon>
            </SocialContainer>
        </Left>



        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Return policy</ListItem>
                <ListItem>Service terms</ListItem>
            </List>
        </Center>


        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomIcon style={{marginRight: '10px'}}></RoomIcon>
                254 Mayweather Street, South Sylvester
            </ContactItem>

            <ContactItem>
                <PhoneIcon style={{marginRight: '10px'}}></PhoneIcon>
                    +23 546 321 789
            </ContactItem>

            <ContactItem>
                <MailOutlineIcon style={{marginRight: '10px'}}></MailOutlineIcon>
                Eshop@gmail.com
            </ContactItem>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>

        </Right>


    </Container>
  )
}


export default Footer