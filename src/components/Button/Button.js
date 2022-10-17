import arrowIcon from "../../assets/icons/icon-arrow-up.svg";
const Button = () => {
    return (
        <div className="button">
            <div className="button__wrapper">
                <p className="button__text">MORE</p>
                <div className="button__dropdown">
                    <img src={arrowIcon} alt="arrowIcon" />
                </div>
            </div>
            
        </div>
    )
}

export default Button