import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import "./overlay.css";
import { MdArrowOutward } from "react-icons/md";

const ClickIndicator = ({ active }) => {
    const ref = useRef(null);

    useEffect(() => {
        const move = (e) => {
            if (!active || !ref.current) return;

            const el = ref.current;
            const w = el.offsetWidth;
            const h = el.offsetHeight;

            el.style.left = `${e.clientX - w / 2}px`;
            el.style.top = `${e.clientY - h / 2}px`;
        };

        document.addEventListener("mousemove", move);
        return () => document.removeEventListener("mousemove", move);
    }, [active]);

    if (!active) return null;

    return createPortal(
        <div ref={ref} className="click-indicator visible text-[0.7rem] px-3 py-2 rounded-4xl">
            <div className="w-auto bg-[#f4efe7] flex justify-center items-center gap-3">
                <p>Show the map</p>
                <MdArrowOutward className="bg-[#2a2725] text-[#b3a694] w-[3rem] h-[3rem] rounded-full p-1" />
            </div>
        </div>,
        document.body
    );
};

export default ClickIndicator;