import "./About.css";
import aboutImg from "../../assets/about1.jpeg";
import { useTranslation } from "react-i18next";
import { route } from "preact-router";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  const { t } = useTranslation();
  const icon_size = 30;

  const handleConfesionClick = () => {
    route("/confesion-de-fe");
  };

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
        <button className="btn" onClick={handleConfesionClick}>
          {t("viewConfesion")} <IoIosArrowRoundForward size={icon_size} />
        </button>
      </div>
    </div>
  );
};

export default About;
