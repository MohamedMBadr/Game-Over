import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';


import jwtDecode from 'jwt-decode';

type ProtectedProps = {
  Children: React.ComponentType
}

export default function ProtectedRoute(props: any) {


  // const user = props.user;
  // const Children = props.children;
  const userToken = localStorage.getItem('token');
  if (userToken === null) {
      return <Navigate to={'/login'} />
    // return props.children
   


  }
  else {
    return props.children

  }




}
