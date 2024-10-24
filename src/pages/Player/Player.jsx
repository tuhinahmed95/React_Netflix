import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useParams, useNavigate} from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({ 
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQzZjE5YjY5NzU1ZWVjMTQxZDQ5NTJhYmM3YTQ4MCIsIm5iZiI6MTcxOTYxOTgxOC41OTYwNjEsInN1YiI6IjY2N2Y0ZWI5ZDdhYmM5YTY4ZWZlZGJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ylbytJ56Y1zIanDp6x65-v956HskqGYruAL9zPDYtg'
    }
  };

  useEffect(()=>{ 

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])
  
 


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`http://www.youtube.com/embed/${apiData.key}`} title='tutoria' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info"> 
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
