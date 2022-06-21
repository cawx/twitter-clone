import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from "./Footer"
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'

function Landing() {
  return (
    <>
        <div>
            <Row id='landing'>
                <Col sm={7} className='landing-1'>
                    <svg viewBox='0 0 24 24' id='twitter-icon'>
                        <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" ></path>
                    </svg>
                </Col>
                <Col className='landing-2'>
                    <div>
                        <svg viewBox='0 0 24 24'  id='twitter-icon2'>
                            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
                        </svg>
                        <h1 id='landing-title-1'>Happening now</h1>
                        <h2 id='landing-title-2'>Join Twitter today.</h2>
                        <Button id='landing-signup'><FcGoogle id='icon' />Sign up with Google</Button><br />
                        <Button id='landing-signup'><BsApple id='icon' />Sign up with Apple</Button>
                        <p id='landing-or'>or</p>        
                        <Button id='landing-signup2'>Sign up with phone or email</Button>
                        <p id='text-pp'>By signing up, you agree to the <a href='/'>Terms of Service</a> and <a href='/'>Privacy Policy</a>, including <a href='/'>Cookie Use.</a></p>
                        <h5 id='landing-title-3'>Already have an account?</h5>
                        <a href='/login'><Button id='landing-sign-in'>Sign In</Button></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col><Footer /></Col>
            </Row>
        </div>
    </>
  )
}

export default Landing