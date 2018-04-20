import React from 'react';
import guideImg from '../images/guide.png';

const Landing = () => {
    return (
        <div>
            <img className='welcome-pic' alt='welcome' src={guideImg} />
            <div>
                <button className='login-btn'><a className='login' href="/auth/google">Login</a></button>
            </div>
        </div>
    );
};

export default Landing;