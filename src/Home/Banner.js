import React from 'react';
import PrimaryBtn from '../Share/PrimaryBtn';

const Banner = () => {
    return (
        <>
            <div className='bg-no-repeat bg-center'
                style={{
                    background: "url(" + "https://i.ibb.co/G3Cwz1x/Untitled-design-10.png" + ")",
                    backgroundSize: 'cover',
                    overflow: 'hidden',
                }}
                class="hero min-h-screen bg-base-100 ">
                <div class="hero-content flex-col lg:flex-row-reverse m-0 lg:m-4 mr-0 lg:mr-12">
                    <img src="https://i.ibb.co/kJ3gGc7/kisspng-construction-worker-construction-foreman-architect-gkb-construction-gkb-construction-llp-jai.png" class="lg:max-w-lg rounded-lg shadow-2xl px-6 pt-2 object-fill" alt='banner' />
                    <div className='px-6'>
                        <h1 class="text-4xl font-bold text-accent mt-16 lg:mt-2">Work & build smarter with Tools plus!</h1>
                        <p class="py-6  text-sm lg:text-lg"><span className='font-bold'>Tools plus</span> is best differentiated from alternative solutions by its concurrent mastery of complexity in manufacturing operations. This simultaneously offers you the advantages of capability and simplicity to overcome ANY manufacturing management challenge. Following is an abbreviated list of manufacturing related features provided by <span className='font-bold'>Tools plus</span>.</p>
                        <div className='mx-auto text-center block my-4 lg:my-2'>
                            <PrimaryBtn> Get Started</PrimaryBtn>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
};

export default Banner;