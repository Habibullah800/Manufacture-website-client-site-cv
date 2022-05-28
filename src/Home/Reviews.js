import React, { useEffect, useState } from 'react';
import Review from './Review';
import PrimaryBtn from '../Share/PrimaryBtn';
import useFirebase from '../Hooks/UseFirebase';
import { Link } from 'react-router-dom';


const Reviews = () => {
    const { user, } = useFirebase()
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://hidden-plateau-53735.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    })

    return (
        <div className='my-24'>
            <h2 className='text-3xl  m-6 text-center text-accent'>Reviews</h2>
            <h2 className='text-3xl  m-6 text-center text-accent'>What is our customer say</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div>
                {
                    user?.uid
                        ?
                        <div className=' text-center mt-12'>
                            <Link className=' ' to='/addReview'> <PrimaryBtn> Add a Review</PrimaryBtn></Link>
                        </div>
                        :
                        <div className=' text-center mt-12'>
                            <Link className=' ' to='/login'> <PrimaryBtn> Add a Review</PrimaryBtn></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Reviews;