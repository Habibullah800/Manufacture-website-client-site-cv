import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase';
import Footer from '../Share/Footer';

const AddReview = () => {

    const { user, } = useFirebase()

    const navigate = useNavigate();

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const address = event.target.address.value;
        const rating = event.target.rating.value;
        const description = event.target.description.value;
        const img = event.target.img.value;

        const review = { name, address, rating, description, img }
        console.log(review);

        //Send data to the review server

        fetch('https://hidden-plateau-53735.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log('sucess', data)
                alert('Review Added sucessfully');
                event.target.reset();
                navigate('/')
            })
    }

    return (
        <>
            <div className='text-center border border-indigo-600 w-96 mx-auto rounded-md my-6'>
                {
                    user?.uid
                        ?
                        <div className=' text-center '>
                            <h2 className='my-6 text-xl'>You can add review here</h2>

                            <Form onSubmit={handleAddUser}>
                                <Form.Group>
                                    <input name='name' required type="name" placeholder='Your Name' class="input input-bordered w-full max-w-xs mb-3" />
                                </Form.Group>

                                <Form.Group>
                                    <input name='address' required type="text" placeholder='Your Location' class="input input-bordered w-full max-w-xs mb-3" />
                                </Form.Group>

                                <Form.Group>
                                    <input name='rating' required type="text" placeholder='rating ex: 4.9' class="input input-bordered w-full max-w-xs mb-3" />

                                </Form.Group>

                                <Form.Group>
                                    <textarea name='description' required type="text" placeholder='Review Description' class="input input-bordered w-full max-w-xs mb-3" />

                                </Form.Group>

                                <Form.Group>
                                    <input name='img' required type="text" placeholder='Image url' class="input input-bordered w-full max-w-xs mb-3" />

                                </Form.Group>

                                <input className='btn btn-primary  mx-auto block' type='submit' value='Add' ></input>
                                <br></br>
                            </Form>
                        </div>
                        :
                        <div className=' text-center mt-12'>
                            if (!user) {
                                navigate('/')

                            }
                        </div>

                }

            </div>
            <div>
                <Footer></Footer>
            </div>

        </>
    );
};

export default AddReview;