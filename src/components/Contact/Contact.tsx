import "./Contact.css";
import messageIcon from "../../assets/msg-icon.png";
import { useRef, useState } from "preact/compat";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


const Contact = () => {
    const { t } = useTranslation();
    const [result, setResult] = useState("");
    const [token, setToken] = useState<any>(null);
    const captcha = useRef<HCaptcha>(null);

    const icon_size = 30;
    const icon_color = "#082444"

    const onSubmit = async (event: any) => {
        event.preventDefault();

        if (token) {
            setResult(t("contactCaptchaSending"));
            const formData = new FormData(event.target);

            formData.append("access_key", import.meta.env.VITE_WEB3FORMS);
            formData.append("h-captcha-response", token);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult(t("contactCaptchaSuccess"));
                event.target.reset();
                captcha.current?.resetCaptcha();
                setToken(null);
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } else setToken(false);
    };

    // @ts-ignore
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>
                    {t("contactSendUsAMessage")}
                    <img src={messageIcon} alt="Message Icon" />
                </h3>
                <p>{t("contactDescription")}</p>
                <ul className="icon-socials">
                    <li>
                        <IoIosMail size={icon_size} color={icon_color} />
                        <a
                            href="mailto:icepuertomadryn@gmail.com"
                            target="_blank"
                        >
                            icepuertomadryn@gmail.com
                        </a>
                    </li>
                    <li>
                        <FaWhatsapp size={icon_size} color={icon_color} />
                        <a
                            href="https://wa.me/message/4Y5M6OZDSN6EN1"
                            target="_blank"
                        >
                            +54 9 280 507-1112
                        </a>
                    </li>
                    <li>
                        <FaLocationDot size={icon_size} color={icon_color} />
                        <a
                            href="https://maps.app.goo.gl/FPFBwp9jTRPLLM7KA"
                            target="_blank"
                        >
                            Pujol 60, Puerto Madryn
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>{t("contactName")}</label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder={t("contactNamePlaceholder")}
                        required
                    />
                    <label>{t("contactPhone")}</label>
                    <input
                        type="tel"
                        name="telefono"
                        placeholder={t("contactPhonePlaceholder")}
                        required
                    />
                    <label>{t("contactMessage")}</label>
                    <textarea
                        name="mensaje"
                        rows={6}
                        placeholder={t("contactMessagePlaceholder")}
                        required
                    ></textarea>
                    <div className="recaptcha">
                        <HCaptcha
                            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2" // free sitekey para web3forms
                            onVerify={(token) => setToken(token)}
                            onExpire={() => setToken(null)}
                            reCaptchaCompat={false}
                            ref={captcha}
                        />
                    </div>
                    {token === false && (
                        <div className="error-captcha">
                            {t("contactCaptchaError")}
                        </div>
                    )}
                    <button type="submit" className="btn dark-btn">
                        {t("contactMessageSubmit")} <IoIosArrowRoundForward size={icon_size} />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
