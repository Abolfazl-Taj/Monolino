import Advise from "../../Components/Advise/Advise";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Items from "../../Components/Items/Items";
import Navbar from "../../Components/Navbar/Navbar";
import TopSell from "../../Components/TopSell/TopSell";
import WhyUs from "../../Components/Whyus/Whyus";
import "./Main.css";
const Main = ()=>{
    return(
        <>
        <Navbar />        
        <Header />
        <TopSell />
        <Advise />
        <Items />
        <WhyUs />
        <Footer />
        </>
    )
}
export default Main