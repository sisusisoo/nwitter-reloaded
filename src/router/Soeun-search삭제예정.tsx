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

export default function Olympic_main(){
  const navigate=useNavigate();
  const toOlympic=()=>{
    navigate("/olympic")//olympilc-soeun
  }
  const toSearch=()=>{
    navigate("/soeun_search")//olympilc-soeun
}

  const toTournament=()=>{
    console.log("sds");
    navigate("/Olympic_soeun")//olympilc-soeun
  }
    return (
        <>
        <div>
        <Div1 className="card card2" id="box-1">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item" id="button-1" onClick={()=>toOlympic()}><span className="nav-link bg-red white" >올림픽</span></li>
            <li className="nav-item" id="button-2"  onClick={()=>toSearch()}><span className="nav-link bg-yellow white" >교수진 검색</span></li>
            <li className="nav-item" id="button-3"><span className="nav-link bg-green white" >etc</span></li>
          </ul>
        </div>
        </Div1>
        
        <div className="search-box" id="content-search">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
        </div>
        </>
    
    )
}