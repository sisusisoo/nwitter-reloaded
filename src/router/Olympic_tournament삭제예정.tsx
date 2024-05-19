import styled from "styled-components";
import PostTweetFrom from "../component/post-tweet-from";
import Timeline from "../component/timeline";
import { useEffect, useState } from "react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Unsubscribe } from "firebase/auth";
import Tweet from "../component/tweet";
import Professor from "../component/ProfessorD";

export interface TProfessor{
    pname:string;
    pcharator1:string;
    pcharator2:string;
    pcharator3:string;
    scomment:string;

}
const Payload=styled.p`
margin:10px 0px;
font-size:18px;
`;

const Wrapper=styled.div`
display:flex;
flex-direction: column;
gap:50px;
grid-template-columns: repeat(5, 20%);
`;
const Component=styled.div`
display:flex;
flex-direction: column;
margin:10px;
gap:50px;
padding-top: 10px;

`;

const Button=styled.button`
flex:1;
height:100px;
width:100px;
gap:100px;
margin-top: 10px;
`;

const Container=styled.div`
display:flex;
flex-direction: column;
padding:20px;
border:1px solid rgba(200,200,200,0.5);
border-radius: 15px;
`;



export default function Olympic_tournament(){

    const [ professor, setProfessor]=useState<TProfessor[]>([]);
    
    useEffect(()=>{ 
        let unsubscribe : Unsubscribe | null  =  null;
        const fetchProfessor =async()=>{
        const professorQuery=query(
           collection(db,"professor"),
           orderBy("Pno","desc"),
           limit(25)

        );
        
        unsubscribe=await onSnapshot(professorQuery,(snapshot)=>{
            
            const prof=  snapshot.docs.map((doc)=>{
                console.log("debug111",doc.data());
                const {pname,pcharator1,pcharator2,pcharator3,scomment}=doc.data();
              
            
                return {
                    pname,pcharator1,pcharator2,pcharator3,scomment
                };
            });
            setProfessor(prof);
        })
       
    };

    fetchProfessor();
        return ()=>{
            unsubscribe && unsubscribe();
        }
     
    },[])
    console.log("debug",professor);

    return (

        <Wrapper>
          <Container>
          {professor.map((professor)=>(
           <Professor key={professor.pname}{...professor} />
        ))}
        
        <Button>선택</Button>
          </Container> 
         
        </Wrapper>
    )
    
}