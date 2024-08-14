import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Login from './Login'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
const SignUp = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handlesubmit= async(e)=>{
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth,email,password);
            console.log('account created')
            setEmail('')
            setPassword('')
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='signup-container'>
        <form className="signup-form" onSubmit={handlesubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="email">
                Email : 
                <input type="text" value={email}
                onChange={(e)=>setEmail(e.target.value)}/>

            </label>
            <label htmlFor="password">
                Password : 
                <input type="password"  value={password}
                onChange={(e)=>setPassword(e.target.value)} />

            </label>
            <button type='submit'>Sign Up</button>
            <p>Already Register ? <Link to='/login'>Login</Link></p>
        </form>
      
    </div>
  )
}

export default SignUp
