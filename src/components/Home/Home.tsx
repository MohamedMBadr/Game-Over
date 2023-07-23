import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GamesData } from '../Interface/Interface'




export default function Home(props: any) {

  const user = props.userData;

  const [games, setGames] = useState([]);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();


  function getId(ID: number) {
    // console.log(ID);
    sessionStorage.setItem('gameID', JSON.stringify(ID))
    user ? navigate('/details') : navigate('/login');
    ;

  }



  useEffect(() => {
    setNumber(Math.floor(Math.random() * 80));


    getApiData()

    setLoading(true);


  }, [])

  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: { 'sort-by': 'popularity' },
    headers: {
      'X-RapidAPI-Key': '0fae623012msh60afa1024bf4708p18fd17jsn57dc5a1fd995',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }

  };
  async function getApiData() {
    const { data } = await axios.request(options);
    const gamedResponse = data;
    setGames(gamedResponse)
    setLoading(false)

  }



  return (<>
    <div className='home-container'>
      <h2 className='pt-5 pb-2 fa-3x '>Find & track the best <span className='text-info '>free-to-play  </span>games!</h2>
      <p className='text-muted  pb-2  fs-3'> Track what you've played and search for what to play next! Plus get free premium loot!</p>
      <button className='btn mb-5  ' onClick={() => navigate('/games')}>Browse games </button>
    </div>


    <div className='my-4'>
      <div className='d-flex '>[]
        <i className="fas fa-robot mr-2 fa-2x"></i>
        <h2>Personalized Recommendations</h2>
      </div>

      <div className='container-fluid'>
        <div className="row  g-3 gy-4 mt-3">

          {games.slice(0, 3).map((el: GamesData) => <div className="col-md-4 " key={el?.id} onClick={() => getId(el.id)} >
            <img src={el?.thumbnail} alt={el?.title} className='w-100' onClick={() => getId(el.id)} />
            <div className='caerd p-2 ' >
              <div className='d-flex justify-content-between'>
                {el.title.length >= 15 ? <h4 className='fw-bold py-1 ' onClick={() => getId(el.id)}>{el?.title.slice(0, 15) + '...'}</h4> : <h4 onClick={() => getId(el.id)} className='fw-bold py-1 '>{el?.title}</h4>}

                <button className=' btn bg-info ' onClick={() => getId(el.id)}> free</button>
              </div>


              <p onClick={() => getId(el.id)}>{el?.short_description.slice(0, 30)}</p>
              <div className='d-flex justify-content-between '>
                <i className="fa-solid fa-plus p-2 border-1 rounded-2 bg-gradient" onClick={() => getId(el.id)} ></i>
                <div className=' rounded-3 py-1 px-2 bg-gradient' onClick={() => getId(el.id)}>{el.genre}</div>
                {el.platform == "PC (Windows)" ? <i className="fa-brands fa-windows p-2 " onClick={() => getId(el.id)}></i> : <i className="fa-solid p-2 fa-window-maximize" onClick={() => getId(el.id)}> </i>}
              </div>
            </div>
          </div>)}


        </div>

      </div>
    </div>
  </>
  )
}
