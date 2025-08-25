import "./Hero.css";
import { Link } from "react-scroll";
import { IoIosArrowRoundForward } from "react-icons/io";
import "../../i18n";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const icon_size = 30;
    const { t } = useTranslation();

    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>{t("heroTitle")}</h1>
                <p>
                    {t("heroSubtitle")}
                </p>
                <Link
                    to="horarios"
                    smooth={true}
                    offset={-210}
                    duration={500}
                    className="btn"
                >
                    {t("heroTimetables")} <IoIosArrowRoundForward size={icon_size} />
                </Link>
            </div>
        </div>
    );
};

export default Hero;
