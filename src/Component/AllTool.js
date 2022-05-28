import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast, } from 'react-toastify';
import useFirebase from '../Hooks/UseFirebase';

const AllTool = ({ tool }) => {
    const navigate = useNavigate();
    const { name, img, availableQuantity, MinimumQuantity, price } = tool;
    const { user, } = useFirebase()
    console.log(name);


    const onSubmit = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value
        console.log(quantity);

        const booking = {
            tool: name,
            userEmail: user.email,
            userName: user.displayName,
            price: price,
            quantity: quantity,
        }

        fetch('https://hidden-plateau-53735.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.sucess) {
                    toast(`${name}, This tools booking Sucessfull `)
                }
                else {
                    toast.error('Please, Try again')
                }

            })


        if (quantity > availableQuantity) {
            alert('We do not have so many products, Reduce the amount')

        }

        if (MinimumQuantity > quantity) {
            alert('The amount has become much less, Increase the Quantity')

        }
        alert('Product added Sucessfully')

    }

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
                    <form onSubmit={onSubmit}>
                        <Form.Group>
                            <input name='quantity' type="text" placeholder="Order Quantity" class="input input-bordered input-xs w-3/4 max-w-xs" />
                        </Form.Group>
                        <input className='btn btn-primary mt-5' type='submit' value='Purchase'></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AllTool;