import React, { useState } from 'react'

import gaming from '../images/gaming.ebaf2ffc84f4451d.jpg'
import logo from '../images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Joi from 'joi'
import axios from 'axios'


export default function Login(props: any) {
  // console.log(props);
  const detUserData = props.detUserData;

  interface userRegistration {
    email: string;
    password: string
  }

  const [user, setUser] = useState<userRegistration>({
    email: '',
    password: ''

  })
  const [validationError, setvVlidationError] = useState([]);
  const [apiMessage, setApiMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function getUserData(e: any) {
    setvVlidationError([])
    // console.log(e.target);
    // console.log(e.target.name);
    const myUser = { ...user };

    if (e.target.name == 'email') {
      myUser.email = e.target.value;


    }
    if (e.target.name == 'password') {
      myUser.password = e.target.value;


    }
    setUser(myUser)
    // console.log(user);


  }

  function ValidateUserData() {
    const Joi = require('joi');

    const schema = Joi.object({

      password: Joi.string()
        .pattern(new RegExp('^[A-Z].{7,15}$')),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })

    return schema.validate(user, { abortEarly: false })
  }

  async function regestrationData(e: any) {
    e.preventDefault()
    setLoading(true)

    const validateResponse = ValidateUserData();
    //  console.log(validateResponse);
    if (validateResponse.error) {
      setvVlidationError(validateResponse.error.details)
      // console.log(validationError);
      setLoading(false);

    }
    else {


      const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', user);
      setLoading(true)

      if (data.message === 'success') {
        localStorage.setItem('token', data.token);
        navigate('/');
        detUserData()
        setLoading(false);
      }
      else {

        setApiMessage(data.message);
        setLoading(false);

      }



    }


  }

  return <>
    <div className="row  py-4">
      <div className="col-md-6">
        <img src={gaming} alt="" className='w-100' />
      </div>
      <div className="col-md-6 form py-2 text-center ">

        <form onSubmit={regestrationData} className='  px-3'>
          <img src={logo} alt="" className='py-2 w-25' />
          <h4 className='py-3'>Log in to GameOver</h4>

          {apiMessage == 'success' ? '' : <small className='text-danger'> {apiMessage}</small>}


          {validationError.map((el, index) => <small className='text-danger d-block' key={index}> {el['message']}
          </small>)}

          <div className="row ps-2  border-bottom  ">



            <input type="email" name='email' id='email' placeholder='Email' onChange={getUserData} className=' form-control  bg-transparent form-bg-color border-0 my-2 ' />


            <input type="password" name='password' id='password' placeholder='password' onChange={getUserData} className=' form-control  bg-transparent form-bg-color border-0 my-2 ' />
            {loading ? <div className='btn my-3'><i className='fa-solid fa-spinner fa-spin  '> </i> </div> : <button type='submit' className='btn my-3 ' >Login</button>}


          </div>

        </form>

        <small >Not a member yet? <NavLink to={'/register'}>Register </NavLink></small>
      </div>



    </div>
  </>
}
