import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            rating: 5.0,
            pic: 'https://i.ibb.co/1m0Q4Jq/people1.png',
            region: 'California',
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic: 'https://i.ibb.co/hK9fNXv/people2.png',
            rating: 4.5,
            region: 'California',
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            pic: 'https://i.ibb.co/7y2pBxC/people3.png',
            rating: 4.8,
            region: 'California',
        }
    ]
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
        </div>
    );
};

export default Reviews;