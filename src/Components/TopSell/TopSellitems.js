import "./TopSell.css";
const TopSellitems = ({aks ,text})=>{
    return(
        <>
        <div className="TopSellItem">
            <img src={aks} alt="items" />
            <p className="topselltext">{text}</p>
        </div>
        
        </>
    )
}
export default TopSellitems