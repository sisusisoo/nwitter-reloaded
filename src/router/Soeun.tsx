import styled from "styled-components";
import PostTweetFrom from "../component/post-tweet-from";
import Timeline from "../component/timeline";
import { useEffect, useState } from "react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Unsubscribe } from "firebase/auth";
import Tweet from "../component/tweet";
import Professor from "../component/ProfessorD";

//------추가
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap'
import "../component/style.css"
import { useNavigate } from "react-router-dom";
//import Olympic_soeun from "./Olympic_soeun"

//
const Div1=styled.div`
    border: 3px solid white;
`

export default function Soeun(){
  const navigate=useNavigate();

  const toTournament=()=>{
    console.log("sds");
    navigate("/Olympic_soeun")//olympilc-soeun
  }
  const toOlympic=()=>{
    navigate("/soeun")//olympilc-soeun
  }
  const toSearch=()=>{
    navigate("/soeun_search")//olympilc-soeun
  }
    return (
        <>
        <div>
          <nav className="navbar bg-blue">
          <div id ="nav" className="container-fluid">
            <img src="./img/olympics.png" alt="Logo" id="logo" className="d-inline-block align-text-top"></img>
            <ul className="nav justify-content-end">
              <li className="nav-item"><span className="nav-link white" aria-current="page" ><i className="bi bi-house-fill"></i>&nbsp;Home</span></li>
              <li className="nav-item"><span className="nav-link white" ><i className="bi bi-person-fill"></i>MyPage</span></li>
              <li className="nav-item"><span className="nav-link white" ><i className="bi bi-door-open-fill"></i>&nbsp;Login</span></li>
            </ul>
          </div>
        </nav>
        <Div1 className="card card2" id="box-1">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item" id="button-1" ><span className="nav-link bg-red white" >올림픽</span></li>
            <li className="nav-item" id="button-2"><span className="nav-link bg-yellow white" onClick={()=>toSearch()}>교수진 검색</span></li>
            <li className="nav-item" id="button-3"><span className="nav-link bg-green white" >etc</span></li>
          </ul>
        </div>
        </Div1>
        
        <Div1 className="card w-50" id="content-start">
        <Div1 className="card-body">
          <h5 className="card-title">교수님 이상형 올림픽</h5><hr></hr>
          <p className="card-text">
            총 몇 명의 교수 어쩌구<br></br>
            몇 강까지 어쩌구<br></br>
            대충 설명 1 <br></br>
            대충 설명 2 <br></br>
          </p>
          <span className="btn btn-primary" onClick={()=>toTournament()} >START</span>
        </Div1>
        </Div1>
        </div>
        </>
    
    )
}