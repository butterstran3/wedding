import { React, useState } from "react";
import "./faq.css";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

const Faq = () => {

    const [selected, setSelected] = useState(null)
    const [vietnamese, setVietnamese] = useState(true)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    const faqData = vietnamese ? data : vietData;

    return (
        <div className="faq_container">
            <div className="faq_inner">
                <div className="faq_header">
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className="language_toggle">
                    <p className="english active">English</p>
                    <div className="toggle_container" onClick={() => {
                        setVietnamese(!vietnamese)
                        let toggle = document.querySelector(".toggle_container")
                        let english = document.querySelector(".english")
                        let viet = document.querySelector(".viet")
                        toggle.classList.toggle("active")
                        english.classList.toggle("active")
                        viet.classList.toggle("active")
                    }}>
                        <div className="toggle_btn"></div>
                    </div>
                    <p className="viet">Tiếng Việt</p>
                </div>
                <div className="faq_list">
                    {faqData.map((item, i) => (
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
        question: "Is there a gift registry?",
        answer: "Your joy and companionship on our wedding day are invaluable treasures. While your presence is the greatest gift we could ask for, if you'd like to honour us with a gift, a wishing well will be available at the reception. Your contributions will go towards our future together."
    },
    {
        question: "What time should I arrive for the ceremony?",
        answer: "The ceremony will begin at 4:30 pm sharp. Your punctual arrival would be greatly appreciated, ensuring we start on time and everyone can enjoy every moment of our special day together. Please note that we will not be able to delay the start of the ceremony for late arrivals."
    },
    {
        question: "Can I bring a plus-one?",
        answer: "We kindly request that invitations be honoured as addressed. Unfortunately, we are unable to accommodate plus ones due to venue constraints. Thank you for your understanding."
    },
    {
        question: "Can I take photos during the ceremony?",
        answer: "There will be professional photographers and videographers present. We kindly ask that guests refrain from using personal devices to capture photos or videos during the ceremony. Instead, we encourage you to fully embrace the moment and immerse yourselves in the joyous occasion. Thank you for your understanding and cooperation."
    },
    {
        question: "Is there a dress code for the reception?",
        answer: "The dress code for the reception is formal attire. We kindly ask women to refrain from wearing white out of respect for the bride. Thank you for your understanding."
    },
    {
        question: "Is there parking available at the venue?",
        answer: "Yes, there is free parking available at the venue for all of our guests."
    },
    {
        question: "What's the RSVP deadline?",
        answer: "The RSVP deadline is 15 Sep 24. We kindly ask that you RSVP by this date so we can finalize our guest count and make necessary arrangements for seating, catering, and other accommodations."
    }
]

const vietData = [
    {
        question: "Có đăng ký quà tặng không?",
        answer: "Niềm vui và sự đồng hành của quý vị trong ngày cưới của chúng tôi là tài sản vô giá. Mặc dù sự hiện diện của quý vị là món quà tuyệt vời nhất mà chúng tôi có thể yêu cầu, nếu quý vị có lòng khoản đãi chúng tôi với một món quà, một hộp nhận tiền chúc sẽ có sẵn tại quầy lễ tân. Sự đóng góp của quý vị sẽ hổ trợ cho tương lai của chúng tôi."
    },
    {
        question: "Tôi nên đến dự lễ cưới lúc mấy giờ?",
        answer: "Lễ cưới sẽ tiến hành đúng 4h30 chiều. Việc quý vị đến đúng giờ sẽ được đánh giá rất cao, hầu đảm bảo chúng ta bắt đầu đúng giờ và mọi người có thể cùng nhau tận hưởng từng khoảnh khắc trong ngày đặc biệt của chúng tôi. Xin lưu ý rằng chúng tôi sẽ không thể trì hoãn việc tiến hành lễ cưới nếu quý vị đến muộn."
    },
    {
        question: "Tôi có thể mời thêm một người nào khác được không?",
        answer: "Chúng tôi vui lòng yêu cầu quý vị tôn trọng lời mời như đã ghi trên thiệp. Thật không may, chúng tôi không thể đáp ứng nhu cầu thêm chỗ ngồi cho bất cứ người nào khác do những hạn chế của địa điểm. Cảm ơn sự cảm thông của quý khách. "
    },
    {
        question: "Tôi có thể chụp ảnh trong buổi lễ không?",
        answer: "Chúng tôi sẽ có các nhiếp ảnh gia và nhà quay phim chuyên nghiệp. Chúng tôi vui lòng yêu cầu quý khách không sử dụng thiết bị cá nhân để chụp ảnh hoặc quay phim trong buổi lễ. Thay vào đó, chúng tôi khuyến khích quý vị tận hưởng trọn vẹn khoảnh khắc và đắm mình trong dịp vui này. Cảm ơn sự hiểu biết và hợp tác của quý vị."
    },
    {
        question: "Có quy định về trang phục tại tiệc cưới không?",
        answer: "Quy định về trang phục tại tiệc cưới là trang phục trang trọng. Chúng tôi vui lòng yêu cầu phụ nữ không mặc đồ trắng để tôn trọng cô dâu. Cảm ơn sự hiểu biết của quý vị."
    },
    {
        question: "Có chỗ đậu xe tại địa điểm không?",
        answer: "Có, tại địa điểm có bãi đậu xe miễn phí cho tất cả khách cửa mình."
    },
    {
        question: "Hạn chót trả lời là khi nào?",
        answer: "Hạn chót trả lời là ngày 15 tháng 9, 2024. Chúng tôi vui lòng yêu cầu quý vị trả lời trước ngày này để chúng tôi có thể tổng kết số lượng khách và sắp xếp cần thiết về chỗ ngồi, dịch vụ ăn uống và các nhu cầu khác."
    }
]

export default Faq;