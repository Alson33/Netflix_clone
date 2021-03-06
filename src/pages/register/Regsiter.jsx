import { useRef, useState } from 'react'
import './register.scss'

const Regsiter = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
    
    return (
        <div className="regsiter">
            <div className="top">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                <button className="loginButton">Sign In</button>
            </div>
            <div className="container">
                <h1>Unlimited movies, Tv Shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="Email Address" ref={emailRef} />
                            <button className="registerButton" onClick={handleStart}>Get Started</button>
                        </div>
                    ) : (
                        <div className="input">
                            <input type="password" placeholder="Password" ref={passwordRef} />
                            <button className="registerButton" onClick={handleFinish}>Start</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Regsiter
