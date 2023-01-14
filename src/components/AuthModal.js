import React , { useState }  from 'react'
import './AuthModal.css'
import {SlClose} from 'react-icons/sl'

const AuthModal = ({setShowModal, setIsSignUp, isSignUp})  =>{
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
  
    console.log(email, password, confirmPassword)

    const handleClick = () =>{
        setShowModal(false)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        try{
            if(isSignUp && (password !== confirmPassword)){
                setError('Passwords have to match.')
            }
            console.log('make a post request to our database')
        }catch (error){
            console.log(error)
        }
    }

    return(
        <div className='auth-modal'>
            <div className="close-icon" onClick={handleClick}> <SlClose /></div>
            <h2>{isSignUp ? 'Create Account' : 'Sign In'}</h2>
            <p>My baby say she wanna dance with the ghost she wants to leave me ya </p>
            <form onSubmit={handleSubmit}>

                <input 
                type = 'email' 
                id='email' 
                name ='email' 
                placeholder='email' 
                required={true} 
                onChange={(e) => setEmail(e.target.value)} 
                />

                <input 
                type = 'password' 
                id='password' 
                name ='password' 
                placeholder='Password' 
                required={true} 
                onChange={(e) => setPassword(e.target.value)} 
                />

                {isSignUp && <input 
                type = 'password-check' 
                id= 'password-check' 
                name = 'password-check'  
                placeholder='Confirm Password' 
                required={true} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                />}

                <input className='secondary-button' type ="submit"/>
                <p>{error}</p>
            </form>
            <hr/>
        </div>
  )
}

export default AuthModal