import React from 'react';

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
                    <div class="card-actions">
                        <button class="btn btn-primary mt-4">Buy Now</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Tool;