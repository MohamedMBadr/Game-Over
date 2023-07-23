
import React, { Children, useEffect, useState } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Games from './components/Games/Games';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './components/Login/Login';
import Platform from './components/Platform/Platform';
import Browser from './components/Platform/Browser';
import Register from './components/Register/Register';
import jwt_decode from "jwt-decode";
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import StorBy from './components/StorBy/StorBy';
import Categories from './components/Catogries/Categories';
import Zombie from './components/Catogries/Zombie';
import Shooter from './components/Catogries/Shooter';
import Fantasy from './components/Catogries/Fantasy';
import Action from './components/Catogries/Action';
import Flight from './components/Catogries/Flight';
import ActionRpg from './components/Catogries/ActionRpg';
import BattleRoyale from './components/Catogries/BattleRoyale';
import Racing from './components/Catogries/Racing';
import Social from './components/Catogries/Social';
import Sports from './components/Catogries/Sports';
import OpenWorld from './components/Catogries/OpenWorld';
import Details from './components/Details/Details';
import Pc from './components/Platform/PC';
import ReleaseDate from './components/StorBy/ReleaseDate';
import Relev from './components/StorBy/Relev';
import Alphabetical from './components/StorBy/Alphabetical';
import Popularity from './components/StorBy/Popularity';





function App() {

  interface user {
    age: Number;
    email: String;
    first_name: String;
    iat: Number;
    last_name: String;
    _id: String;

  }

  const [user, setUser] = useState<user | null>(null);

  const [selectedSub, setselectedSub] = useState<string | null>('')



  useEffect(() => {

    const tokenData = localStorage.getItem('token');


    if (tokenData != null) {

      const userDAta: user = jwt_decode(tokenData)
      setUser(userDAta)
    }
    else {



    }

  }

    , [])

  function getSelectedNav() {
    const selectedSubtype = sessionStorage.getItem('selected Sub type');
    setselectedSub(selectedSubtype);

  }
  function detUserData() {
    // console.log('det user data ');
    const tokenData = localStorage.getItem('token');


    if (tokenData != null) {

      const userDAta: user = jwt_decode(tokenData)
      setUser(userDAta);

    }
    else {
      setUser(null);



    }


  }

  function logOut() {
    localStorage.removeItem('token');
    setUser(null);


  }


  let routes = createHashRouter ([{
    path: '/', element: < Layout userData={user} logOut={logOut} getSelectedNav={getSelectedNav} />, children: [
      { path: '/', element: < Home userData={user} /> },
      { path: 'games', element: <ProtectedRoute>< Games /></ProtectedRoute> },
      {
        path: 'games/storBy', element: <ProtectedRoute><StorBy /></ProtectedRoute>, children: [
          { path: 'Popularity', element: <ProtectedRoute>< Popularity /></ProtectedRoute> },
          { path: 'Alphabetical', element: <ProtectedRoute>< Alphabetical /></ProtectedRoute> },
          { path: 'relevance', element: <ProtectedRoute>< Relev /></ProtectedRoute> },
          { path: 'ReleaseDate', element: <ProtectedRoute>< ReleaseDate /></ProtectedRoute> },
        ]
      },
      {
        path: 'games/catogries', element: <ProtectedRoute>< Categories /></ProtectedRoute>, children: [
          { path: 'Action', element: <ProtectedRoute>< Action /></ProtectedRoute> },
          { path: 'ActionRpg', element: <ProtectedRoute>< ActionRpg /></ProtectedRoute> },
          { path: 'BattleRoyale', element: <ProtectedRoute>< BattleRoyale /></ProtectedRoute> },
          { path: 'Fantasy', element: <ProtectedRoute>< Fantasy /></ProtectedRoute> },
          { path: 'Flight', element: <ProtectedRoute>< Flight /></ProtectedRoute> },
          { path: 'OpenWorld', element: <ProtectedRoute>< OpenWorld /></ProtectedRoute> },
          { path: 'Racing', element: <ProtectedRoute>< Racing /></ProtectedRoute> },
          { path: 'Shooter', element: <ProtectedRoute>< Shooter /></ProtectedRoute> },
          { path: 'Social', element: <ProtectedRoute>< Social /></ProtectedRoute> },
          { path: 'Sports', element: <ProtectedRoute>< Sports /></ProtectedRoute> },
          { path: 'Zombie', element: <ProtectedRoute>< Zombie /></ProtectedRoute> },


        ]
      },
      {
        path: 'games/platform', element: <ProtectedRoute>< Platform selectedSubtype={selectedSub} /></ProtectedRoute>, children: [
          { path: 'pc', element: <ProtectedRoute>< Pc /></ProtectedRoute> },
          { path: 'browser', element: <ProtectedRoute>< Browser /></ProtectedRoute> },

        ]
      },
      { path: 'details', element: <ProtectedRoute>< Details /></ProtectedRoute> },

      { path: 'register', element: <Register /> },
      { path: 'login', element: < Login detUserData={detUserData} /> },
      { path: '*', element: <Home /> },








    ]
  }
  ])

  return (<>
    <RouterProvider router={routes} />
  </>

  );
}

export default App;
