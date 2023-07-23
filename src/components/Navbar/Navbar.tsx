
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import logo from '../images/logo.png'



export default function Navbar(props: any) {
  const user = props.userData;
  const logOut = props.logOut;
  const getSelectedNav = props.getSelectedNav;




  function subTargetGet(e: any) {
    const selectedSub = e.target.innerHTML;
    sessionStorage.setItem('selected Sub type', selectedSub);

    getSelectedNav()


  }

  return (<>
    <nav className="navbar navbar-expand-lg bg-transparent navbar-dark shadow shadow-sm">
       {user ?    <div className="container-fluid  ">


        <NavLink className="navbar-brand ps-lg-5 mx-5 nav-logo  " to={'/'}> <img src={logo} alt="logo" className='logo-img  ' /> Game Over</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse   " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to={'games'}>All</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Platform
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to={'games/platform/pc'} onClick={(e) => subTargetGet(e)}  >pc</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/platform/browser'} onClick={(e) => subTargetGet(e)}  >browser</NavLink> </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                sort-by
              </a>


              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to={'games/storBy/ReleaseDate'} onClick={(e) => subTargetGet(e)}  >release-date</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/storBy/Popularity'} onClick={(e) => subTargetGet(e)}  >popularity</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/storBy/Alphabetical'} onClick={(e) => subTargetGet(e)}  >alphabetical</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/storBy/relevance'} onClick={(e) => subTargetGet(e)}  >relevance</NavLink> </li>


              </ul>
            </li>
            <li className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                catogries
              </a>


              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to={'games/catogries/Racing'} onClick={(e) => subTargetGet(e)}  >Racing</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Sports'} onClick={(e) => subTargetGet(e)}  >Sports</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Social'} onClick={(e) => subTargetGet(e)}  >social</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Shooter'} onClick={(e) => subTargetGet(e)}  >Shooter</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/OpenWorld'} onClick={(e) => subTargetGet(e)}  >open-world</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Zombie'} onClick={(e) => subTargetGet(e)}  >zombie</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Fantasy'} onClick={(e) => subTargetGet(e)}  >fantasy</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Action'} onClick={(e) => subTargetGet(e)}  >action </NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Flight'} onClick={(e) => subTargetGet(e)}  >flight</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/ActionRpg'} onClick={(e) => subTargetGet(e)}  >action-rpg</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/BattleRoyale'} onClick={(e) => subTargetGet(e)}  >battle-royale</NavLink> </li>




              </ul>
            </li>



          </ul>
          <NavLink to={'/login'} className='me-lg-5 logout  rounded-3 p-2 ' onClick={logOut}> Log OUt</NavLink >

        </div>

      </div>: <div className="container-fluid  ">


        <NavLink className="navbar-brand ps-lg-5 mx-5 nav-logo  " to={'/'}> <img src={logo} alt="logo" className='logo-img  ' /> Game Over</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <div className='d-flex justify-content-end justify-content-sm-center me-5 align-items-center pg-info'>
          <NavLink to={'login'} className='nav-link px-3 '> Login</NavLink>
          <NavLink to={'register'} className='nav-link  me-lg-5 logout  rounded-3 p-2 '> Join free</NavLink>
          </div>

        </div>

      </div>} 

      {/* <div className="container-fluid  ">


        <NavLink className="navbar-brand ps-lg-5 mx-5 nav-logo  " to={'/'}> <img src={logo} alt="logo" className='logo-img  ' /> Game Over</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse   " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to={'games'}>All</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Platform
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to={'games/platform/pc'} onClick={(e) => subTargetGet(e)}  >pc</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/platform/browser'} onClick={(e) => subTargetGet(e)}  >browser</NavLink> </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                sort-by
              </a>


              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to={'games/storBy/ReleaseDate'} onClick={(e) => subTargetGet(e)}  >release-date</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/storBy/Popularity'} onClick={(e) => subTargetGet(e)}  >popularity</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/storBy/Alphabetical'} onClick={(e) => subTargetGet(e)}  >alphabetical</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/storBy/relevance'} onClick={(e) => subTargetGet(e)}  >relevance</NavLink> </li>


              </ul>
            </li>
            <li className="nav-item dropdown">
              <a  className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                catogries
              </a>


              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to={'games/catogries/Racing'} onClick={(e) => subTargetGet(e)}  >Racing</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Sports'} onClick={(e) => subTargetGet(e)}  >Sports</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Social'} onClick={(e) => subTargetGet(e)}  >social</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Shooter'} onClick={(e) => subTargetGet(e)}  >Shooter</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/OpenWorld'} onClick={(e) => subTargetGet(e)}  >open-world</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Zombie'} onClick={(e) => subTargetGet(e)}  >zombie</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Fantasy'} onClick={(e) => subTargetGet(e)}  >fantasy</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Action'} onClick={(e) => subTargetGet(e)}  >action </NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/Flight'} onClick={(e) => subTargetGet(e)}  >flight</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/ActionRpg'} onClick={(e) => subTargetGet(e)}  >action-rpg</NavLink> </li>
                <li><NavLink className="dropdown-item" to={'games/catogries/BattleRoyale'} onClick={(e) => subTargetGet(e)}  >battle-royale</NavLink> </li>




              </ul>
            </li>



          </ul>
          <NavLink to={'/login'} className='me-lg-5 logout  rounded-3 p-2 ' onClick={logOut}> Log OUt</NavLink >

        </div>

      </div> */}
    </nav>



  </>

  )
}
