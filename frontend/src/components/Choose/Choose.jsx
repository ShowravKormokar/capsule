
const Choose = () => {
    return (
        <section className="w-full h-dvh p-8 pt-10">
            <p className='text-[.7rem] text-[#eae5dd]'>Discover Available Capsule<span>®</span></p>
            <div className="mt-10">
                <h1 className='text-[#f4efe7] lg:text-[9.5rem] text-[3rem] leading-[0.9] font-medium tracking-tighter'>Choose the one you like best</h1>
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-center items-start gap-10 lg:mt-16">
                <div className='lg:w-1/2 w-full text-[#b1a696] lg:text-[2rem] text-[1rem] md:leading-[1.1] lg:mt-0 mt-10 lg:pr-16'>
                    <p>You can choose one of three premium capsule houses in our offer. Each of our capsules provides the highest quality and meets the standards adjusted to your needs. Choose the one you like.</p>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <div className=" lg:w-[30%] w-[60%]">
                        <p className="text-[.7rem] text-[#eae5dd]">All Capsules® houses—has built
                            based on the same rules:</p>
                    </div>
                    <div className="flex flex-1 flex-wrap justify-start items-start gap-2 mt-8">
                        <div className="border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Sustainable
                        </div>
                        <div className="border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Nature—Care
                        </div>
                        <div className="border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Smart
                        </div>
                        <div className="border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Privacy
                        </div>
                        <div className="border-[1px] border-[#b1a696] text-[#b1a696] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Spacious
                        </div>
                        <div className="border-[1px] border-[#f4efe7] text-[#f4efe7] lg:text-[2rem] px-[20px] py-[4px] rounded-full">
                            Glassed-in
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;