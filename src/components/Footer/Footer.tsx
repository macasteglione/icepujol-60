import { useTranslation } from "react-i18next";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const { t } = useTranslation();
    const icon_size = 25;

    return (
        <footer>
            <div className="footer-content">
                <h3>{t("footerTitle")}</h3>
                <p>{t("footerDescription")}</p>
                <ul className="socials">
                    <li>
                        <a
                            href="https://www.facebook.com/icepm.ok/"
                            target="_blank"
                        >
                            <FaFacebook size={icon_size} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/icepm_ok/"
                            target="_blank"
                        >
                            <FaInstagram size={icon_size} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.youtube.com/@icepm_ok"
                            target="_blank"
                        >
                            <FaYoutube size={icon_size} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://open.spotify.com/show/0JW3aJOV5cHZtfEcaxyTFd"
                            target="_blank"
                        >
                            <FaSpotify size={icon_size} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>{t("footerRights")}</p>
            </div>
        </footer>
    );
};

export default Footer;
