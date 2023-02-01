import React from 'react'
import SearchingBar from '../searchingbar/SearchingBar';
import songData from '../../hardCode';
import SongCard from '../songcards/SongCard'
import './home.css'

const Home = () => {
  const songElements = songData.map((song)=>{
    return <SongCard 
    key = {song.id}
    song = {song}
    />
  })
  

  
  return (
  <>
  <div className="div">
  <h1>Focus</h1>
  </div>
  < div className='trove__home'>
      
     {songElements}

    </div>
  </>
    
         

  )
}

export default Home