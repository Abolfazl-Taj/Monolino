import "./TopSell.css";
import Pic1 from '../../Assets/Pic/Shoes.png'
import Pic2 from '../../Assets/Pic/Jakets.jpg'
import Pic3 from '../../Assets/Pic/Assessories.jpg'
import TopSellitems from "./TopSellitems";
import { useState } from "react";

const TopSell = ()=>{
    const [items , setItem] =useState([
        {aks:Pic1 , text:"کفش "},
        {aks:Pic2 , text:"ژاکت"},
        {aks:Pic3 , text:"لوازم جانبی"}
    ])
    return(
        <>
        <div className="TopSellList">
            {items.map((item)=> <TopSellitems {...item} />)}
        </div>
        
        
        </>
    )
}
export default TopSell