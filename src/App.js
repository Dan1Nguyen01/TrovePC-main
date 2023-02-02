import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import { Header,Footer } from "./containers/Index";
import { Upload,Home,MyPlayList,Stream,Top100,Login, Signup,MusicBar,Sidebar, Admin, Search } from "./components/index.js";
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'



export default function App () {

    return(
 
      <div className="gradient__bg">
      
          
      <BrowserRouter>      
            <Sidebar/>
            <Header />
                <div className='trove__website'>
                  <Routes  >
                    <Route path="/" element={<Home/>}></Route>
                    <Route path='/stream' element={<Stream />}></Route>
                    <Route path="/myplaylist" element={<MyPlayList/>}></Route>
                    <Route path="/top100" element={<Top100/>}></Route>
                    <Route path="/login"  element= {<Login/>}></Route>
                    <Route path="/signup"  element= {<Signup/>}></Route>
                    <Route path='/search' element = {<Search/>}></Route>
                    <Route path='/upload' element = {<Upload/>}></Route>
                    <Route path='/admin' element = {<Admin/>}></Route>
                </Routes> 
              </div>
            <MusicBar/>
          </BrowserRouter>
      </div>
   
      
    )
  }