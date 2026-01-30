import { useState } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { feedbackH1LG, feedbackReviewLG } from "../../constants/feedback";

import review1 from "../../assets/review1.png";
import review2 from "../../assets/review2.png";
import review3 from "../../assets/review3.png";

const reviewImages = {
    review1,
    review2,
    review3
};

const Feedback = () => {
    const [index, setIndex] = useState(0);
    const total = feedbackH1LG.length;

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % total);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + total) % total);
    };

    const progressWidth = feedbackReviewLG[index][3];

    return (
        <section className='w-sereen h-dvh p-8 flex flex-col justify-center items-center'>
            <div className='w-full text-left'>
                <p className='text-[.7rem] font-bold text-[#eae5dd] activities-subtitle text-left'>
                    Do people like us?
                </p>

                <div>
                    <h1 className='text-[#f4efe7] text-7xl mt-4 mb-6'>
                        {feedbackH1LG[index].map((line, i) => (
                            <span key={i}>
                                {line}<br />
                            </span>
                        ))}
                    </h1>
                </div>

                <div className='flex items-center gap-4 mt-12'>
                    <img
                        src={reviewImages[feedbackReviewLG[index][2]]}
                        alt="review img"
                        className='w-[4.5vw] rounded-4xl'
                    />
                    <p className="text-[#aca192] text-[0.7rem]">
                        {feedbackReviewLG[index][0]}<br />
                        ({feedbackReviewLG[index][1]})
                    </p>
                </div>

                <div className="flex justify-between items-center mt-14">
                    <div className="flex gap-1">
                        <button
                            onClick={handlePrev}
                            className='border-[1px] p-1 border-[#aaa090] hover:bg-[#aaa090] rounded-4xl'
                        >
                            <IoMdArrowBack className="text-[#f1ece4] w-[2vw] h-[3.4vh]" />
                        </button>

                        <button
                            onClick={handleNext}
                            className='border-[1px] p-1 border-[#aaa090] rounded-4xl'
                        >
                            <IoMdArrowForward className="text-[#f1ece4] w-[2vw] h-[3.4vh]" />
                        </button>
                    </div>

                    <div className="relative z-9 w-70 h-[0.1rem] bg-[#4f4b48]">
                        <div
                            className="progress-line absolute z-10 bg-[#f4efe7] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"
                            style={{ width: progressWidth }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;