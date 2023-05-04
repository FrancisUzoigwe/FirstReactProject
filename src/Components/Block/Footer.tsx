import React from "react";
import styled from "styled-components";
import Image from "../../Images/log.png"
import {AiFillFacebook,AiOutlineWhatsApp,AiFillInstagram} from "react-icons/ai"

const Footer =() => {
    return(
        <div>
            <Container>
                <Main>
                    <Sector>
                        <Head src={Image} />
                       
                    </Sector>
                    <Sector>
                    <Header>Ui Developers</Header>
                        <Holder>
                        <Tail>Umeh Emmanuel</Tail>
                        <Tail>Onuiri Destiny</Tail>
                        <Tail>Ezerioha Somtochukwu</Tail>
                        <Tail>Onyemaobi Anthony</Tail>
                        <Tail>Francis Uzoigwe</Tail>
                        </Holder>
                    </Sector>
                    <Sector>
                    <Header>BroCodes</Header>
                        <Holder>
                        <Tail>Umeh Emmanuel</Tail>
                        <Tail>Umeh Emmanuel</Tail>
                        <Tail>Ezerioha Somtochukwu</Tail>
                        <Tail>Onyemaobi Anthony</Tail>
                        <Tail>Francis Uzoigwe</Tail>
                        </Holder>
                    </Sector>
                    <Sector>
                    <Header>SheCodes</Header>
                        <Holder>
                        <Tail>Onuiri Destiny</Tail>
                        <Tail>Onuiri Destiny</Tail>
                        <Tail>Onuiri Destiny</Tail>
                        <Tail>Onuiri Destiny</Tail>
                        <Tail>Onuiri Destiny</Tail>
                        </Holder>
                    </Sector>
                    <Sector>
                    <Header>Instructors</Header>
                        <Holder>
                        <Tail>Fellow Frederick</Tail>
                        <Tail>Fellow Omamuzo</Tail>
                        <Tail>Fellow Goodluck</Tail>
                        <Tail>Fellow Osazie</Tail>
                        <Tail>Fellow Maloosh</Tail>
                        </Holder>
                    </Sector>
                </Main>
                <Outtro>
                    <Out>All rights reserved</Out>
                    <In>
                      <Dav>
                        <AiFillFacebook/>
                            <AiOutlineWhatsApp/>
                            <AiFillInstagram/>
                      </Dav>
                    </In>
                </Outtro>
            </Container>

        </div>
    )
};

export default Footer;

const Dav = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`;

const In = styled.div`
width: 50%;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Out = styled.div`
color: white;
`;
const Outtro = styled.div`
width: 500px;
height: 40px;
/* background-color: red; */
margin-left: 500px;
margin-bottom: 40px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Holder = styled.div`
/* display: flex; */
text-align: center;
margin-bottom: 180px;
`;
const Header = styled.div`
font-weight: 700;
font-size: 20px;
color: white;
margin-bottom: 10px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Tail = styled.div`
color: white;
margin-bottom: 4px;
`;
const Head = styled.img`
width: 100px;
height: 40px;
display: flex;
margin-top: 70px;
align-items: center;
justify-content: center;
object-fit: contain;

`;

const Sector = styled.div`
width: 21%;
height: 250px;
/* background-color: grey; */
display: flex;
margin-top: 50px;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Main = styled.div`
width: 93%;
height: 380px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Container = styled.div`
width: 100%;
height: 400px;
background-color: #4f4f4f;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;