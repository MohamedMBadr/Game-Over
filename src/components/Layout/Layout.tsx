import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'



export default function Layout(props: any) {
  const [query, setQuery] = useState<any>('');
const[ height, setHeight]=useState(0);

  const userData = props.userData;
  const logOut = props.logOut;
  const getSelectedNav=props.getSelectedNav;
function setScrllo() {
  window.scroll({
    top: 0,
    left: 100,
    behavior: 'smooth'
  });
  
  
}
  return <>
    <Navbar userData={userData} logOut={logOut} getSelectedNav={getSelectedNav} />


    <div className='container'>
      <Outlet  />
      <button className='btn scrloo' onClick={()=> setScrllo()}> <i className="fa-solid fa-jet-fighter-up p-2 rounded-circle"></i></button>
    </div>

  </>

}
