import React from 'react';
import landingImg from '../images/landing.jpg';
import guideImg from '../images/guide.png';

const Landing = () => {
    return (
        <div>
            <img className='welcome-pic' src={guideImg} />
            <div>
                <button className='login-btn'><a className='login' href="/auth/google">Login</a></button>
            </div>
        </div>
    );
};

export default Landing;