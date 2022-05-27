import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div className="card  lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body h-64">
                    <p>{review.description}</p>
                    <div className=" flex items-center mt-4 ">
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-8">
                                <img src={review.img} alt="pic" />
                            </div>
                        </div>
                        <div>
                            <h4 className='text-xl'>{review.name} </h4>
                            <h4>{review.region} </h4>
                            <span>Rating: {review.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;