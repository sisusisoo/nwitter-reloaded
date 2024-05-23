import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth,db } from "../firebase";
import {collection,doc, limit, onSnapshot, orderBy, query} from "firebase/firestore";
import { Unsubscribe } from "firebase/auth";//이거 보류
import { useEffect, useState } from "react";


const Wrapper =styled.div`

height:100%;
width : 100%;


`;
//------추가 부트 스트랩 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap'
import { FaAddressBook } from "react-icons/fa6";
import { BsPersonFill, BsFillHouseFill, BsDoorOpenFill } from "react-icons/bs";
import  "../component/style.css"
//

export default function LayoutSWE(){
    const navigate=useNavigate();

    useEffect(()=>{ 
      let unsubscribe : Unsubscribe | null  =  null;
      const fetchTweet =async()=>{
      const userProfileQuery=query(
         collection(db,"userProfile"),
         //orderBy("createdAt","desc"),
         orderBy("name","desc"),
         limit(25)
      )

      unsubscribe=await onSnapshot(userProfileQuery,(snapshot)=>{
        const tweets=  snapshot.docs.map((doc)=>{
            const {name,email,pw,studentid,profandstu,userID,createdAt}=doc.data();
            return {
              name,email,pw,studentid,profandstu,userID,createdAt
            };
        })})

      }},[])

    const onLogOut = async ()=>{
        const ok=confirm("Are you sure? you want to Log Out");
        if(ok){
            await auth.signOut();
            navigate("/login");
        }

    }
    const toHome = ()=>{
       navigate("/")

    }
    const toProfile = ()=>{
        navigate("/profileSWE")
 
     }
 

    return(
        <Wrapper> <div id="content-member">
        {/*Table 1 */}
        <div className="container mt-4">
          <table id="table1" className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">이름</th>
                <th scope="col">학번</th>
                <th scope="col">아이디</th>
                <th scope="col">비밀번호</th>
                <th scope="col">이메일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>김학생</td>
                <td>1111111</td>
                <td>ID1</td>
                <td>Password1</td>
                <td>@naver.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>이학생</td>
                <td>2222222</td>
                <td>ID2</td>
                <td>Password2</td>
                <td>@gmail.com</td>
              </tr>
              <tr>
                <td>3</td>
                <td>박학생</td>
                <td>3333333</td>
                <td>ID3</td>
                <td>Password3</td>
                <td>@kmu.kr</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/*Table 2 */}
        <div className="container mt-4">
          <table id="table2" className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">이름</th>
                <th scope="col">교수번호</th>
                <th scope="col">아이디</th>
                <th scope="col">비밀번호</th>
                <th scope="col">이메일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>김교수</td>
                <td>4444444</td>
                <td>ID4</td>
                <td>Password4</td>
                <td>@naver.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>이교수</td>
                <td>5555555</td>
                <td>ID5</td>
                <td>Password5</td>
                <td>@gmail.com</td>
              </tr>
              <tr>
                <td>3</td>
                <td>박교수</td>
                <td>6666666</td>
                <td>ID6</td>
                <td>Password6</td>
                <td>@kmu.kr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
       
                
            <Outlet/>
        </Wrapper>
    );
}