import {AiOutlineSearch , AiOutlineShoppingCart , AiOutlineHeart} from "react-icons/ai"
import {FaRegUserCircle} from 'react-icons/fa'
import logo from "../../Assets/Pic/logo-light.svg"
import "./Navbar.css";
const Navbar = ()=>{
    return(
        <>
        <div className="Navbar">
        <div className="NavRight">
                <ul className="NavIconList">
                    <li className="NavIconItem"><AiOutlineShoppingCart /></li>
                    <li className="NavIconItem"><AiOutlineHeart /></li>
                    <li className="NavIconItem"><FaRegUserCircle /></li>
                    <li className="NavIconItem"><AiOutlineSearch /></li>
                </ul>
            </div>
            <div className="NavLeft">
                <ul className="NavList">
                    <li className="NavItem">تماس  </li>
                    <li className="NavItem">صفحات</li>
                    <li className="NavItem">بلاگ</li>
                    <li className="NavItem">فروشگاه</li>
                    <li className="NavItem">خانه</li>
                    <li className="NavItem"><img src={logo} alt="logo" /></li>
                </ul>
            </div>

        </div>
        
        </>
    )
}
export default Navbar