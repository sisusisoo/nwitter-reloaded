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
import "../component/style.css"
import { useNavigate } from "react-router-dom";
import SecondNavBar from "../component/SecondNavBar" 
//import Olympic_soeun from "./Olympic_soeun"

//


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
        <div className="card card2" id="box-1">
        <SecondNavBar/>
        <div className="card w-50" id="content-start">
        <div className="card-body">
          <h5 className="card-title">교수님 이상형 올림픽</h5><hr></hr>
          <p className="card-text">
            컴퓨터공학과 교수님 10명을 비롯하여<br></br>
            그 외에 학과 수업을 진행하시는 교수님까지 16명이 랜덤으로 배정됩니다.<br></br>
            올림픽은 16강 토너먼트 형식으로 진행되며, 두 교수님 중 선호하는 교수님을 선택해주세요.<br></br><br></br>
            <small><b>Tip. 교수님 프로필 아래에 재학생들이 적은 댓글들을 참고 해보세요:D</b></small><br></br>
            <br></br>
          </p>
          <span className="btn btn-primary" onClick={()=>toTournament()} >START</span>
          </div>
      
        </div>
        </div>
      </>
    
    )
}