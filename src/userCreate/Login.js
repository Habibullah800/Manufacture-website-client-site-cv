import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../src/firebase.init';
import app from '../../src/firebase.init';
import useFirebase from '../../src/Hooks/UseFirebase';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const { user } = useFirebase()

    const [email, setEmail] = useState()

    const [error, setError] = useState([]);
    const [varification, setVerification] = useState('')

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        setEmail(emailRef.current.value);
        const password = passwordRef.current.value;


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);


            })
        // Email and password

    }



    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setVerification("Cheak your email !");

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });

    }

    const { signInWithGoogle } = useFirebase();



    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='login-container  text-center '>
            <div className='border border-indigo-600 w-96'>
                {/* <h3>{user?.uid ? 'Congrats' : "Please Login"}</h3> */}
                <h2 className='text-2xl text-accent'>Please login</h2>


                {
                    user?.uid
                        ?
                        <div className='mb-4' >
                            <Link className='btn btn-warning' to='/placeOrder'> Take our Treatment</Link>
                        </div>
                        :
                        <div>
                            <button className='btn btn-primary mt-12' onClick={signInWithGoogle}> Log-in with Google</button>
                            <br></br>
                            <br></br>
                        </div>
                }

                <h4>Or</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>

                        <input ref={emailRef} required type="text" placeholder='Your Email' class="input input-bordered w-full max-w-xs" />

                        <br></br>
                        <br></br>
                    </Form.Group>


                    <Form.Group>
                        <input ref={passwordRef} required type="password" placeholder='Password' class="input input-bordered w-full max-w-xs" />


                        <br></br>
                    </Form.Group>
                    <br></br>

                    <input className='btn btn-primary' type='submit' value='Login' ></input>
                    <br></br>
                    <p className='text-danger'><small> {error}</small>
                    </p>
                    <br></br>
                    <a onClick={handlePasswordReset} variant="link">Forget Password ?</a>
                    <br></br>
                    <p>{varification}</p>
                </Form>

                <p className='mt-4'> New to our Telemedicine Service ? <br></br>
                    <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Click here to Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;