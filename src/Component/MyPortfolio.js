import React from 'react';
import Footer from '../Share/Footer';

const MyPortfolio = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse p-2 lg:p-24">
                    <img src="https://i.ibb.co/0yZXzQf/IMG-20201222-165438-removebg-preview-1-1.png" alt='Habibulah bahar' class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='p-12'>
                        <h1 class="text-3xl font-bold text-center">This is<br></br> <span className='text-accent'>Habibullah Bahar</span></h1>
                        <p class="py-6 font-medium">I am a junior full-stack developer and UI/UX designer with a lot of industry experience. My programming skills include HTML, CSS, Bootstrap, Tailwind, JavaScript, ReactJs, Typescript, NodeJS, Express, MongoDB, MySQL, Database, Firebase, WordPress, Github and other Framework. I write SEO-friendly clean code. I can additionally develop and integrate REST API. My Experience and specialty: **Frontend and Backend Development **Mern-stack Project **Landing page **using modern technologies **Fully Responsive Website creation. I have completed a lot of projects. I always fulfill my commitment.</p>
                        <button class="btn btn-secondary mx-auto block">My CV</button>
                    </div>
                </div>
            </div>

            <div className='px-1 lg:px-24'>
                <h2 className='text-center my-4 text-xl font-semibold'> Description</h2>
                <p>
                    I am a professional full-stack React js web application developer who has done multiple projects. With a lot of experience. I can do Full Stack development in React JS, and JAVASCRIPT with fully responsive UI and UX interfaces. <br></br>

                    <div className='grid grid-col-1 lg:grid-cols-2 py-12'>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">  <span className='text-xl pt-12 text-center mb-4'> Languages/Frameworks for a web application:</span></h2>
                                <p>

                                    <div className='pl-6 font-semibold'>
                                        HTML<br></br>
                                        CSS<br></br>
                                        Bootstrap<br></br>
                                        Tailwind<br></br>
                                        JavaScript (ES5, ES6)<br></br>
                                        React JS<br></br>
                                        Node JS<br></br>
                                        Express JS<br></br>
                                        MySql/MongoDB<br></br>
                                        Firebase Authentication<br></br>
                                        React js (Router, Hooks, Toastify, query)<br></br>
                                        REST API, SASS<br></br>
                                        React js Protected Route<br></br>
                                        GIT/GITHUB<br></br>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">   <span className='text-xl pt-12 text-center mb-4'>  Service Feature for a web application:</span><br></br></h2>
                                <p>
                                    <div className='pl-6 font-semibold'>
                                        Bug Fixing<br></br>
                                        API Integration<br></br>
                                        Website error fixing<br></br>
                                        Site deployment<br></br>
                                        JavaScript animation<br></br>
                                        SEO friendly website<br></br>
                                        Creating Dashboard<br></br>
                                        Payment Gateway<br></br>
                                        JWT web Token<br></br>
                                        Responsive web application<br></br>
                                        Javascript Hook<br></br>
                                        Business web application<br></br>
                                        Admin Panel<br></br>
                                        SignUp/Login Integration<br></br>
                                    </div>
                                </p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </p>
                <div class="card w-100 bg-base-100 shadow-xl mx-auto my-12 mb-16">
                    <div class="card-body text-center">
                        <h2 class="card-title block">Contract Info</h2>
                        <p>Name: Habibullah </p>
                        <p>Email: mdhabibullah800@gmail.com </p>
                        <p>Educational background: BSc Engineering Uttara University </p>
                        <p> Project Sample link:<br></br>
                            1. https://ware-house-management-54136.web.app/ <br></br>
                            2. https://independent-service-prov-332ef.web.app/  <br></br>
                            3. https://whimsical-naiad-19d67f.netlify.app<br></br>
                        </p>
                    </div>
                </div>
                <div className=' text-xl font-semibold my-6 text-center'> If you feel I am suitable as an web Devoloper for your Company. Please contact me for hiring a fulltime job placement.</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPortfolio;