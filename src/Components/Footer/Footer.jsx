import Logo from '../../Assets/Pic/logo-light.svg'
import {AiOutlineInstagram , AiOutlineTwitter , AiFillFacebook} from 'react-icons/ai'
import "./Footer.css";
const Footer = ()=>{
    return(
        <>
        <div className="Footer">
            <div className="Footer-Item">
            <h1 className="Footer-Title">خبرنامه</h1>
                    <h5 className="Footer-Email"> برای دریافت جدیدترین اخبار مشترک خبرنامه ما شوید    </h5>
                    <input className="Footer-Input" type="text" placeholder='آدرس ایمیل' />
                    <p className="Advise-Footer">با اشتراک در خبرنامه، سیاست حریم خصوصی ما را می‌پذیرید.</p>
            </div>

            <div className="Footer-Item">
            <h1 className="Footer-Title">اطلاعات مفید</h1>
                <ul className="Footer-List">
                    <li className="Footer-ha">قوانین و مقررات</li>
                    <li className="Footer-ha">درباره ی فروشگاه</li>
                    <li className="Footer-ha">راهنمای خرید</li>
                    <li className="Footer-ha">پیگیری سفارش</li>
                    <li className="Footer-ha">  علاقه مندی ها  </li>
                </ul>

            </div>

            <div className="Footer-Item">
                <h1 className="Footer-Title">لینک‌ها</h1>
                <ul className="Footer-List">
                    <li className="Footer-ha">اخبار مد و پوشاک </li>
                    <li className="Footer-ha">آخرین محصولات </li>
                    <li className="Footer-ha">سبد خرید شما </li>
                    <li className="Footer-ha">پیگیری سفارش</li>
                    <li className="Footer-ha">علاقه مندی ها </li>
                </ul>
            </div>

            <div className="Footer-Item">
            <img src={Logo} alt="Logo" />
                <p className="Adress">
                تبریز، چهارراه آبرسان، فلکه دانشگاه
مجتمع بلور، طبقه 85، واحد 69
                </p>
                <p className="Phone"> 436 1747 555 1+ </p>
                <div className="Socials">
                    <AiOutlineInstagram className='Footer-Icons' />
                    <AiOutlineTwitter className='Footer-Icons' />
                    <AiFillFacebook className='Footer-Icons' />
                </div>

            </div>
        </div>
        
        
        </>
    )
}
export default Footer