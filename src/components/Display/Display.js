import sun from '../../assets/icons/icon-sun.svg';
import Button from '../Button/Button';
import { useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
export const Display = () => {
    const {
        dropDown, onClickHandler, setDropDown
    } = useContext(AppContext);
    console.log(dropDown)
    return (
        <div className="display" >
            <div className="display__header">
                <div className="display__icon">
                    <img src={sun} alt="sun icon"/>
                </div>
                <div className="display__title">
                    <p>Good Morning</p>
                </div>
            </div>
            <div className="display__clock">
                <p className='display__time'>11:37</p>
                <div className="display__timezone">
                    <p>BST</p>
                </div>
            </div>
            <div className="display__subtitle">
                <p className="display__subtitle">In London, UK</p>
            </div>
            <Button onClickHandler={onClickHandler}/>
        </div>
    )
}
