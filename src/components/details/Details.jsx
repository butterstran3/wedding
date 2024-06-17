import React from "react";
import "./details.css";
import IMAGE from "../../assets/schedule_pic.JPG";

const Details = () => {
    return (
        <div className="details_container">
            <div className="image_container">
                <img className="details_image" src={IMAGE} alt="wedding"/>
            </div>
            <div className="details_message">
                <h4 className="address">
                    The wedding will be held on <strong>Friday, 22nd November 2024!</strong>
                    <br></br>
                    We can't wait to celebrate our special day with all our favorite people. 
                    For all the fun details, check out our FAQ!
                </h4>
            </div>
            <div className="details_dates">
                <div className="event">
                    <h2 className="heading">Civil Ceremony</h2>
                    <h4 className="time">
                        4:30PM
                    </h4>
                </div>
                <div className="event">
                    <h2 className="heading">Reception</h2>
                    <h4 className="time">
                        6:00PM
                    </h4>
                </div>
            </div>
            <div className="details_address">
                <h4 className="address">
                    Windmill Gardens Reception<br></br>533 - 539 Leakes Road<br></br>Bonnie Brook, VIC 3335<br></br>
                </h4>
            </div>
        </div>
    )
}

export default Details;