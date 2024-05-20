

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
    Error,
    Form,
    Input,
    Switcher,
    Title,
    Wrapper
} from "../component/auth-component"
import GithubButton from "../component/github-btn";
import logo from "../assets/img/olympics.png"



export default function CreateAccount() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value }
        } = e;

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value)
        }
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("")
        console.log(name, email, password);
        if (isLoading || name === "" || email === "" || password === "") return;// loading 중일때 종료 

        try {
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user);
            await updateProfile(credentials.user, {
                displayName: name,
            });
            navigate("/");
        } catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.message);
                console.log(e.code, e.message);

            }
        } finally {
            setIsLoading(false);
        }
    }
    const toLogin = () => {
        navigate("/LoginSWE")

    }


    return (
        <>
            <nav className="navbar bg-blue">
                <div id="nav" className="container-fluid">
                    <img src={logo} alt="Logo" id="logo" className="d-inline-block align-text-top"></img>
                </div>
            </nav>
            <div id="content-register" className="center login">
                <div>
                    <form onSubmit={onSubmit}>
                        <h3 style={{ fontSize: "30px" }}>회원가입</h3><hr></hr>
                        <label htmlFor="InputId" className="form-label">Email</label>
                        {/* <input type="text" name="id" className="form-control"/> */}
                        <input onChange={onChange} name="email" className="form-control" value={email} placeholder="Email" type="email" required />

                        <label htmlFor="InputPassword" className="form-label">PW</label>
                        {/* <input type="password" name="pw" className="form-control"/><hr></hr> */}
                        <input onChange={onChange}
                            className="form-control"
                            value={password}
                            name="password"
                            placeholder="Password"
                            type="password"
                            required
                        />

                        <label htmlFor="InputName" className="form-label">이름</label>
                        <input type="text" name="id" className="form-control" />
                        <label htmlFor="InputNo" className="form-label">학번</label>
                        <input type="number" name="pw" className="form-control" />
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                학생
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                교수
                            </label>
                        </div>
                        <br></br>
                    </form>

                    {/* <button type="submit" className="btn btn-primary">회원가입</button> */}
                    {/* <button type="submit" className="btn btn-primary" value ={isLoading ? "Loading..." :"Create Account"}/> */}
                    <br></br><br></br>

                    <Input type="submit" value={isLoading ? "Loading..." : "Create Account"} />
                    {error !== "" ? <Error>{error}</Error> : null}
                    <GithubButton />
                    <br></br>
                    <a className="icon-link" onClick={() => toLogin()}>로그인 화면</a><br></br><br></br>
                </div>
            </div>
        </>
    )
}