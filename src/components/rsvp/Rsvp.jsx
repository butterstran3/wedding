import { React, useRef, useState } from "react";
import Select from 'react-select'
import "./rsvp.css";
import emailjs from 'emailjs-com';
import { IoMdAdd } from "react-icons/io";

const Rsvp = () => {

    const form = useRef();
    const [numGuests, setNumGuests] = useState(0);

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_4rdbasc', 'template_ybfav9v', form.current, 'F0iz3W8UWvYMr4mjO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
    };

    const addGuest = () => {
        setNumGuests(numGuests + 1);
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
              <label htmlFor={`fname_${i}`}>First Name (Tên đầu tiên) for Guest {i + 1}:</label>
              <input className={`fname-input fname-input-guest-${i}`} type='text' name={`fname_${i}`} id={`fname_${i}`} required />
              <label htmlFor={`lname_${i}`}>Last Name (Họ) for Guest {i + 1}:</label>
              <input className={`lname-input lname-input-guest-${i}`} type='text' name={`lname_${i}`} id={`lname_${i}`} required />
            </div>
          );
        }
        return additionalGuestInputs;
      };

    return (
        <div className="rsvp_container">
            <h1 className="rsvp_heading">
                Please RSVP by July 3, 2024
            </h1>
            <div className="form">
                <form className='contact_form' ref={form} onSubmit={sendEmail}>
                    <label for="fname">First Name (Tên đầu tiên):</label>
                    <input className='fname-input' type='text' name='fname' id="fname" required/>
                    <label for="lname">Last Name (Họ):</label>
                    <input className='lname-input' type='text' name='lname' id="lname" required/>
                    <label for="email">Email:</label>
                    <input className='email-input' type='text' name='email' id="email" required/>
                    <label for="mobile">Mobile Number (Số điện thoại):</label>
                    <input className='mobile-input' type='text' name='mobile' id="mobile" required/>
                    <label for="answer">Are you attending? (Bạn có tham dự không?)</label>
                    <div className="select_container">
                        <SelectComponent className="select_option"/>
                    </div>
                    <label for="diet">Do you have any dietary requirements?</label>
                    <input className="diet-input" type="text" name="diet" id="diet" required></input>
                    <label for="song">What song would get you on the dance floor?</label>
                    <input name="song" id="song" type="text" className="song-input" required></input>
                    {renderAdditionalGuestInputs()}
                    <div className="guest-btn_container">
                        <button type="button" onClick={addGuest} className="plus_btn"><IoMdAdd className="plus_icon"/>Add guest</button>
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
}

export default Rsvp;