import React, { useState } from 'react'

import gaming from '../images/gaming.ebaf2ffc84f4451d.jpg'
import logo from '../images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Joi from 'joi'
import axios from 'axios'


export default function Register(props: any) {


  interface userRegistration {
    name: string;
    // last_name: string;
    password: string;
    rePassword:string;
    email: string;
    phoneNumber: string

  }

  const [user, setUser] = useState<userRegistration>({
    name: '',
    email: '',
    password: '',
    rePassword:'',
    phoneNumber:'',

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

    if (e.target.name == 'name') {
      myUser.name = e.target.value;


    }
    
 
    if (e.target.name == 'Phone_number') {
      myUser.phoneNumber = e.target.value.toString();


    }
    if (e.target.name == 'email') {
      myUser.email = e.target.value;


    }


    if (e.target.name == 'password') {
      myUser.password = e.target.value;


    }
    if (e.target.name == 'rePassword') {
      myUser.rePassword = e.target.value;


    }
    setUser(myUser)
    // console.log(user);


  }

  function ValidateUserData() {
    const Joi = require('joi');

    const schema = Joi.object({
      name: Joi.string()
        .min(3)
        .max(70)
        .required(),
      password: Joi.string()
        .pattern(new RegExp('^[A-Z].{7,15}$')),
      
        

      rePassword: Joi.string()
        .pattern(new RegExp('^[A-Z].{7,15}$')),
        

      phoneNumber :Joi.string().pattern(new RegExp('^01[0125][0-9]{8}$')) ,

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

      // https://ecommerce.routemisr.com/api/v1/auth/signup

      const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', user);
      setLoading(true)

      if (data.message === 'success') {
        console.log('login');
        navigate('/login');
        setLoading(false);
      }
      else {

        setApiMessage(data.message);
        setLoading(false);

      }



    }


  }

  return <>
    <div className="row g-0  py-4 text-center ">
      <div className="col-md-6">
        <img src={gaming} alt="" className='w-100' />
      </div>
      <div className="col-md-6 form py-2 ">

        <form onSubmit={regestrationData} className='  px-3'>
          <h4 className='py-3'>Create My Account!</h4>
          {apiMessage == 'success' ? '' : <small className='text-danger'> {apiMessage}</small>}


          {validationError.map((el, index) => <small className='text-danger d-block' key={index}> {el['message']}
          </small>)}

          <div className="row ps-2  border-bottom  ">

            <input type="text" name='name' id='name' placeholder='Name' onChange={getUserData} className='  form-control names bg-transparent form-bg-color border-0 my-2 me-3' />
            <input type="number" name='Phone_number' id='Phone_number' placeholder='Phone number' onChange={getUserData} className='  form-control names bg-transparent form-bg-color border-0 my-2 ' />


            {/* <input type="text" name='last_name' id='last_name' placeholder='last Name' onChange={getUserData} className=' ms-3 form-control names bg-transparent form-bg-color border-0 my-2 ' /> */}


            <input type="email" name='email' id='email' placeholder='Email' onChange={getUserData} className=' form-control  bg-transparent form-bg-color border-0 my-2 ' />

         
            <input type="password" name='password' id='password' placeholder='password' onChange={getUserData} className=' form-control  bg-transparent form-bg-color border-0 my-2 ' />
            <input type="password" name='rePassword' id='rePassword' placeholder='Re-Password' onChange={getUserData} className=' form-control  bg-transparent form-bg-color border-0 my-2 ' />

            {loading ? <i className='fa-solid fa-spinner fa-spin btn my-3 '> </i> : <button type='submit' className='btn my-3 ' > Create new Account</button>}




            <small className='small'>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target={'_blank'} className='text-decoration-none'>Privacy Policy</a> and <a className='text-decoration-none' href="https://policies.google.com/terms" target={'_blank'}>Terms of Service</a> apply.</small>
          </div>

        </form>

        <small>Already a member?  <NavLink to={'/login'}>Login </NavLink></small>
      </div>


    </div>


  </>
}
