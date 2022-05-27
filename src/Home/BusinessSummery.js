import React from 'react';

const BusinessSummery = () => {
    return (
        <div>
            <h2 className='text-3xl font-semibold text-accent my-12 text-center '>Business Summary</h2>
            <div class="stats stats-vertical lg:stats-horizontal shadow gap-4 text-center ">
                <div class="card w-96 bg-base-100 shadow-xl stat text-center">
                    <img src="https://i.ibb.co/3WqxV5k/kisspng-computer-icons-customers-5b47770f9f5184-5962883815314101916526.png" alt="Customer" className='w-2/5 mx-auto pt-6' border="0" />
                    <div class="card-body">
                        <h2 class="card-title block"><div class="stat-title">served customers</div></h2>
                        <p> <div class="stat-value">500+</div></p>
                        <p>   <div class="stat-desc">↗︎ 500 (30%)</div></p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl stat">
                    <div class="card-body">
                        <img src="https://i.ibb.co/cD9QdRL/transparent-revenue-icon-accounting-icon-growth-icon-608bbaf8b1fc82-857724811619770104729.png" alt="Revenue" className='w-2/4 mx-auto' border="0" />
                        <h2 class="card-title block"> <div class="stat-title">Annual revenue</div></h2>
                        <p> <div class="stat-value">120+ Million</div></p>
                        <p>   <div class="stat-desc">↗︎ 120 (22%)</div></p>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl stat">
                    <div class="card-body">
                        <img src="https://i.ibb.co/3M4dTrd/transparent-engineering-icon-wrench-icon-tools-icon-5fda44beec4cb8-4563761116081399669679.png" alt="Tools" className='w-2/4 mx-auto' border="0" />
                        <h2 class="card-title block"> <div class="stat-title"> Total tools</div></h2>
                        <p>  <div class="stat-value">80+ Tools</div></p>
                        <p>   <div class="stat-desc">↗︎ 80 (14%)</div></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;