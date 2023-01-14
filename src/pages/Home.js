import React, {useState} from 'react'
import './Home.css'
import AuthModal from '../components/AuthModal.js'
import Nav from '../components/Nav.js'


const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp]  = useState(true)

    const authToken = false;
    const handleClick = () =>{
        console.log('clicked')
        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className = "overLay">
             <Nav 
             authToken={authToken} 
             setShowModal={setShowModal} 
             showModal={showModal}
             setIsSignUp={setIsSignUp}/>

                <div className='container1-11'>
                    <h1> Log-A-Lot</h1>
                    <h2> Track your amazing progress, today!</h2>
                    <button className='primaryButton' onClick={handleClick}>
                        {authToken ? 'Sign Out' : 'Create an Account'}
                    </button>

                    {showModal && (
                        <AuthModal setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp} />
                    )}
                </div>
        </div>
    )
}

export default Home