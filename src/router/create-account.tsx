

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {Error,
    Form,
Input,
Switcher,
Title,
Wrapper
} from "../component/auth-component"
import GithubButton from "../component/github-btn";



export default function CreateAccount(){
    const navigate=useNavigate();
    const [isLoading,setIsLoading] =useState(false);
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [error,setError]=useState("");
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const { 
            target: {name,value}
        }=e;

        if(name ==="name"){
            setName(value);
        }else if(name==="email"){
            setEmail(value);
        }else if(name ==="password"){
            setPassword(value)
        }
    };
    const onSubmit =async (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setError("")
        console.log(name,email,password);
        if(isLoading||name ==="" || email===""||password ==="") return;// loading 중일때 종료 

        try { 
            const credentials=await createUserWithEmailAndPassword(auth,email,password);
            console.log(credentials.user);
            await updateProfile(credentials.user,{
                displayName:name,
                
            });
            navigate("/");
        }catch(e){
            if(e instanceof FirebaseError){
                setError(e.message);
                    console.log(e.code,e.message);

            }
        }finally{
            setIsLoading(false);
        }
    }
    
    return (
    <Wrapper>
        <Title>Join X</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange={onChange} name="name" value={name} placeholder="Name" type="text" required/>
            <Input onChange={onChange} name="email" value={email}  placeholder="Email" type="email" required/>
            <Input onChange={onChange} 
            value={password}
            name="password"
            placeholder="Password"
            type="password"
            required
            />
            <Input type="submit" value ={isLoading ? "Loading..." :"Create Account"}/>

        </Form>
        {error !=="" ? <Error>{error}</Error>:null}
        <Switcher>
        Don't have account?{""}
        <Link to="/create-account"> Create one &rarr</Link>
        </Switcher>
        <GithubButton/>
    </Wrapper>
    )
}