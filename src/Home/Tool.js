import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase';
import useToken from '../Hooks/useToken';
import PrimaryBtn from '../Share/PrimaryBtn';

const Tool = ({ tool }) => {
    const { name, img, shortDescription, price } = tool;
    const { user, } = useFirebase()
    const [token] = useToken(user);


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
                    {
                        token && user?.uid
                            ?
                            <div >
                                <Link className=' ' to='/allTools'> <PrimaryBtn> Details</PrimaryBtn></Link>
                            </div>
                            :
                            <Link className=' ' to='/login'> <PrimaryBtn> Details</PrimaryBtn></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Tool;