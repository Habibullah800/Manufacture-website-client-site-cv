import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Register = () => {

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    const [error, setError] = useState([]);

    const register = event => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                verifyEmail();

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }
            )
    }
    const verifyEmail = () => {

        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log("Email verification sent!");

            });
    }

    return (
        <div className='register-container  text-center my-12'>
            <div className='border border-indigo-600 w-96 mx-auto rounded-md  p-6 w-5/12'>

                <h3 className='text-2xl my-6'>Please Register</h3>

                <form onSubmit={register}>
                    {/* <input type='text' name='name' placeholder='Your Name' required></input> */}
                    <Form.Group>
                        <input type='text' name='name' placeholder='Your Name' required class="input input-bordered w-full max-w-xs" />

                    </Form.Group>
                    <Form.Group>
                        <input type='text' name='email' placeholder='Your Email' required class="input input-bordered w-full max-w-xs mt-3" />

                    </Form.Group>
                    <Form.Group>
                        <input type='password' name='password' placeholder='Password' required class="input input-bordered w-full max-w-xs mt-3" />
                        <br></br>
                    </Form.Group>

                    <input className='btn btn-primary mt-5' type='submit' value='Register'></input>
                </form>
                <br></br>
                <p className='text-danger'><small> {error}</small>
                </p>
                <p className='mt-4'> Already have an account ? <br></br>
                    <Link to='/login' className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}>Click here <span className='font-bold'>Login</span></Link>
                </p>

            </div>
        </div>
    );
};

export default Register;