import styled from "styled-components";
import PostTweetFrom from "../component/post-tweet-from";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Olympic_tournament from "./Olympic_tournament";
import Soeun  from "./Soeun"
//import Timeline from "../component/timeline";

const Wrapper=styled.div`
display:flex;
flex-direction: column;
gap:50px;
grid-template-columns: repeat(5, 20%);
//overflow-y: hidden;

`;
const Button=styled.button`
height:100px;
width:100px;
`;
const ContainerRow=styled.div`
display:flex;
`;


false
export default function Olympic_main(){
    const [olympicView,setOlypicView]=useState(false);
    const navigate=useNavigate();
    const toTournament=()=>{

       //navigate("/Olympic_tournament")
    };

    
    return (

        <Wrapper>
        <Soeun/>
        <ContainerRow>
            1
            121212
        {/* <Button onClick={()=>setOlypicView(true)}> 이상형 올림픽 시작하기</Button>
        <Button> 교수님 검색</Button>  */}
        </ContainerRow>


        <ContainerRow>
        {olympicView ? <Olympic_tournament/>:null}
  
        {olympicView ? <Olympic_tournament/>:null}
        </ContainerRow>
       
        </Wrapper>
      
    )
    
}