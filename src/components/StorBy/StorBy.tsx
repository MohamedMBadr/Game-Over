

import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom'

import { GamesData } from '../Interface/Interface'




export default function StorBy(props: any) {



  // const [games, setGames] = useState([]);
  // const [number, setNumber] = useState(20);
  // const [loading, setLoading] = useState(false)
  // const navigate = useNavigate();
  // function getId(ID: number) {
  //   // console.log(ID);
  //   sessionStorage.setItem('gameID',JSON.stringify(ID))

  //   navigate('/details')
  // }

  // useEffect(() => {
  //   getApiData()

  // }, [])


  // const selectedSubtype = sessionStorage.getItem('selected Sub type');
  // // console.log(selectedSubtype);

  // const options = {
  //   method: 'GET',
  //   url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  //   params: { 'sort-by': selectedSubtype },
  //   headers: {
  //     'X-RapidAPI-Key': '0fae623012msh60afa1024bf4708p18fd17jsn57dc5a1fd995',
  //     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  //   }

  // };
  // async function getApiData() {
  //   const { data } = await axios.request(options);
  //   setLoading(true);

  //   const gamedResponse = data;

  //   setGames(gamedResponse)
  //   setLoading(false)

  // }

  return (<>
 <Outlet/>
  </>
  )
}


