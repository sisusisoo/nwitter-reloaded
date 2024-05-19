import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";


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
    const onLogOut = async ()=>{
        const ok=confirm("Are you sure? you want to Log Out");
        if(ok){
            await auth.signOut();
            navigate("/login");
        }

    }
    return(
        <Wrapper>
            <nav className="navbar bg-blue">
            <div id ="nav" className="container-fluid">
                <img src="C:\Users\Owner\Desktop\ntwitter\nwitter-reloaded\src\assets\img\olympics.png" alt="Logo" id="logo" className="d-inline-block align-text-top"></img>
                <ul className="nav justify-content-end">
                <li className="nav-item"><a className="nav-link white" aria-current="page" href="./index.html"><BsFillHouseFill />&nbsp;Home</a></li>
                <li className="nav-item"><a className="nav-link white" href="./profile.html"><BsPersonFill />MyPage</a></li>
                <li className="nav-item"><a className="nav-link white" href="./login.html"><BsDoorOpenFill />&nbsp;Login</a></li>
                <li className="nav-item"><a className="nav-link white" href="./member.html"><FaAddressBook />&nbsp;Member</a></li>
                </ul>
            </div>
            </nav>
                
            <Outlet/>
        </Wrapper>
    );
}