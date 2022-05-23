import React from 'react';
// import background from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <div style={{
            background: '#F6E09a',
        }}>
            <footer className="  py-4 container mx-auto ">
                <div className='grid grid-cols-3 pl-4 '>
                    <div className='grid grid-row'>
                        <span className="footer-title">Tools</span>
                        <a href='/' className="link link-hover">Branding</a>
                        <a href='/' className="link link-hover">Design</a>
                        <a href='/' className="link link-hover"> Parts</a>
                        <a href='/' className="link link-hover">Advertisement</a>
                    </div>
                    <div className='grid grid-row'>
                        <span className="footer-title">Company</span>
                        <a href='/' className="link link-hover">About us</a>
                        <a href='/' className="link link-hover">Contact</a>
                        <a href='/' className="link link-hover">Jobs</a>
                        <a href='/' className="link link-hover">Press kit</a>
                    </div>
                    <div className='grid grid-row '>
                        <span className="footer-title">Legal</span>
                        <a href='/' className="link link-hover">Terms of use</a>
                        <a href='/' className="link link-hover">Privacy policy</a>
                        <a href='/' className="link link-hover">Cookie policy</a>
                    </div>

                </div>
                <footer className="footer footer-center pt-6  text-base-content">
                    <div>

                        <p>Copyright © 2022 - All Rights Reserved</p>
                    </div>
                </footer>
            </footer>
        </div>
    );
};

export default Footer;