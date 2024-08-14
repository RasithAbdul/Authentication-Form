import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import {auth} from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handlesubmit= async(e)=>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email,password);
            console.log('Login Successfully')
            setEmail('')
            setPassword('')
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='signup-container'>
        <form className="signup-form" onSubmit={handlesubmit}>
            <h2>Login </h2>
            <label htmlFor="email">
                Email : 
                <input type="text" onChange={(e)=>setEmail(e.target.value)}/>

            </label>
            <label htmlFor="password">
                Password : 
                <input type="password" onChange={(e)=>setPassword(e.target.value)} />

            </label>
            <button type='submit'>Login</button>
            <p>Don't have Account ? <Link to='/signup'>SignUp</Link></p>
        </form>
      
    </div>
  )
}

export default Login
