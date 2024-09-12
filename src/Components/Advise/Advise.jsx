import "./Advise.css";
import {FaOpencart} from 'react-icons/fa'
const Advise = ()=>{
    return(
        <>
        
        <div className="Advise">
            <p className="Advise-Note">
            <FaOpencart className="Advise-Icon" size="100px" />
            ”اعتماد به نفس خود را نشان دهید. نشان دهید که از چیزی نمی‌ترسید.“
            <button className="Advise-btn">بیشتر بخوانید</button>
            </p>
        </div>
        
        
        </>
    )
}
export default Advise