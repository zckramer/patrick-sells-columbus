import Hamburger from '../media/Hamburger_icon.png';

const Header = () => {
    return (
        <div className="Header">
            <div 
                className="Header__Item">
                Patrick Sells Columbus
            </div>
            <img 
                src={Hamburger} 
                alt="menu button" 
                style={{
                    height: "30px",
                    width: "30px",
                    margin: "2px"
                }}/>
        </div>
    )
}
export default Header;