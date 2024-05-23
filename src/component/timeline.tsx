import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet";
import { Unsubscribe } from "firebase/auth";
import { equalTo } from "firebase/database";


export interface ITweet{//export
    id:string;
    photo?:string;
    tweet:string;
    userId:string;
    username:string;
    createdAt:number;

}
const Wrapper=styled.div`
display:flex;
gap:10px;
flex-direction: column;
overflow-y: scroll;
-ms-overflow-style: none; 
  scrollbar-width: none; 
`;


export default function Timeline(){
    const [ tweets, setTweet]=useState<ITweet[]>([]);

   
    useEffect(()=>{ 
        let unsubscribe : Unsubscribe | null  =  null;
        const fetchTweet =async()=>{
        const tweetsQuery=query(
           collection(db,"tweets"),
           orderBy("createdAt","desc"),
           limit(25)
        );
        /*
        const snapShot=await getDocs(tweetsQuery);


        const tweets=snapShot.docs.map((doc)=>{
            const {tweet,createdAt,userId,username,photo}=doc.data();
            return {
                tweet,createdAt,userId,username,photo,id:doc.id,
            }
        });
            */
        unsubscribe=await onSnapshot(tweetsQuery,(snapshot)=>{
            const tweets=  snapshot.docs.map((doc)=>{
                const {tweet,createdAt,userId,username,photo}=doc.data();
                return {
                    tweet,createdAt,userId,username,photo,id:doc.id,
                };
            });
            setTweet(tweets);
         

        })
      
    
    };
        fetchTweet();
        return ()=>{
            unsubscribe && unsubscribe();
        }

    },[])
  
    return <Wrapper>
        {tweets.map((tweet)=>(
            <Tweet key={tweet.id} {...tweet} />
        ))}
    </Wrapper>
}