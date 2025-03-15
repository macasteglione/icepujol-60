import "./Hero.css";
import {Link} from "react-scroll";
import {IoIosArrowRoundForward} from "react-icons/io";

const Hero = () => {
    const icon_size = 30;

    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>¡Jesús es la respuesta a tu necesidad!</h1>
                <p>
                    Te esperamos en una de nuestras reuniones del fin de
                    semana. Un tiempo para adorar juntos y oír la Palabra de
                    Dios.
                </p>
                <Link
                    to="horarios"
                    smooth={true}
                    offset={-210}
                    duration={500}
                    className="btn"
                >
                    Ver Horarios <IoIosArrowRoundForward size={icon_size}/>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
