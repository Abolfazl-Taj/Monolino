import { useState } from 'react';
import {WhyUsData} from '../../Assets/Data'
import './Whyus.css';
import Whyusitem from './WhyusItem';
const WhyUs = ()=>{
    const [whyusdata , setWhyusData] = useState(WhyUsData)
    return(
        <>
        <div className="Whyus">
            {
                whyusdata.map(response => <Whyusitem key={response.id}  {...response}  />)
            }
        </div>
        
        
        </>
    )
}
export default WhyUs