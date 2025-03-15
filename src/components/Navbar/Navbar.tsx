import "./Navbar.css";
import menuIcon from "../../assets/menu-icon.png";
import logo from "../../assets/logo.svg";
import {useEffect, useState} from "preact/hooks";
import {Link} from "react-scroll";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };

    return (
        <nav className={`container ${sticky ? "dark-nav" : ""}`}>
            <img src={logo} alt="Logo" className="logo"/>
            <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500}>
                        <p>Inicio</p>
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={-150} duration={500}>
                        <p> Sobre Nosotros</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="horarios"
                        smooth={true}
                        offset={-210}
                        duration={500}
                    >
                        <p>Actividades</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="radio"
                        smooth={true}
                        offset={-210}
                        duration={500}
                    >
                        <p>Radio</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-260}
                        duration={500}
                    >
                        <p>Contáctanos</p>
                    </Link>
                </li>
                <li>
                    <a
                        href="https://donaronline.org/ice-puerto-madryn/donacion-iglesia-cristiana-evangelica"
                        className="btn"
                    >
                        Donativo
                    </a>
                </li>
            </ul>
            <img
                src={menuIcon}
                alt="Menu Icon"
                className="menu-icon"
                onClick={toggleMenu}
            />
        </nav>
    );
};

export default Navbar;
