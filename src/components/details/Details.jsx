import React from "react";
import "./details.css";
import IMAGE from "../../assets/home_pic.JPG";

const Details = () => {
    return (
        <div className="details_container">
            <div className="image_container">
                <img className="details_image" src={IMAGE} alt="Wedding Image"/>
            </div>
            <div className="details_message">
                <h3>
                    The wedding will be held on Saturday, July 3, 2024.<br></br>
                    We'll start with a nonsectarian ceremony, then move to the hotel for the reception.<br></br>
                    No dickheads allowed.<br></br>
                    Dress code will be black tie optional.
                </h3>
            </div>
            <div className="details_dates">
                <div className="event">
                    <h2 className="heading">Ceremony</h2>
                    <h4 className="time">
                        3:00PM – 4:00PM
                    </h4>
                    <h4 className="address">
                        New Faith Church<br></br>415 Greenwich St (at Bethune St)<br></br>New York, NY 10014<br></br>(212) 555–0123
                    </h4>
                </div>
                <div className="event">
                    <h2 className="heading">Wedding</h2>
                    <h4 className="time">
                        5:00PM – 10:00PM
                    </h4>
                    <h4 className="address">
                        The Monarch<br></br>848 Washington St (at W 13th St)<br></br>New York, NY 10014<br></br>(212) 555–0123
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Details;