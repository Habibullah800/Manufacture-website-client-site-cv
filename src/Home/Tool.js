import React from 'react';
import PrimaryBtn from '../Share/PrimaryBtn';

const Tool = ({ tool }) => {
    const { name, img, shortDescription, quantity, availableQuantity, MinimumQuantity, price } = tool;
    return (
        <div >

            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl w-72 border border-indigo-600" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Name: {name}</h2>
                    <p>Description: {shortDescription}</p>
                    <h2>Price: {price} Tk</h2>
                    <div class="card-actions mt-4">
                        <PrimaryBtn> Buy now</PrimaryBtn>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Tool;