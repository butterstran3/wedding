import { React, useRef, useState } from "react";
import Select from 'react-select'
import "./rsvp.css";
import emailjs from 'emailjs-com';
import { IoMdAdd } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { HiMinus } from "react-icons/hi";

const Rsvp = () => {

    const form = useRef();
    const [numGuests, setNumGuests] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_wpzds98', 'template_sv9qppp', form.current, 'V1y-xbYvk_2NUDK4-')
        .then((result) => {
            console.log(result.text);
            if (result.status === 200) {
                setSubmitted(true)
            }
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
    };

    const addGuest = () => {
        if (numGuests < 6)
        setNumGuests(numGuests + 1);
    }

    const deleteGuest = () => {
        if (numGuests > 0) {
            setNumGuests(numGuests - 1);
        }
    }

    const options = [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No'}
    ];

    const SelectComponent = () => (
        <Select options={options} name="attendance" id="attendance"/>
    )

    const renderAdditionalGuestInputs = () => {
        const additionalGuestInputs = [];
        for (let i = 1; i <= numGuests; i++) {
          additionalGuestInputs.push(
            <div key={i}>
              <label htmlFor={`name_${i}`}>Full Name (Tên đầu tiên) for Guest {i + 1}:</label>
              <input className={`name-input name-input-guest-${i}`} type='text' name={`name_${i}`} id={`name_${i}`} required />
            </div>
          );
        }
        return additionalGuestInputs;
      };
    
    if (!submitted) {
        return (
            <div className="rsvp_container">
                <h1 className="rsvp_heading">
                    Please RSVP by September 15, 2024
                </h1>
                <div className="form">
                    <form className='contact_form' ref={form} onSubmit={sendEmail}>
                        <label for="fname">Full Name (Họ và tên):</label>
                        <input className='name-input' type='text' name='name' id="name" required/>
                        <label for="email">Email:</label>
                        <input className='email-input' type='text' name='email' id="email" required/>
                        <label for="mobile">Mobile Number (Số điện thoại):</label>
                        <input className='mobile-input' type='text' name='mobile' id="mobile" required/>
                        <label for="answer">Are you attending? (Bạn có tham dự không?)</label>
                        <div className="select_container">
                            <SelectComponent className="select_option"/>
                        </div>
                        <label for="diet">Do you have any dietary requirements? (Quý vị có nhu cầu ẩm thực nào không?)</label>
                        <input className="diet-input" type="text" name="diet" id="diet" required></input>
                        <label for="song">What song would get you on the dance floor? (Bài hát nào sẽ khuyến khích quý vị ra sàn nhảy)</label>
                        <input name="song" id="song" type="text" className="song-input" required></input>
                        {renderAdditionalGuestInputs()}
                        <div className="guest-btn_container">
                            <button type="button" onClick={deleteGuest} className="guest_btn minus"><HiMinus className="plus_icon"/>Delete guest</button>
                            <button type="button" onClick={addGuest} className="guest_btn plus"><IoMdAdd className="plus_icon"/>Add guest</button>
                        </div>
                        <label for="message">Message (Tin nhắn):</label>
                        <textarea name='message' id="message" rows='7' placeholder="Please let us know if you have any dietary requirements or any other concerns"></textarea>
                        <div className="btn_container">
                            <button type='submit' className='btn'>RSVP</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    } else {
        return (
            <div className="submit_container">
                <div className="check_container">
                    <FiCheckCircle className="check"/>
                </div>
                <div className="check_message">
                    <h3>
                        Your RSVP has been received.
                        <br></br>
                        Look forward to seeing you there!!
                    </h3>
                </div>
                <div className="btn_container">
                    <NavLink className='submit_home' to="/">Back to Home</NavLink>
                </div>
            </div>
        )
    }
}

export default Rsvp;