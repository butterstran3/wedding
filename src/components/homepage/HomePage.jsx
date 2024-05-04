import React from "react";
import "./homepage.css";
import IMAGE from "../../assets/home_pic.JPG";

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
                    Julia and Duy joyfully request the pleasure of your company as we speak our vows and join in marriage in the presence of family and friends. 
                    <br></br>
                    <br></br>
                    Photography by Terry Do.
                </p>
            </div>
        </div>
    )
}

export default HomePage;