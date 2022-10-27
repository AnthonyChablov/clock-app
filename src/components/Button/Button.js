import arrowIcon from "../../assets/icons/icon-arrow-up.svg";
const Button = ({onClickHandler}) => {
    return (
        <div className="button" onClick={onClickHandler}>
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