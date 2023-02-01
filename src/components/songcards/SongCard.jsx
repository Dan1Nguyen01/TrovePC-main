import React from 'react'
import './songcard.css'

const SongCard = (props) => {
    
  return (
   
      <>
        
            <div className="trove__scard">
              <div className="img-wrap">
                <img src={`../songImgs/${props.song.img}`}  alt=""  className='trove__song-music'/>
              </div>
                
              <h5 className='trove__scard-title'>{props.song.name}</h5>
              <p className='trove__scard-text'>{props.song.artist}</p>

            </div>
        
           
        
           
            </>
  
  )
}

export default SongCard