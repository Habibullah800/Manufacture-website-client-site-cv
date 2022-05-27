import React from 'react';
import useFirebase from '../Hooks/UseFirebase';

const AllTool = ({ tool }) => {
    const { name, img, shortDescription, quantity, availableQuantity, MinimumQuantity, price } = tool;
    const { user, } = useFirebase()

    return (
        <div >

            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl w-72 border border-indigo-600" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Name: {name}</h2>

                    <p>Available Quantity: {availableQuantity}</p>
                    <p>Minimum Order Quantity {MinimumQuantity}</p>
                    <h2>Price: {price} Tk</h2>
                    <h2>Selected Quantity: {quantity}</h2>
                    <p>Add Quantity:
                        <button class="btn btn-accent btn-xs ml-2"> + </button>
                    </p>
                    <button class="btn btn-active btn-accent">Buy Now</button>



                    {/* {
                        user?.uid
                            ?
                            <div >
                                <Link className=' ' to='/placeOrder'> <PrimaryBtn> Buy now</PrimaryBtn></Link>
                            </div>
                            :
                            <Link className=' ' to='/login'> <PrimaryBtn> Buy now</PrimaryBtn></Link>

                    } */}



                </div>
            </div>



        </div>
    );
};

export default AllTool;