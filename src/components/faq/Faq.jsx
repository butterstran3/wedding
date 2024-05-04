import { React, useState } from "react";
import "./faq.css";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

const Faq = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="faq_container">
            <div className="faq_inner">
                <div className="faq_header">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="faq_list">
                    {data.map((item, i) => (
                        <div className="faq">
                            <div className="question" onClick={() => toggle(i)}>
                                <h3>{item.question}</h3>
                                <img alt="plus" className="plus" src={selected === i ? minus : plus}/>
                            </div>
                            <div className={selected === i ? "answer active" : "answer"}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        question: "What is the dress code?",
        answer: "The dress code for the wedding is black-tie. We also request for girls to not wear white."
    },
    {
        question: "What gift can I give and where do I provide it?",
        answer: "We only accept Bitcoin/Memecoins as gifts. This can be provided by transferring your cryptos straight to our crypto wallet."
    },
    {
        question: "Can I bring a plus-one?",
        answer: "Due to high amount of guests, we will not be accepting plus-ones. Unless that plus-one is Hanni Pham, then all bets are off."
    },
    {
        question: "Where do I park for the ceremony and reception?",
        answer: "There is a parking lot which will be available to park in. Any vehicles parked in unauthorised spots will be towed and provided to the bride and groom as wedding gifts."
    }

]

export default Faq;