import { useEffect, useState } from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import styled from 'styled-components'
import Layout from './component/Layout'
import LayoutSWE from './component/LayoutSWE'
import Home from './router/Home'
import Olympic_tournament from './router/Olympic_tournament'
import Olympic_main from './router/Olympic_main'
import Profile from './router/Profile'
import Login from './router/login'
import CreateAccount from './router/create-account'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import LoadingScreen from './component/loading-screen'
import { auth } from './firebase'
import ProtectedRoute from './component/protected-route';

//추가
import Olympic_soeun from './router/Olympic-soeun'
import Soeun from './router/Soeun'
import Olympic_search from './router/Olympic-Search'


const router =createBrowserRouter([
  {
  path:"/",
  element:<ProtectedRoute>
  < LayoutSWE />
  </ProtectedRoute>,
  children:[
    {
    path:"",
    element:<Olympic_main/>
    //element:<Home/>
 
    },
    {
      path:"profile",
      element:<Profile/>

    },
    {
      path:"/olympic_tournament",
      element:<Olympic_tournament/>
    
    },
    {
      path:"/olympic_soeun",
      element:<Olympic_soeun/>
    },
    {
      path:"/olympic",
      element:<Soeun/>
    }
    ,
    {
      path:"/olympic_search",
      element:<Olympic_search/>
    }
  ]
},
{
  path:"/login",
  element:<Login/>

},
{
  path:"/create-account",
  element:<CreateAccount/>
},




]);

const GlobalStyles =createGlobalStyle`
${reset};
*{
  box-sizing:border-box;
}
body{
  //background-color:black;
  color:white;
  //font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}
`;

const Wrapper =styled.div`
height: 100vh;
display: flex;
justify-content:center;
`

function App() {
  const [isLoading,setIsLoading]=useState(true);
  const init = async ()=>{
    await auth.authStateReady();
    setTimeout(()=>setIsLoading(false),200)

  };
  useEffect(()=>{
    init();

  }); 

  return (
    <>
    <Wrapper>
    <GlobalStyles/>
    {isLoading ?<LoadingScreen/> : <RouterProvider router={router}/>}
    </Wrapper>
    </>
  );

  
}

export default App
