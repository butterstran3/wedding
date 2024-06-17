import React from "react";
import "./homepage.css";
import IMAGE from "../../assets/home_image.jpg";

const HomePage = () => {
    return (
        <div className="home_container">
            <div className="image_container">
                <img className="home_image" src={IMAGE} alt="Home Image"/>
            </div>
            <div className="invite_container">
                <h3 className="home_details">COME CELEBRATE OUR WEDDING</h3>
                <hr></hr>
                <h1 className="name">JULIA NGUYEN</h1>
                <h4>— and —</h4>
                <h1 className="name">DUY NGUYEN</h1>
                <hr></hr>
                <h3 className="home_details">SATURDAY, JULY 3, 2024</h3>
            </div>
            <div className="home_info">
                <p>
                    Welcome to our special day! We're overjoyed to invite you to celebrate our love as we exchange vows and continue our journey together. 
                    Your presence means the world to us, and we want to extend our heartfelt thanks for being a part of this milestone moment. 
                    <br></br>
                    <br></br>
                    Explore our wedding details, RSVP, FAQs, and join us in creating unforgettable memories. 
                    Your presence will make our day complete!
                    <br></br>
                    <br></br>
                    Be sure to check out our gallery of quirky and intimate engagement & wedding photos, capturing the essence of us.
                </p>
            </div>
        </div>
    )
}

export default HomePage;