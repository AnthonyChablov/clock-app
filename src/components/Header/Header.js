import { useContext } from "react";
import { AppContext } from "../../context/GlobalContext";
const Header = () => {
    const {
        quote, author
    } = useContext(AppContext);
    return (
        <div className="header">
            <p className="header__quote ">
                {quote}
            </p>
            <p className="header__author">
                {author}
            </p>
        </div>
    )
}

export default Header