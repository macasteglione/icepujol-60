import "./About.css";
import aboutImg from "../../assets/about1.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about">
            <div className="about-left">
                <img src={aboutImg} alt="About" className="about-img" />
            </div>
            <div className="about-right">
                <h3>{t("aboutTitle")}</h3>
                <h2>{t("aboutSubtitle")}</h2>
                <p>{t("aboutText1")}</p>
                <p>{t("aboutText2")}</p>
                <p>{t("aboutText3")}</p>
            </div>
        </div>
    );
};

export default About;
