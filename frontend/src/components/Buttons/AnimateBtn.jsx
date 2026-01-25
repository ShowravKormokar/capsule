import "./revbtn.css";

const AnimateBtn = (props) => {
    return (
        <div className="link-line">
            <a href="#" className="rev-link rev-top text-[12px]">{props.btnName}</a>
            <a href="#" className="rev-link text-[12px]">{props.btnName}</a>
        </div>
    )
}

export default AnimateBtn