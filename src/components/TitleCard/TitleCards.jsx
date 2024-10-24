import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'




const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmQzZjE5YjY5NzU1ZWVjMTQxZDQ5NTJhYmM3YTQ4MCIsIm5iZiI6MTcxOTYxOTgxOC41OTYwNjEsInN1YiI6IjY2N2Y0ZWI5ZDdhYmM5YTY4ZWZlZGJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ylbytJ56Y1zIanDp6x65-v956HskqGYruAL9zPDYtg'
    }
  };
 



  const handleWheel = (event)=>{ 
  event.preventDefault;
  cardsRef.current.scrollLeft += event.deltay;
  }

  useEffect(()=>{ 

     
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));


  cardsRef.current.addEventListener('wheel', handleWheel);
  },[])


  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}> 
        {apiData.map((card, index)=>{ 
          return <Link to={`/player/${card.id}`} className="card" key={index}> 
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
