
//------추가
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav} from 'react-bootstrap'
import "../component/style.css"
import { useNavigate } from "react-router-dom";
import SecondNavBar from "../component/SecondNavBar" 

//import Olympic_soeun from "./Olympic_soeun"



export default function Olympic_search(){
  const navigate=useNavigate();
  const toOlympic=()=>{
    navigate("/olympic")//olympilc-soeun
  }
  const toSearch=()=>{
    navigate("/olympic_search")//olympilc-soeun
}

  const toTournament=()=>{
    console.log("sds");
    navigate("/Olympic_soeun")//olympilc-soeun
  }
    return (
        <>
            <div className="card card2" id="box-1">
                <SecondNavBar/>
            </div>
            <div className="search-box" id="content-search">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
        </>
    )
}