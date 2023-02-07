import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Header} from "./containers/index";
import {MusicBar,Sidebar } from "./components/index.js";
import { Upload,Home,MyPlayList,Stream,Top100,Login, Signup, Admin, Search} from './pages'
import {User, Song, Artist,Album,Playlist,Collection,TasteProfile,} from './components/admin/index';
import "bootstrap/dist/css/bootstrap.min.css";
import './app.css';

export default function App () {

    return(
      
      <BrowserRouter>      
            <Sidebar/>
            
            <Header />
                <div className='trove__website'>
                  <Routes  >
                    <Route path="/" element={<Home/>}></Route>
                    <Route path='/stream' element={<Stream />}></Route>
                    <Route path="/myplaylist" element={<MyPlayList/>}></Route>
                    <Route path="/top100" element={<Top100/>}></Route>
                    <Route path='/search' element = {<Search/>}></Route>
                    <Route path='/upload' element = {<Upload/>}></Route>

                    
                    <Route path="/login"  element= {<Login/>}></Route>
                    <Route path="/signup"  element= {<Signup/>}></Route>
                   

                    //admin site
                    <Route path='/admin' element = {<Admin/>}></Route>
                    <Route path='/admin/user-management' element = {<User/>}></Route>
                    <Route path='/admin/album-management' element = {<Album/>}></Route>
                    <Route path='/admin/artist-management' element = {<Artist/>}></Route>
                    <Route path='/admin/collection-management' element = {<Collection/>}></Route>
                    <Route path='/admin/song-management' element = {<Song/>}></Route>
                    <Route path='/admin/playlist-management' element = {<Playlist/>}></Route>
                    <Route path='/admin/tastep-management' element = {<TasteProfile/>}></Route>
                </Routes> 
              </div>      
            <MusicBar/>
          </BrowserRouter>
     
      
    )
  }