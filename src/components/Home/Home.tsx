import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Horarios from "../Horarios/Horarios";
import Title from "../Title/Title";
import Radio from "../Radio/Radio.tsx";
import SEO from "../SEO/SEO";
import { useTranslation } from "react-i18next";

interface HomeProps {
    path?: string;
}

const Home = (_props: HomeProps) => {
    const { t } = useTranslation();

    return (
        <div>
            <SEO
                title={t("pageTitle")}
                description="Somos una Iglesia Cristiana centrada en Jesucristo y su Palabra. Llevamos a nuestros miembros a expresar el objetivo bíblico de vivir para Dios y para los demás."
                keywords="ice-pm, icepm, iglesia cristiana evangelica, iglesia, cristianismo, iglesia cristiana, jovenes, adolescentes, campamentos, grupos de jovenes, actividades, juegos, reuniones, alabanza, musica, coro, amistad, familia, fe, creencia, eventos, eventos especiales, iglesia evangelica, estudio biblico, biblia, ministerio, espiritualidad, dios, jesucristo, jesus, oracion, puerto madryn, argentina"
                ogTitle="Iglesia Cristiana Evangélica - Puerto Madryn"
                ogDescription="Somos una Iglesia Cristiana centrada en Jesucristo y su Palabra. Llevamos a nuestros miembros a expresar el objetivo bíblico de vivir para Dios y para los demás."
                ogImage="https://ice-pm.com/logo-dark.svg"
                canonical="https://ice-pm.com/"
            />
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
