import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Image from "../../Images/log.png"
import {GiHamburgerMenu } from "react-icons/gi"


const Header =() => {
    return(
        <div>
            <Container>
                <Main>
                    <Logo src={Image}/>
                    <NavHolder>
                        <Navs to="./">Home</Navs>
                        <Navs to="./about">About</Navs>
                        <Navs to="./product">Products</Navs>
                        <Navs to="./contact">Contact</Navs>
                    </NavHolder>
                </Main>
                <Main2>
                    <Logo src={Image}/>
                    <Div/>
                </Main2>
                <Main3>
                    <Logo src={Image}/>
                    <NavHolders>
                        <Nav to="./">Home</Nav>
                        <Nav to="./about">About</Nav>
                        <Nav to="./product">Products</Nav>
                        <Nav to="./contact">Contact</Nav>
                    </NavHolders>
                </Main3>
            </Container>
        </div>
    )
};

export default Header;


const NavHolders = styled.div`
margin-right: 5px;
display: flex;
justify-content: center;
`;


const Nav = styled(NavLink)`
display: flex;
justify-content: space-between;
margin: 0 10px;
text-decoration: none;
color: white;
font-weight: 400;
`;

const Div = styled(GiHamburgerMenu)`
height: 30px;
width: 30px;
color: white;
`;

const Main3 = styled.div`
width: 93%;
height: 65px;
display: flex;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 700px){
    display: none;
}
`;


const Main2 = styled.div`
width: 93%;
height: 65px;
display: none;
justify-content: space-between;
align-items: center;

@media screen and (max-width: 700px){
    display: flex;
}
`;
const Navs = styled(NavLink)`
text-decoration: none;
font-weight: 600;
color: white;


:hover{
    /* margin-bottom: 5px; */
    cursor: pointer;
    transition: all 450ms;
    color: #5b5b5b;
}


`;
const NavHolder = styled.div`
width: 27%;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
`;
const Logo = styled.img`
width: 100px;
height: 55px;
object-fit: contain;

:hover{
    cursor: pointer;
    transform: scale(1.12);
    transition: all 550ms;
}
`;

const Main = styled.div`

width: 93%;
height: 65px;
display: none;
justify-content: space-between;
align-items: center;


@media screen and (max-width: 1000px){
    display: none;
}
`;


const Container = styled.div`
width: 100%;
height: 70px;
background-color: darkgray;
display: flex;
justify-content: center;
align-items: center;
`;