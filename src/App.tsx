import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Horarios from "./components/Horarios/Horarios";
import Title from "./components/Title/Title";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Radio from "./components/Radio/Radio.tsx";
import { useEffect } from "preact/hooks";
import "./i18n.ts";
import { useTranslation } from "react-i18next";

const App = () => {
    const { i18n, t } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(navigator.language);
        document.title = t("pageTitle");
    }, [i18n.language]);

    return (
        <div>
            <SpeedInsights />
            <Navbar />
            <Hero />
            <div className="container">
                <About />
                <Title subtitle={t("horariosTitle")} title={t("horariosSubtitle")} />
                <Horarios />
                <Title subtitle={t("radioTitle")} title={t("radioSubtitle")} />
                <Radio sourceRef="https://stream.ice-pm.com/play" />
                <Title subtitle={t("contactTitle")} title={t("contactSubtitle")} />
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default App;
