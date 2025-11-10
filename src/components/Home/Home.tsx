import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Horarios from "../Horarios/Horarios";
import Title from "../Title/Title";
import Radio from "../Radio/Radio.tsx";
import { useTranslation } from "react-i18next";

interface HomeProps {
    path?: string;
}

const Home = (_props: HomeProps) => {
    const { t } = useTranslation();

    return (
        <div>
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

export default Home;
