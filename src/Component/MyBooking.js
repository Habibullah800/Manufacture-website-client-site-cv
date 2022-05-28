import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase';

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);
    const { user, } = useFirebase()
    const navigate = useNavigate()

    useEffect(() => {

        if (user) {
            fetch(`https://hidden-plateau-53735.herokuapp.com/booking?tool=${user.email}`, {
                method: 'GET',

            })
                .then(res => res.json())
                .then(data => {
                    setBookings(data);
                });
        }

    }, [user])

    return (
        <div>
            <h2 className='px-3 my-3 text-xl'>My total Appoinment: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full border-2 border-indigo-200">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((a, index) =>
                                <tr key={index}>
                                    <td >{index + 1}</td>
                                    <td>{a.tool
                                    }</td>
                                    <td>{a.userEmail}</td>
                                    <td>{a.userName}</td>
                                    <td>{a.quantity}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyBooking;