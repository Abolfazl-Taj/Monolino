import "./Items.css";
import {AiOutlineShoppingCart , AiOutlineHeart} from 'react-icons/ai'
import {MdOutlineOpenInFull} from 'react-icons/md'
const Item = (props)=>{
    return(
        <>
        <div className="Item">
        
            <img className="Item-Pic" src={props.Pic} alt="Shop-Item" />
            <div className="Item-Info">
                <h5 className="Item-Category">{props.Category}</h5>
                <h2 className="Item-Name">{props.Name}</h2>
                <h3 className="Item-Price">{props.Price}</h3>
            </div>
            <div className="Item-icons-Countiner">
                <AiOutlineShoppingCart className="Item-Icons" />
                <AiOutlineHeart className="Item-Icons" />
                <MdOutlineOpenInFull className="Item-Icons" />
            </div>
        </div>
        </>
    )
}
export default Item