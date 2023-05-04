import React from "react";
import styled from "styled-components";
import Imag from "../Images/school.jpg"
import robot from "../Images/robot.jpg"
import dream from "../Images/dream.jpg"
// import {} from "inspector";


const HomeScreen = () => {
    return(
        <div>
            <Cont>   <Main >
                    {/* <Image src={Imag}></Image>  */}
                </Main>
                <Main2>
                   
                </Main2>
                </Cont>
            <Container>
        
            <ContainerHold>
                <Real>
                    <Holder1>
                        <Left1 src={robot} ></Left1>
                        <Right1>
                            <Big>AI as The New Guy in Town</Big>
                            <Small>..we teach Ai and also Machine Language, 
                                which can be used as a field of study and also 
                                a means of livelihood.</Small>
                        </Right1>
                    </Holder1>
                    <Holder2>
                        <Left>
                        <Big1>Work after our training</Big1>
                            <Small1>...100% guarantee that after the program, you have the ability and confidence
                                to be a part of a team, organization
                            </Small1>
                        </Left>
                        <Right src={dream}></Right>
                    </Holder2>
                </Real>
            </ContainerHold>
            </Container>
        </div>
    )
}

export default HomeScreen;


const Cont = styled.div` 
background-image:url(${Imag}) ;
width: 100%;
height: 600px;
background-repeat: no-repeat;
background-size: cover;
`
const Main2 = styled.div`
color: black;

`;
const Small1 = styled.div`
text-align: center;
`;
const Big1 = styled.div`
font-weight: 800;
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
text-align: center;
`;
const Small = styled.div`
text-align: center;
`;
const Big = styled.div`
font-weight: 800;
font-size: 30px;
margin-bottom: 10px;
`;

const Left1 = styled.img`
width: 47%;
height: 270px;
object-fit: cover;
`;
const Right1 = styled.div`
width: 47%;
height: 270px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Right = styled.img`
width: 47%;
height: 270px;
object-fit: cover;
`;
const Left = styled.div`
width: 47%;
height: 270px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Holder2 = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
`;
const Holder1 = styled.div`
display: flex;
justify-content: space-between;
`;



const Real = styled.div`
width: 93%;
height: 550px;
background-color: white;
/* display: flex; */

`;


const ContainerHold = styled.div`
width: 100%;
height: 600px;
/* background-color: green; */
display: flex;
justify-content: center;
align-items: center;
`;

// const Text = styled.div`
// /* width: 400px;
// height: 400px;
// background-color: red; */
// `;

const Image = styled.img`
width: 100%;
height: 100%;
`;
const Main = styled.div`
width: 100%;
height: 600px; 
display: flex;

@media screen and (max-width: 500){
    object-fit: cover;
}

`;

const Container = styled.div`
width: 100%;
height:auto;
/* background-color: black; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
