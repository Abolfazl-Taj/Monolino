import "./Whyus.css";
const Whyusitem = (props)=>{
    return(
        <>
            <div className="Whyus-Item">
                <p className="Whyus-Des">
                    {props.Text}
                </p>
                <p className="WhyusIcon">{props.Icon}</p>
            </div>
            

        </>
    )
}
export default Whyusitem