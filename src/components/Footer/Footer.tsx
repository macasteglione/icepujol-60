import "./Footer.css";
import { FaFacebook, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const icon_size = 25;

    return (
        <footer>
            <div className="footer-content">
                <h3>ICE-PM</h3>
                <p>
                    Somos una Iglesia centrada en Jesucristo y su Palabra.
                    Llevamos a nuestros miembros a expresar el objetivo bíblico
                    de vivir para Dios y para los demás.
                </p>
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
                <p>ICE-PM &copy; 2024. Puerto Madryn, Argentina.</p>
            </div>
        </footer>
    );
};

export default Footer;
