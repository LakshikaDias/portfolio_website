import LogoTitle from "../../assets/images/logo-s.png";
import {Link} from "react-router-dom";
import './index.scss';

const Home = ()  => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br/> I'm 
                    <img src={LogoTitle} alt="developer" />
                    dias
                    <br/>
                    web developer
                </h1>
                <h2>
                    Frontend Developer /  UI,UX Engineer 
                </h2>

                <Link to="/contact" className="flat-button">
                    contact me
                </Link>
            </div>
            
        </div>
    )
}

export default Home