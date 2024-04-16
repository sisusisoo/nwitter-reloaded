import styled from "styled-components";
//import { ITweet } from "./timeline";
import { auth, db, storage } from "../firebase";
import {  deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import {  useState } from "react";
import { TProfessor } from "../router/Olympic_tournament";

const Wrapper=styled.div`
display: grid;
grid-template-columns: 3fr 1fr;
padding:20px;
border:1px solid rgba(200,200,200,0.5);
border-radius: 15px;
`;

const Column=styled.div``;

const Photo=styled.img`
width:100px;
height:100px;
border-radius: 15px;
`;

const Username = styled.span`
font-weight:600;
font-size: 15px;

`;

const Payload=styled.p`
margin:10px 0px;
font-size:18px;

`;
const DeleteButton = styled.button`
background-color: tomato;
font-weight: 600;
border:0;
font-size:12px;
padding:5px 10px;
text-transform: uppercase;
border-radius: 5px;
cursor:pointer;

`
;
const UpdateButton = styled.button`
background-color: #4787ff;
font-weight: 600;
border:0;
font-size:12px;
padding:5px 10px;
text-transform: uppercase;
border-radius: 5px;
margin-right: 10px;
cursor:pointer;

`
;

const TextArea=styled.textarea`
border:hidden;
padding:20px;
border-radius:20px;
font-size:16px;
color:white;
background-color:black;
width:100%;
resize:none;
&::placeholder{
    font-size:16px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
&:focus{
    outline:none;
    border-color: #1d9bf0;
}

`;


export default function Professor({pname,pcharator1,pcharator2,pcharator3,scomment}:TProfessor){
    const user=auth.currentUser;
    const [update,setUpdate]=useState("");
    const [tweetU,setTweetU]=useState("");

    return (
       
    <Wrapper>
        <Column>
    <Username>{pname}</Username>

    <Payload>{scomment}</Payload>
    <Payload>{pcharator1}</Payload>
    <Payload>{pcharator2}</Payload>
    <Payload>{pcharator3}</Payload>
    </Column>

    </Wrapper>
    )

}