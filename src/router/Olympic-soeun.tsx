import styled from "styled-components";
import PostTweetFrom from "../component/post-tweet-from";
import Timeline from "../component/timeline";
import { useEffect, useState } from "react";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { Unsubscribe } from "firebase/auth";
import Tweet from "../component/tweet";
import Professor from "../component/ProfessorD";

//------추가 부트 스트랩 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap'
import  "../component/style.css"
import { useNavigate } from "react-router-dom";
import jsonData from "../assets/ProfDF.json"
//
const Div1=styled.div`
    border: 3px solid white;
`
//DB
const profDB= jsonData;


export default function Olympic_main(){
    const navigate=useNavigate();
    const [displayProf,setDisplayProf] =useState([profDB[0],profDB[1]]);

    const toOlympic=()=>{
        navigate("/olympic")//olympilc-soeun
      }
    const toSearch=()=>{
        navigate("/soeun_search")//olympilc-soeun
    }

    const pick = ()=>{
        profDB[0]
    }

    return (
        <>
        <div className="card card2" id="box-1">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item" id="button-1" onClick={()=>toOlympic()}><span className="nav-link bg-red white">올림픽</span></li>
                    <li className="nav-item" id="button-2"><span className="nav-link bg-yellow white" onClick={()=>toSearch()} >교수진 검색</span></li>
                    <li className="nav-item" id="button-3"><span className="nav-link bg-green white" >etc</span></li>
                </ul>
            </div>
            {/*여기서부터 반복*/}
            <div id="content-olympic">
                <h3 id="round">Round 1</h3>
                <div id="content">
                <div id="prof-1" className="card" style={{width: "18rem"}}>
                    <img src="./img/담곰2.jpg" className="card-img-top" alt="..."></img>

                    <div className="card-body">
                    <h5 className="card-title">{profDB[0].name}</h5>
                    <p className="card-text">
                    <i className="bi bi-check2-circle blue">강의st</i><br></br>
                    {displayProf[0].lectureSt.map((lecture)=>{
                        return(
                            <li>{lecture}</li>
                        )
                    })}
                    {/* - 꼼꼼하고 이해하기 쉬운 설명<br></br>
                    - 과제: 많은 편<br></br>
                    - 시험: 문제 알려줘서 부담이 적음<br></br>
                    - 감점 및 상세점수 공지<br></br> */}
                    <i className="bi bi-check2-circle blue">상담st</i>
                    {displayProf[0].cosultSt.map((consult)=>{
                        return(
                            <li>{consult}</li>
                        )
                    })}
                    </p>
                    </div>
                
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">전공</span>&nbsp;
                    <span>

                    </span>

                    </li>
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">연구분야</span>&nbsp;컴퓨터비전, 패턴인식</li>
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">LAB</span>&nbsp; CVPR, 학부연구생 O </li>
                    </ul>

                    <div className="card-body">
                    <button type="button" id="choice" className="btn btn-primary">Choice</button>
                    </div>
                </div>
            
         
                <div id="prof-2" className="card" style={{width: "18rem"}}>
                    <img src="./img/담곰2.jpg" className="card-img-top pic" alt="..."></img>

                    <div className="card-body">
                    <h5 className="card-title">Prof_남재열</h5>
                    <p className="card-text">
                    <i className="bi bi-check2-circle blue">강의st</i><br></br>
                    - <br></br>
                    - <br></br>
                    - <br></br>
                    - <br></br>
                    <i className="bi bi-check2-circle blue">상담st</i>...
                    </p>
                    </div>
                    
                    <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">전공</span>&nbsp; - </li>
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">연구분야</span>&nbsp;영상압축, 영상인식</li>
                    <li className="list-group-item"><span className="badge rounded-pill text-bg-warning">LAB</span>&nbsp; - </li>
                    </ul>

                    <div className="card-body">
                    <button type="button" id="choice" className="btn btn-primary">Choice</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}