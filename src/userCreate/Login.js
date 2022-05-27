import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../src/firebase.init';
import app from '../../src/firebase.init';
import useFirebase from '../../src/Hooks/UseFirebase';
import useToken from '../Hooks/useToken';
import Footer from '../Share/Footer';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const { user } = useFirebase()
    const [token] = useToken(user);


    const { signInWithGoogle } = useFirebase();



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
                console.log('hello', email)
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);


            })
        // Email and password


    }


    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])


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





    const navigateRegister = event => {
        navigate('/register')
    }


    return (
        <div>
            <div className='login-container  text-center my-12'>
                <div className='border border-indigo-600 w-96 mx-auto rounded-md  p-6 w-5/12'>
                    {/* <h3>{user?.uid ? 'Congrats' : "Please Login"}</h3> */}
                    <h2 className='text-2xl text-accent'>Please login</h2>

                    <div class="flex flex-col w-full border-opacity-50">
                        <div class="grid h-24 card bg-base-100 rounded-box place-items-center">
                            {
                                token && user?.uid
                                    ?
                                    <div className='mb-4' >
                                        if (user) {
                                            navigate('/')

                                        }

                                    </div>
                                    :
                                    <div>
                                        <button className='btn btn-primary mt-12' onClick={signInWithGoogle}> Log-in with Google</button>
                                        <br></br>
                                        <br></br>
                                    </div>
                            }
                        </div>
                        <div class="divider">OR</div>
                        <div class="grid h-46 card bg-base-100 rounded-box place-items-center">

                        </div>
                    </div>



                    <Form onSubmit={handleSubmit}>
                        <Form.Group>

                            <input ref={emailRef} required type="email" placeholder='Your Email' class="input input-bordered w-full max-w-xs" />

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


                    <p className='mt-4 text-lg'>
                        <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Click here to <span className='font-bold text-accent'>Register</span></Link>
                    </p>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;