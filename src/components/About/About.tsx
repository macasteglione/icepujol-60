import "./About.css";
import aboutImg from "../../assets/about.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={aboutImg} alt="About" className="about-img" />
            </div>
            <div className="about-right">
                <h3>SOBRE NOSOTROS</h3>
                <h2>Iglesia Cristiana Evangélica</h2>
                <p>
                    Esta Iglesia es la continuidad del testimonio instaurado por
                    los pioneros que habitaron estas tierras a principios del
                    siglo pasado. Hoy en día somos una congregación
                    intergeneracional de hijos de Dios, que aman a Jesucristo y
                    a los demás.
                </p>
                <p>
                    Somos salvos por gracia mediante la obra de Jesús en la
                    cruz. Queremos compartir con cuantos quieran, a que puedan
                    creer en el Señor Jesucristo y ser salvos por la eternidad.
                    'Cree en el Señor Jesucristo y serás salvo, tú y tu casa.'
                    Hechos 16:31.
                </p>
                <p>
                    Puede consultar nuestros horarios y ver los días en que nos
                    reunimos para celebrar la bondad de Dios en nosotros,
                    aprender de La Palabra de Dios juntos y también animarnos
                    unos a otros, a medida que tratamos de extender el amor de
                    Dios a nuestra comunidad y sus alrededores.
                </p>
            </div>
        </div>
    );
};

export default About;
