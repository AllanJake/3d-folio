import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-x1 text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
    <h1 className='sm:text-x1 sm:leading-snug, text-center
    neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semiBold'>Jake</span>
        <br/>
        A Games Programmer from Scotland
    </h1>
    ),

    2: (
    <InfoBox 
        text="Worked with many companies and picked up many skills along the way"
        link="/about"
        btnText="Learn More"
    />
    ),

    3: (
    <InfoBox 
        text="Led many projects to success over the years"
        link="/projects"
        btnText="Visit my portfolio"
    />
    ),

    4: (
    <InfoBox 
        text="Looking for a dev? I'm just a few clicks away!"
        link="/contact"
        btnText="Lets Talk!"
    />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo