import React from 'react';
import bannerimg from '../../../assets/mdOlyullah.jpeg';


const Banner = () => {
    return (
        <div className="hero bg-stone-300">
            <div className="hero-content flex-col lg:flex-row">
                <img src={bannerimg} className="w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Videograher,Photographer</h1>
                    <p className="py-6">Hi there!<br/>

I'm OLYULLAH, a passionate professional specializing in Videography, Photography, and Digital Marketing. I have the unique ability to capture captivating visuals, create stunning imagery, and connect brands with their target audiences. With a keen eye for detail and a knack for storytelling, I bring an unrivaled blend of creativity and strategic thinking to every project. Let's collaborate and bring your vision to life!</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;