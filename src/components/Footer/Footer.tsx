import { useTranslation } from "react-i18next";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.svg";

const Footer = () => {
  const { t } = useTranslation();
  const icon_size = 25;

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={logo} alt="ICE Logo" />
            <h3>{t("footerTitle")}</h3>
          </div>
          <p className="footer-description">{t("footerDescription")}</p>
        </div>

        <div className="footer-section">
          <h4>{t("footerContactTitle")}</h4>
          <div className="footer-contact">
            <div className="contact-item">
              <FaMapMarkerAlt size={18} />
              <p>Pujol 60, Puerto Madryn, Chubut</p>
            </div>
            <div className="contact-item">
              <FaPhone size={18} />
              <p>+54 9 280 507-1112</p>
            </div>
            <div className="contact-item">
              <FaEnvelope size={18} />
              <p>contacto@ice-pm.com</p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>{t("footerFollowTitle")}</h4>
          <ul className="socials">
            <li>
              <a href="https://www.facebook.com/icepm.oficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={icon_size} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/icepm_oficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={icon_size} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@icepm_oficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube size={icon_size} />
              </a>
            </li>
            <li>
              <a href="https://open.spotify.com/show/0JW3aJOV5cHZtfEcaxyTFd" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <FaSpotify size={icon_size} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footerRights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
