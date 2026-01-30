import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import review1 from "../../assets/review1.png";

const Feedback = () => {
    return (
        <section className='w-sereen h-dvh p-8 flex flex-col justify-center items-center'>
            <div className='w-full text-left'>
                <p className='text-[.7rem] font-bold text-[#eae5dd] activities-subtitle text-left'>Do people like us?</p>
                <div>
                    <h1 className='text-[#f4efe7] text-7xl mt-4 mb-6'>
                        Staying at Capsules® in the<br />
                        California desert redefined my<br />
                        retreat — modern design meets<br />
                        nature, and every sunset feels<br />
                        like a serene masterpiece.<br />
                    </h1>
                </div>
                <div className='flex items-center gap-4 mt-12'>
                    <img src={review1} alt="review img" className='w-[4.5vw] rounded-4xl' />
                    <p className="text-[#aca192] text-[0.7rem]">Marcus Simpson<br />(New York)</p>
                </div>
                <div className="flex justify-between items-center mt-14">
                    <div className="flex gap-1">
                        <button className='border-[1px] p-1 border-[#aaa090] hover:bg-[#aaa090] rounded-4xl '><IoMdArrowBack className="text-[#f1ece4] w-[2vw] h-[3.4vh]" />
                        </button>
                        <button className='border-[1px] p-1 border-[#aaa090] rounded-4xl '><IoMdArrowForward className="text-[#f1ece4] w-[2vw] h-[3.4vh]" />
                        </button>
                    </div>
                    <div className="relative z-9 w-70 h-[0.1rem] bg-[#4f4b48]">
                        <div className="progress-line absolute z-10 bg-[#f4efe7] w-[33%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Feedback;