import React from 'react';
import Card from "../components/OffersComponent/Card"
import newDoc from "../assets/newdocument.webp"
import editDoc from "../assets/editdocument.webp"
import learnMore from "../assets/learnmore.webp"

const Home = () => {
    return (
        <div>
            <h2>TimeSheet Plus</h2>
            <h4 className='WelcomeNote'>Get Started with Timesheet Plus</h4>
            <Card image={newDoc} title="Create New"/>
            <Card image={editDoc} title="Edit Current"/>
            <Card image={learnMore} title="Learn More"/>
        </div>
    );
};

export default Home;