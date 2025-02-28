import React from 'react';
import coin from '../assets/bitcoin-01.png';
import infoIcon from '../assets/info Circle.svg';
import NotficIcon from '../assets/Notification.svg';
import profileImg from '../assets/Ellipse 1.svg';

const Header = () => {
    return (
        <header className='flex justify-between items-center mb-4 pt-2 w-[100%]'>
            <img src={coin} alt="coin" />
            <div className="flex gap-3">
                <img  src={infoIcon} alt="infoIcon" />
                <img  src={NotficIcon} alt="NotficIcon" />
                <div className="flex justify-between items-center">
                    <img src={profileImg} alt="profileImg" />
                    <div className="flex flex-col">
                        <p className="text-white">John Doe</p>
                        <p className="text-white">welcome back!</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;