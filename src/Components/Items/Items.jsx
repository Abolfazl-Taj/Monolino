import {ItemsData} from '../../Assets/Data';
import Item from './Item';
import { useState } from "react";
import "./Items.css";
const Items = ()=>{
    const [data , setData] = useState(ItemsData)
    return(
        <>
        <div className="Items-Continer">
        {data.map(item => <Item key={item.id} {...item}></Item>)}





        </div>
        </>
    )
}
export default Items