


import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

import { GamesData } from '../Interface/Interface'




export default function Categories() {




  return (<>
  <Outlet/>
    {/* {loading == true ? [<div className='d-flex justify-content-center align-items-center vh-100 '><div className="lds-ripple"><div></div><div></div></div></div>] : <div className="row  g-3 gy-4 mt-3">

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
      <button className=' p-2 rounded-3 mb-5  w-25' onClick={() => setNumber(number + 20)}>more games <i className="fa-solid fa-arrow-right"></i></button>


    </div>} */}
  </>
  )
}


