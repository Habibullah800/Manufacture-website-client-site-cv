import React from 'react';
import PrimaryBtn from '../Share/PrimaryBtn';
// import appoinment from '../../assets/images/appointment.png'

const ContractUs = () => {
    // const myStyle = {
    //     backgroundImage: `url(${appoinment})`,
    //     height: '490px'
    // }
    return (
        <div className='d-flex text-center mb-6 '
        // style={myStyle}
        >
            <div className='text-accent text-3xl mt-8 mb-4' ><h2 >Contract Us</h2></div>


            <div>
                <input type="text" placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs my-3 " />
            </div>

            <div>
                <input type="text" placeholder="Subjects" className="input input-bordered input-md w-full max-w-xs my-3" />
            </div>

            <div><textarea type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs my-3 h-24" />
            </div>
            <div>
                <PrimaryBtn> Submit </PrimaryBtn>
            </div>
        </div>
    );
};

export default ContractUs;