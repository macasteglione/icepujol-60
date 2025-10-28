import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.svg";
import { useEffect, useState, useRef } from "preact/hooks";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const menuIconSize = 30;
    const { t } = useTranslation();
    const navRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });

        // Agregar event listener para cerrar el menú al hacer clic fuera
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !(navRef.current as any).contains(event.target)) {
                setMobileMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup del event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    };

    // @ts-ignore
    return (
        <nav ref={navRef} className={`container ${sticky ? "dark-nav" : ""}`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500}>
                        <p>{t("navbarInicio")}</p>
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={-150} duration={500}>
                        <p>{t("navbarSobreNosotros")}</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="horarios"
                        smooth={true}
                        offset={-210}
                        duration={500}
                    >
                        <p>{t("navbarActividades")}</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="radio"
                        smooth={true}
                        offset={-210}
                        duration={500}
                    >
                        <p>{t("navbarRadio")}</p>
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-260}
                        duration={500}
                    >
                        <p>{t("navbarContacto")}</p>
                    </Link>
                </li>
                <li>
                    <a
                        href="https://donaronline.org/ice-puerto-madryn/donacion-iglesia-cristiana-evangelica"
                        className="btn"
                    >
                        {t("navbarDonativos")}
                    </a>
                </li>
            </ul>
            <div className="menu-icon" onClick={toggleMenu}>
                <IoMenu size={menuIconSize} />
            </div>
        </nav>
    );
};

export default Navbar;
