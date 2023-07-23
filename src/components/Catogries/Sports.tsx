
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GamesData } from '../Interface/Interface'




export default function Sports(props: any) {



  const [games, setGames] = useState([]);
  const [number, setNumber] = useState(20);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  function getId(ID: number) {
    // console.log(ID);
    sessionStorage.setItem('gameID', JSON.stringify(ID))

    navigate('/details')
  }
  useEffect(() => {
    getApiData()
    setLoading(true);

  }, [])


  const selectedSubtype = sessionStorage.getItem('selected Sub type');


  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: { 'category': selectedSubtype },
    headers: {
      'X-RapidAPI-Key': 'c1ae94f907mshf8257a1156eddc4p1bf39bjsnb29975388a0f',
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
    {loading == true ? [<div className='d-flex justify-content-center align-items-center vh-100 '><div className="lds-ripple"><div></div><div></div></div></div>] : <div className="row  g-3 gy-4 mt-3 pb-5">

      {games.slice(0, number).map((el: GamesData) => <div className="col-md-3  " onClick={() => getId(el.id)} key={el?.id}>
        <img src={el?.thumbnail} alt={el?.title} className='w-100' />
        <div className='caerd p-2 ' >
          <div className='d-flex justify-content-between'>
            {el.title.length >= 15 ? <h4 className='fw-bold py-1 '>{el?.title.slice(0, 15) + '...'}</h4> : <h4 className='fw-bold py-1 '>{el?.title}</h4>}

            <button className=' btn bg-info '> free</button>
          </div>


          <p>{el?.short_description.slice(0, 30)}</p>
          <div className='d-flex justify-content-between '>
            <i className="fa-solid fa-plus p-2 border-1 rounded-2 bg-gradient"></i>
            <div className=' rounded-3 py-1 px-2 bg-gradient'>{el.genre}</div>
            {el.platform == "PC (Windows)" ? <i className="fa-brands fa-windows p-2 "></i> : <i className="fa-solid p-2 fa-window-maximize"></i>}
          </div>
        </div>
      </div>)}
      {games.length <= number ? '' : <button className=' p-2 rounded-3 mb-5  w-25' onClick={() => setNumber(number + 20)}>more games <i className="fa-solid fa-arrow-right"></i></button>
        }


    </div>}
  </>
  )
}


