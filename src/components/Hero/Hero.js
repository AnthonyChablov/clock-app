import Header from "../Header/Header"
import refreshIcon from '../../assets/icons/icon-refresh.svg';
import { Display } from "../Display/Display";
import { useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
const Hero = () => {
  const {
    timeOfDay
  } = useContext(AppContext);
  return (
    <div className={timeOfDay}>
      <div className="hero__feature">
        <div className="hero__content container">
          <div className="row">
            <Header/>
            <div className="hero__icon">
              <img src={refreshIcon} alt="refresh"/>
            </div>
          </div>
          <Display />  
        </div>
      </div>
    </div>
  )
}
export default Hero