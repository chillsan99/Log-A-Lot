import React from 'react'
import './Nav.css'

import {BsFillJournalBookmarkFill} from 'react-icons/bs'

const Nav = ({authToken, setShowModal, showModal, setIsSignUp}) =>{
  
  
  const handleClick = () =>{
    setShowModal(true)
    setIsSignUp(false)
  }

  return (
    <nav>
      <div className="logo-container">
        <span className='logo'><BsFillJournalBookmarkFill /></span>
      </div>

      {!authToken && <button 
      className='nav-button' 
      onClick={handleClick}
      disabled = {showModal}> Log in </button>}
    </nav>
  )
}

export default Nav