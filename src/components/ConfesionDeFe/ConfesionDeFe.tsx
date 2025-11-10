import "./ConfesionDeFe.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "preact/hooks";
import { IoArrowUpCircle } from "react-icons/io5";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SEO from "../SEO/SEO";

interface ConfesionDeFeProp {
  path?: string;
}

const ConfesionDeFe = (_props: ConfesionDeFeProp) => {
  const { t } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <SEO
        title={`${t("confesionTitle")} - ICE-PM | Puerto Madryn`}
        description="Nuestra confesión de fe completa describe nuestras creencias fundamentales, principios congregacionales, raíces históricas e identidad doctrinal como Iglesia Cristiana Evangélica."
        keywords="confesion de fe, doctrina cristiana, creencias evangelicas, principios congregacionales, identidad doctrinal, iglesia cristiana, hermanos, movimiento de los hermanos, puerto madryn, ice-pm"
        ogTitle={`${t("confesionTitle")} - ICE-PM`}
        ogDescription="Nuestra confesión de fe completa describe nuestras creencias fundamentales, principios congregacionales, raíces históricas e identidad doctrinal como Iglesia Cristiana Evangélica."
        ogImage="https://ice-pm.com/logo-dark.svg"
        canonical="https://ice-pm.com/confesion-de-fe"
      />
      <Navbar />
      <div className="confesion-container">
        <div className="confesion-content">
          <h1 className="confesion-title">{t("confesionTitle")}</h1>

          {/* Índice de contenidos */}
          <div className="table-of-contents">
            <h3>{t("tableOfContents")}</h3>
            <ul>
              <li>
                <a onClick={() => scrollToSection("creemos")}>
                  En esto creemos
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("principios")}>
                  Principios Congregacionales
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("raices")}>
                  Raíces y Propósitos
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("identidad-historica")}>
                  Identidad Histórica
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("movimiento")}>
                  El movimiento de los Hermanos
                </a>
              </li>
              <li>
                <a onClick={() => scrollToSection("identidad-doctrinal")}>
                  Identidad Doctrinal
                </a>
              </li>
            </ul>
          </div>

          <div className="confesion-text">
            <section id="creemos">
              <h2>En esto creemos</h2>

              <h3>La Biblia, la Palabra de Dios</h3>
              <p>
                Creemos en <strong>un Solo Dios</strong>, creador de todas las
                cosas y por quien ellas subsisten, ante quién debemos dar cuenta
                de nuestra vida y obra.
              </p>
              <p>
                Creemos en el <strong>Señor Jesucristo</strong> que es:{" "}
                <em>Verdadero Dios, segunda persona de la Trinidad</em>, es
                decir, <strong>Hijo unigénito de Dios</strong>;{" "}
                <strong>único Redentor de la humanidad</strong>; única cabeza de
                su Iglesia, y único jefe de su pueblo redimido;{" "}
                <strong>único mediador entre Dios y los hombres</strong>.
              </p>
              <p>
                Creemos en el <strong>Espíritu Santo</strong>, que juntamente
                con Dios Padre y Dios Hijo es <em>verdadero Dios eterno</em>, y
                que estas{" "}
                <strong>
                  tres personas constituyen una sola y perfecta unidad
                </strong>
                .
              </p>
              <p>
                Creemos que el{" "}
                <strong>
                  sacrificio del Señor Jesucristo en la cruz es completo y
                  suficiente
                </strong>{" "}
                para reconciliar a las almas con Dios; que él{" "}
                <strong>resucitó y vive para siempre</strong>, y esperamos su
                muy inminente regreso.
              </p>
              <p>
                Creemos que la <em>bienaventurada virgen María</em>, madre de
                Jesús, fue la mujer más altamente favorecida por Dios y bendita
                entre las mujeres por ser ella medio para dar a luz al Hijo de
                Dios forma humana, y como tal la aceptamos y creemos todo lo que
                dice el Nuevo Testamento.
              </p>
              <p>
                Creemos que la <strong>Santa Biblia</strong>, libro inspirado
                por Dios mediante la acción del Espíritu Santo, es el{" "}
                <strong>
                  único fundamento, la única regla de fe y doctrina
                </strong>{" "}
                para el verdadero cristiano. Creemos que cada persona tiene el
                derecho a leerla y estudiarla, como asimismo que tiene el deber
                de sus santas enseñanzas.
              </p>
              <p>
                Creemos que la{" "}
                <strong>
                  confesión de los pecados debe hacerse solo a Dios
                </strong>
                , contra quien hemos pecado, y que Él otorga perdón verdadero a
                todos los que se allegan a Él con sincero arrepentimiento y fe
                en el Señor Jesucristo.
              </p>
              <p>
                Creemos en el <strong>bautismo por inmersión</strong>, en su
                significado bíblico de identificación con la muerte y
                resurrección del Señor Jesucristo, que es un acto de obediencia
                que puede realizar toda persona consiente de sus actos, previo
                reconocimiento del Señor Jesucristo como Salvador personal.
              </p>
              <p>
                Creemos que este acto es un{" "}
                <em>
                  testimonio de la identificación consciente y real del
                  verdadero cristiano con su Señor
                </em>
                .
              </p>
              <p>
                Creemos que la <strong>resurrección de los muertos</strong>, en
                la eterna felicidad en el cielo, de los que creen en Cristo como
                su Salvador personal, y en la eterna perdición en el infierno de
                los que rechazan conscientemente y deliberadamente el amor y la
                gracia de Dios ofrecida por medio del Señor Jesucristo.
              </p>
              <p>
                <strong>DECLARAMOS</strong> que nuestras creencias están basadas{" "}
                <strong>exclusivamente en la Biblia</strong>, libro inspirado
                por Dios, en su canon completo (66 libros), y que nuestra
                prédica se substancia únicamente en lo que ella dice.
              </p>
              <p className="source">
                Fuente: <em>"Entorno a Nuestros Primeros Pasos"</em> Carlos A.
                Bisio. Editorial LEC 1992
              </p>
            </section>

            <section id="principios">
              <h2>Principios Congregacionales</h2>
              <p>
                <strong>No aceptamos ningún nombre</strong> que no sea común e
                inclusivo de todos los creyentes, y por lo tanto{" "}
                <strong>
                  rehusamos reconocer denominaciones originadas en los hombres
                </strong>
                .
              </p>
              <p>
                Reconocemos y ponemos en práctica la{" "}
                <em>verdad escritural de la unidad de la Iglesia de Dios</em>,
                que es <strong>cuerpo de Cristo</strong>, del cual Él es la
                cabeza, y cada creyente un miembro.
              </p>
              <p>
                <strong>
                  No aceptamos ninguna autoridad sino la de la Palabra de Dios
                </strong>
                , tanto para la manera de reunirnos como para el mantenimiento
                del orden reverente en nuestras reuniones.
              </p>
              <p>
                Somos <strong>inflexiblemente leales</strong> a la persona y
                obra del Señor Jesucristo.
              </p>
              <p>
                Recibimos y damos la diestra de comunión en las asambleas a{" "}
                <strong>
                  todos aquellos a quienes Cristo ha recibido en la Iglesia
                </strong>
                .
              </p>
              <p>
                Observamos en manera escritural las{" "}
                <strong>ordenanzas dadas a la Iglesia</strong> por el Señor
                Jesucristo.
              </p>
              <p>
                Gozamos de libertad para el{" "}
                <strong>ejercicio del sacerdocio de todos los creyentes</strong>{" "}
                y damos lugar para el desarrollo de todos los{" "}
                <em>dones vigentes dados por Cristo a la Iglesia</em>.
              </p>
              <p>
                Nuestra <strong>actividad evangelística</strong>, está gobernada
                por los principios encontrados en la palabra de Dios.
              </p>
              <p className="source">
                Fuente: <em>"Entorno a Nuestros Primeros Pasos"</em> Carlos A.
                Bisio. Editorial LEC 1992
              </p>
            </section>

            <section id="raices">
              <h2>Raíces y Propósitos</h2>
              <p>
                (Extraído textual de la revista) Abocados a la elaboración de
                los propósitos de la edición de esta serie de fascículos
                coleccionables -- que, entendemos, serán de bendición a las
                distintas generaciones del pueblo de Dios -- dimos con este
                Editorial del Sendero del Creyente, octubre de 1935, p. 225-226.
                Fruto de la pluma del recordado hermano Jorge French evidencia
                que, los propósitos que nos animan y preocupan, no son el
                resultado de vivencias partidistas presentes. Demuestra que el
                movimiento conocido como "los hermanos" recurrentemente se ha
                visto en la situación de reexaminar sus orígenes: esto es el
                mantener un continuo vínculo con sus raíces. No se pretende dar
                origen a algo nuevo, sino más bien a través de un fuerte vínculo
                con el tallo escritural desarrollado en el siglo pasado llegar
                hasta su enraizamiento en la época apostólica.
              </p>
              <p>
                Hace mucho tiempo que estábamos pensando en la conveniencia,
                casi la necesidad, de invitar la atención de los hermanos
                sobreveedores en las Asambleas que se reúnen al Nombre del Señor
                Jesucristo, acerca de la importancia de impartir enseñanza en
                las iglesias respecto a la razón de la existencia de las mismas;
                vale decir, la razón porque los creyentes que las componen no se
                hacen miembros de otras entidades religiosas ya existentes.
              </p>
              <p>
                Dios nos ha dado, amplia enseñanza en su Santa Palabra sobre el
                particular e impone la responsabilidad sobre los hermanos
                sobreveedores que el mismo ha colocado en cada Asamblea (Hechos
                20:28) de ser buenos dispensadores de las verdades divinas, que
                tracen bien la palabra de verdad (2 Tim. 2:15) y ¡ay! de aquel
                que, ocupan do el lugar, no cumpla los propósitos de Dios en
                este sentido, dejando a la grey a la merced de cualquier viento
                de doctrina, equivocada o falsa, que soplare. No habrá excusa
                posible. Deben los hermanos sobreveedores conocer, a fondo, la
                base de la iglesia, su constitución, el orden en ella, sus
                principios de congregación, su vocación, su presente y su
                futuro. Pero además de obtener estos conocimientos mediante el
                detenido estudio de las Sagradas Escrituras deberán tener la
                facultad para expresar con sencillez y claridad evidente esas
                verdades para la buena comprensión de todos.
              </p>
              <p>
                Igualmente deberán preparar su corazón ante Dios de manera que
                sea tierno y cariñoso para apacentar (no ahuyentar) la grey.
              </p>
              <p>
                No nos olvidemos que existe un doble y grave peligro: de un lado
                la falta de enseñanza de manera que los creyentes nada sepan
                respecto a los principios de reunión, y del otro, un espíritu
                tan exclusivo que, aunque se niegue en palabra, en hecho se
                constituye otra de las tantas sectas. Hay que vigilar en contra
                de ambos peligros o errores tan desagradables para Dios.
              </p>
              <p>
                Permítasenos decir que no aceptamos el apodo de "Hermanos
                libres" con que se nos ha tildado. Es interesante e instructivo
                notar que, en el informe parlamentario del censo en Inglaterra,
                año 1851, en el capítulo sobre "Culto religioso" aparece la
                siguiente definición de las iglesias que el informe llama "Los
                Hermanos", y dice:
              </p>
              <p>
                "Aquéllos a quienes se aplica este apodo lo reciben solamente
                como descriptivo de su estado individual como cristianos, y no
                como un distintivo, o nombre, por el cual podrían ser conocidos
                como una secta religiosa distinta.
              </p>
              <p>
                No tiene ninguna peculiaridad doctrinal común u organización
                eclesiástica definitiva que tengan la apariencia de una
                comunidad separada, pero más bien del hecho que, mientras todos
                los demás cristianos están identificados con alguna sección
                peculiar de la iglesia de Dios, las personas conocidas como
                "hermanos" rehúsan absolutamente de ser identificados con
                ninguna (agrupación).
              </p>
              <p>
                "Su existencia es, en hecho, una protesta contra toda fracción
                sectaria y la base principal de su separación de las diferentes
                entidades, a las cuales la mayoría de ellos ha pertenecido
                alguna vez, es que las practicas por las cuales, en todas las
                sectas, la comunión de verdaderos creyentes entre si es
                obstaculizado o impedido, no tienen apoyo en la Palabra de Dios.
                Ellos (los hermanos) no ven ninguna razón valedera porque la
                Iglesia (compuesta de todos los verdaderos creyentes), que
                realmente es una, no sea visiblemente unida, teniendo como su
                única unión de comunión y barrera de exclusión, la recepción o
                el rechazo, de aquellas vitales verdades por las cuales se
                distinguen el cristiano del incrédulo... Los "hermanos", por lo
                tanto, pueden ser representados como compuestos de todos
                aquellos que, profesando en forma práctica todas las verdades
                esenciales a la salvación, reconocen que cada uno, por ese solo
                hecho, es un verdadero miembro de la única iglesia. Una
                diferencia de opinión sobre cualquier otro asunto no se
                considera como suficiente base para separación".
              </p>
              <p>
                Creemos que esta es una descripción muy acertada de nuestra
                posición y debiéramos tener mucho cuidado de no proceder ni
                enseñar nada que dé a ninguno motivo para decir lo contrario.
              </p>
              <p>
                No tenemos lugar en este corto articulo para entrar de Lleno en
                un tema tan vasto, pero lo encomendamos a la detenida
                consideración de todos los hermanos en general y de los
                sobreveedores en particular".
              </p>
              <p>Geo. H. Frenc</p>
              <p className="source">
                Publicación eventual de la Comisión de Conferencias de Buenos
                Aires y alrededores -- junio 1997
              </p>
            </section>

            <section id="identidad-historica">
              <h2>Identidad Histórica</h2>
              <p className="bible-ref">2 Samuel 23:15-17</p>
              <p>
                Las Asambleas están atravesando un momento difícil en Argentina
                y en otras partes también.
              </p>
              <p>
                Por un lado, iglesias mezcladas, vinculadas con el
                denominacionalismo, confundidas, divididas, sin objetivos,
                afectadas por liviandad, superficialidad y mundanalidad.
              </p>
              <p>
                Por otro, un grupo que trabaja y puja por no perder su tesoro
                más precioso: la continua identificación con los principios
                escriturales de reunión y en base a ellos crecer y desarrollar
                su vida espiritual.
              </p>
              <p>
                Debemos volver a los principios que abrazaron los hermanos que
                dieron origen al movimiento espiritual que nos identifica, pero
                más, a los principios bíblicos que nos dieron identificación
                como Iglesias Cristianas y Evangélicas.
              </p>
              <p>
                Nos remontamos a 1820 cuando varios creyentes de Dublín
                (Irlanda), no conforme con las prácticas y doctrinas
                denominacionales buscaron un verdadero avivamiento. Así nació el
                movimiento de los hermanos, como una reactivación al insano
                denominacionalismo que existía.
              </p>
              <p>
                Este movimiento del Espíritu de Dios surgió en varios lugares
                simultáneamente. En Irlanda, Inglaterra, Italia y otras
                regiones.
              </p>
              <p>
                Entre los primeros hermanos podemos citar a E. Cronin, A. Roves,
                J. Bellet, J.N. Darb , C.H. Mackintosh, B. Newton, R. Chapman,
                E. Payne, Conde Guicciardini, T. Rosetti y otros.
              </p>
              <p>
                Las primeras iglesias funcionaron en las ciudades de Dublín,
                Plymouth y Bristol. En esta l última se destaca un gigante
                espiritual como fue J. Miller junto a E. Craik.
              </p>
              <p>
                Estos hermanos con espíritu obediente y sencillo, (muchos de
                ellos eruditos) buscaron escudriñar las Escrituras y descubrir
                la doctrina bíblica distorsionada por las denominaciones y
                formaron asambleas, "sin reglas", deseando solo obrar y seguir
                al Señor, que diera luz mediante su palabra. Dejaron nombres
                denominacionales para llamarse sencillamente como lo manda la
                Escritura, "hermanos" "santos" "cristianos" o "discípulos".
              </p>
              <p>
                En los comienzos mantenían comunión con otros hermanos que no
                pertenecieran al grupo de las asambleas, siempre que fueran
                sanos en la fe, y sostenían que la mesa del Señor era amplia
                para todos los creyentes, sin exclusiones.
              </p>
              <p>
                Este principio, especialmente sostenido por la iglesia de
                Brístol, hizo que les llamaran "hermanos neutrales o abiertos",
                o "libres", separándose de aquellos que no aceptaban a otros
                creyentes por lo tanto eran "exclusivos'. . Esto ocurría
                alrededor de 1845.
              </p>
              <p>
                <strong>
                  ¿Cuáles fueron las principales doctrinas que redescubrieron o
                  ratificaron y son la base de las asambleas hasta hoy?
                </strong>
              </p>
              <ol>
                <li>
                  <strong>Las Escrituras</strong> como única base de fe y
                  conducta.
                </li>
                <li>
                  La <strong>deidad y supremacía</strong> de la persona del
                  Señor Jesús.
                </li>
                <li>
                  El <strong>bautismo</strong> como ordenanza solo para
                  creyentes y por inmersión.
                </li>
                <li>
                  La <strong>reunión del partimiento del pan</strong> cada
                  primer día de la semana.
                </li>
                <li>
                  La diferencia de <strong>dones en la asamblea</strong> y la
                  libertad que debe tener el Espíritu Santo para usarlos.
                </li>
                <li>
                  El <strong>sostén de los siervos de Dios</strong> con ofrendas
                  provenientes solo del pueblo de Dios.
                </li>
                <li>
                  La <strong>permanencia de la salvación</strong> en el
                  creyente.
                </li>
                <li>
                  La <em>"bienaventurada esperanza"</em> de la{" "}
                  <strong>venida del Señor Jesús</strong> y la fe premilenial,
                  (es decir la venida del Señor por los suyos anterior al
                  Milenio).
                </li>
                <li>
                  La <strong>comunión con hermanos e Iglesias sanas</strong> en
                  la fe, admitiendo en la mesa del Señor a hermanos de esas
                  características.
                </li>
                <li>
                  La <strong>reunión al solo nombre del Señor Jesús</strong>,
                  sin reconocer nombres denominacionales.
                </li>
                <li>
                  El{" "}
                  <strong>
                    gobierno de la iglesia mediante el consejo de ancianos
                  </strong>
                  .
                </li>
                <li>
                  La <strong>determinación de la disciplina</strong> por la
                  iglesia local y ministrada por sus ancianos.
                </li>
                <li>
                  La <strong>autonomía de cada iglesia local</strong>, sin
                  depender de un sínodo, ni ninguna cabeza visible, sino
                  directamente dependiendo del Señor.
                </li>
                <li>
                  Un <strong>espíritu evangelizador y misionero</strong>{" "}
                  pujante.
                </li>
              </ol>
              <p>
                Volvamos a esos principios, amándolos y obedeciéndolos, como
                identificación con aquellos a quienes les ha costado mucho
                transmitirlo hasta nosotros.
              </p>
              <p className="author">Autor: Eduardo Cartea</p>
            </section>

            <section id="movimiento">
              <h2>El movimiento de los Hermanos</h2>
              <p>
                Durante las dos primeras décadas del pasado siglo XIX, el
                Espíritu Santo produjo un avivamiento entre hombres y mujeres,
                que en el correr de los años recibirían el nombre de "Hermanos
                Libres ".
              </p>
              <p>
                Las grandes denominaciones protestantes, Anglicanos, Luteranos,
                Presbiterianos, Bautistas, Metodistas y otras estaban
                establecidas y organizadas, formando compartimentos estancos,
                con poca comunión entre ellas.
              </p>
              <p>
                Fue, en parte, como reacción a esa situación, que hermanos y
                hermanas de diferentes denominaciones volvieron a la sencillez
                del Nuevo Testamento, orando, leyendo la Biblia y más tarde,
                Partiendo el Pan juntos.
              </p>
              <p>
                Esta situación se hizo simultánea en diferentes lugares, de
                forma que es difícil determinar exactamente donde empezó. El
                movimiento fue autóctono en Irlanda, Inglaterra, Suiza francesa
                e Italia. Rápidamente se extendió a América del Norte,
                Australia, Nueva Zelanda y luego a muchos países de los cinco
                continentes, entre ellos España.
              </p>
              <p>
                Las Asambleas de Hermanos en la Suiza francesa se iniciaron a
                principios del siglo XIX y fueron el resultado directo del
                avivamiento que se produjo en la ciudad de Ginebra. La primera
                Iglesia independiente en la ciudad fue fundada en 1817 y tomó
                como nombre "Iglesia según la Palabra de Dios"; esta Iglesia
                reconocía a Pastores y Ancianos. En menos de diez años ya
                estaban establecidas doce o quince Iglesias semejantes en la
                Suiza francesa.
              </p>
              <p>
                La fecha comúnmente aceptada como inicio del movimiento en la
                Gran Bretaña es entre 1825-28, aunque se encuentran claros
                indicios de su gestación en diferentes lugares en fechas
                anteriores.
              </p>
              <p>
                En Italia, el movimiento fue autóctono, pero tuvo lugar con
                posterioridad y puede decirse que fue el resultado de volver a
                la sencillez del evangelio de algunos Valdenses del Piamonte. En
                1851 se convirtió el Conde Guicciardini, quien inició reuniones
                en Florencia. Por causa de la persecución tuvo que exiliarse en
                Inglaterra, donde fue recibido por las Asambleas de Hermanos. A
                partir del momento en que pudo regresar a Italia, las Asambleas
                en Italia guardaron una íntima relación con las de Gran Bretaña.
              </p>
              <p>
                En aquellas primeras y sencillas reuniones, lo que importaba era
                el "nuevo nacimiento" de los que se reunían, sin tener en cuenta
                la denominación de la que procedían, ni la forma en que habían
                sido bautizados (por aspersión o por inmersión).
              </p>
              <p>
                Se leía y estudiaba la Biblia sin los condicionantes de las
                escuelas teológicas, pero esto no quiere decir que esos primeros
                hermanos no tuviesen grandes y profundos conocimientos bíblicos.
              </p>
              <p>
                Algunos de ellos procedían del "Trinity College" de Dublín,
                otros eran auténticos eruditos en griego y hebreo, otros
                ejercían profesiones liberales con títulos universitarios en
                diferentes materias.
              </p>
              <p>
                Algunos pertenecían a la aristocracia y poseían títulos
                nobiliarios e importantes fortunas, otros eran obreros sin
                posesiones. Como su número iba en aumento empezaron a reunirse
                en garajes, en almacenes o en locales alquilados. Aunque no
                existía ninguna clase de organización que los aglutinase{" "}
                <strong>tenían rasgos comunes:</strong>
              </p>
              <ol>
                <li>
                  <strong>Un espíritu de comunión y fraternidad.</strong> Por
                  encima de todo lo que humanamente podía separar, lo que
                  prevalecía era la <em>unidad en Cristo</em>; todos los
                  "nacidos de nuevo" eran hermanos en Cristo.
                </li>
                <li>
                  <strong>El leer la Biblia, orar y tener reuniones</strong>,
                  sin necesidad de que fuesen presididas por un Pastor ordenado
                  y con determinados estudios.
                </li>
                <li>
                  <strong>
                    La gran importancia que se daba al libre ejercicio de los
                    dones del Espíritu Santo
                  </strong>
                  , sobre todo a los de enseñanza, de pastoreo y de
                  evangelización.
                </li>
                <li>
                  <strong>El Partimiento del Pan</strong> que se realizaba todos
                  los domingos y que era de libre participación para todos los
                  hermanos.
                </li>
                <li>
                  <strong>El sacerdocio universal</strong> de todo nacido de
                  nuevo, en la adoración, la oración y el testimonio.
                </li>
                <li>
                  <strong>
                    El volver a las profecías de la segunda venida de Cristo
                  </strong>
                  , que habían quedado un tanto olvidadas.
                </li>
                <li>
                  <strong>La importancia de la Iglesia local.</strong> Las
                  Asambleas tenían vida autónoma y estaban gobernadas por un
                  Consejo de Ancianos. Rápidamente el único bautismo que se
                  reconoció fue el de inmersión. Darby, antiguo pastor de la
                  Iglesia Anglicana, fue la excepción, al seguir reconociendo el
                  bautismo por aspersión.
                </li>
                <li>
                  <strong>La obra social.</strong> Son universalmente conocidos
                  los orfanatos de <em>Jorge Müller</em> y las escuelas que se
                  establecieron en muchos lugares.
                </li>
                <li>
                  <strong>La obra misionera.</strong> No solo evangelizaban en
                  sus ciudades y los alrededores, sino que muchos de ellos
                  también fueron a países lejanos para llevar el evangelio a
                  "todo el mundo" y a "toda criatura".
                </li>
              </ol>
              <p>
                El nombre de "hermanos" fue dado desde fuera del movimiento, ya
                que llamaban "hermano" a todo aquel que era "nacido de nuevo".
                El llamarse "Hermanos", con mayúscula y como signo distintivo,
                provocó y aun provoca muchas reticencias, porque los que
                iniciaron el movimiento no pensaban crear una nueva
                denominación.
              </p>
              <p>
                Dada la importancia que adquirió la Asamblea en la ciudad
                inglesa de Plymouth, que en quince años de vida llegó a tener
                más de mil miembros activos, al nombre "hermanos" se le añadió
                el apellido "de Plymouth": "Hermanos de Plymouth". Esta
                denominación ha quedado en desuso.
              </p>
              <p>
                El último domingo de 1845, a los veinte años de iniciarse el
                movimiento, tuvo lugar un cisma que lo dividió en dos partes
                bien diferenciadas; los de "comunión abierta", que había sido
                una de las características distintivas, y los de "comunión
                cerrada", que decidieron que sólo podían participar del
                Partimiento del Pan los que fuesen miembros de su círculo.
              </p>
              <p>
                John Nelson Darby (1800-1892), descendiente del Almirante
                Nelson, Pastor de la Iglesia Anglicana, a la que abandonó para
                incorporarse al "movimiento de los hermanos", fue un siervo de
                Dios de gran personalidad, erudición y profundos conocimientos
                bíblicos, aunque nunca llegó a renunciar al bautismo infantil
                por aspersión. Este siervo de Dios estuvo en la base y dio forma
                a los "Darbistas", "exclusivistas" o "Hermanos cerrados", tres
                nombres con los que se les conoce.
              </p>
              <p>
                John Nelson Darby mantenía la doctrina de "la apostasía de la
                Iglesia". Sostenía que la Iglesia, sin apóstoles ni sucesores de
                éstos, carecía de capacidad para reconocer a sus ministros. Por
                lo tanto, los verdaderos creyentes debían reunirse al margen de
                toda institución o estructura. Estos grupos separados, no sólo
                impartieron disciplina sobre individuos, sino también sobre
                Iglesias. Todo miembro de otra iglesia que no formase parte de
                su grupo también quedaba excluido de la Mesa del Señor.
              </p>
              <p>
                Así se formó el "circulo de asambleas", del cual Darby era la
                autoridad suprema y que como resultado de su extraordinaria
                firmeza se mantuvo unido hasta su muerte en 1882.
              </p>
              <p>
                Su influencia se dejó sentir mayormente en Inglaterra, en la
                Suiza francesa, donde efectuó una traducción de la Biblia que
                lleva su nombre, y en Alemania, donde participó en una
                traducción la Biblia al alemán, la Traducción Elberfeld. En
                España también se establecieron algunas Asambleas
                "exclusivistas", aunque hoy están en vía de extinción.
              </p>
              <p>
                Los "Hermanos cerrados" no crecieron. Recientemente, en Suiza y
                Alemania, bastantes de las Asambleas cerradas, han vuelto a la
                comunión de las Asambleas abiertas.
              </p>
              <p>
                Después de la división, las Asambleas abiertas continuaron con
                su ímpetu evangelístico y misionero.
              </p>
              <p>
                Tan paradójico como el cisma producido por Darby, fue la
                aparición en muchos países de una tendencia "cerrada" dentro de
                los "Hermanos abiertos". Esta tendencia, aunque no es tan
                cerrada como el "Darbismo exclusivista", produce tensiones y
                pone en peligro la comunión dentro del grupo.
              </p>
              <p>
                Al aceptar la etiqueta de "Hermanos abiertos", lo hacemos con
                profunda humildad, reconociendo que, si continuamos, no es por
                ningún mérito propio, sino solamente por la fidelidad y la
                Gracia de Dios.
              </p>
              <p>
                Junto con todos nuestros "hermanos", en minúscula, lleven la
                etiqueta que sea, proclamamos: "Al que nos amó, y nos lavó de
                nuestros pecados con su sangre... a Él sea la gloria y el
                imperio por los siglos de los siglos. Amén" (Ap. 1:5-6).
              </p>
              <p className="source">
                Fuente: Publicación conmemorativa del "125 Aniversario de las
                Asambleas de Hermanos en Cataluña" -- Església Evangèlica c/
                Terol 22
              </p>
            </section>

            <section id="identidad-doctrinal">
              <h2>Identidad Doctrinal</h2>
              <p>
                Si hay un asunto en que los hermanos, que dieron origen al
                movimiento del Espíritu Santo Llamado "las Asambleas" o de los"
                hermanos abiertos o libres" hicieron énfasis. fue en una genuina
                base escritural para las doctrinas que sustentaron y las
                practicas eclesiásticas y de vida cristiana que buscaron
                cumplir.
              </p>
              <p>
                Esto respondió a un auténtico deseo de volver al Libro de Dios,
                y hallar, no excusas bíblicas. sino principios bíblicos donde
                apoyar y justificar la fe y conducta de los creyentes.
              </p>
              <p>
                Los primeros hermanos, por identificarlos así, sintiéndose a
                disgusto ante doctrinas y prácticas de sus denominaciones -que
                no podían confrontar con las Escrituras-. buscaron reunirse
                sencillamente al Nombre del Señor y estudiar juntos La Palabra.
                Así surgió aquel bendito avivamiento.
              </p>
              <p>
                Siempre es así. En los tiempos bíblicos y post -bíblicos. los
                avivamientos surgieron como resultado de una autentica vuelta al
                Libro.
              </p>

              <h3>1. Principios Escriturales.</h3>
              <p>
                Los hermanos abrazaron una fe sencilla basada en principios
                escriturales, y sobre ellos elaboraron y sostuvieron un "cuerpo
                de doctrina".
              </p>
              <p>
                ¿Qué queremos decir con la expresión "principios escriturales"?
              </p>
              <p>
                Principios son leyes, reglas, normas, fundamentos, sobre los
                cuales se desarrolla la doctrina, y en este caso son
                esencialmente correctos, adoptados con conocimientos y
                resolución. Cuando un principio es correcto, lo es más allá del
                tiempo, el lugar, y las circunstancias.
              </p>
              <p>
                "Cuando hablamos de principios escriturales -dice P. Gibbs- nos
                referimos a principios que gozan del aval de la enseñanza
                general de la Palabra de Dios en sus preceptos y también en su
                práctica".
              </p>
              <p>Es importante destacar aquí algunas cosas.</p>
              <p>
                1.1. La Biblia es un libro de principios. No es un código moral.
                No satisface literalmente todas las inquietudes de la razón
                humana.
              </p>
              <p>
                No contiene todos los temas explícitamente. Pero es un libro de
                principios, y éstos, son el reflejo del carácter de Dios, cuando
                el creyente conoce estos principios, conoce la mente y la
                voluntad de Dios en todas las circunstancias de la vida.
              </p>
              <p>
                1.2. Si hablamos de "principios escriturales" que gozan del
                respaldo de toda la Escritura, estamos manifestando la confianza
                en la totalidad de la doctrina revelada en el Antiguo y en el
                Nuevo Testamento, sin excluir ningún texto, ningún párrafo.
              </p>
              <p>
                En general las herejías o doctrinas de error están basadas en un
                contenido parcial de la Escritura, soslayando pasajes que puedan
                contradecirlas.
              </p>
              <p>
                Cada declaración bíblica debe interpretarse a la luz de todas
                las demás escrituras que tratan el mismo tema. Esto es de vital
                importancia.
              </p>
              <p>
                Hemos de tener en cuenta que "los hermanos" no adoptaron ningún
                credo que sirviera de fundamento denominacional, como es común
                en diversos grupos confesionales y paraeclesiásticos. En
                general, los credos son limitados. incompletos, y muchas veces
                no exponen ideas con la claridad suficiente para que sirvan de
                regla común.
              </p>
              <p>
                1.3. Si hablamos de "principios escriturales" estamos
                sosteniendo nuestra absoluta y única confianza en las Sagradas
                Escrituras creyendo que ellas son completas, infalibles,
                inerrantes y autoritarias.
              </p>
              <p>
                Hoy existe un peligro, y es el de la complementación de la
                verdad revelada con la experiencia. En general. el movimiento
                carismático se orienta experimentalmente. La Biblia se usa para
                apoyar la experiencia de sus miembros, y esas experiencias se
                toman como reglas de fe.
              </p>
              <p>
                La fórmula -dice G. Gardiner en su libro La Catástrofe de
                Corinto, Clie, p. 56-" he tenido una experiencia", "En la Biblia
                encuentro experiencias como la mía". "Por tanto, mi experiencia
                es bíblica". Y agrega, "[...] es una formula peligrosamente
                engañosa. ¿por qué?
              </p>
              <p>1) Las experiencias son, a menudo. contradictorias [... ]</p>
              <p>
                2) La experiencia puede ser emocionalmente poderosa. pero también
                peligrosamente engañosa [...]
              </p>
              <p>
                3) Si una experiencia concuerda con las SS. EE., bien. Pero si
                no está en armonía con la Palabra revelada, hay que abandonarla
                [...]"
              </p>

              <h3>2. Interpretación de las Escrituras.</h3>
              <p>
                Los hermanos descubrieron una recta hermenéutica y una sana
                exegesis para la interpretación y enseñanza de las Escrituras.
              </p>
              <p>
                ¿Qué es hermenéutica? Es un término que significa
                interpretación. Así que, respecto a la Biblia, se refiere a las
                normas de interpretación del texto bíblico.
              </p>
              <p>
                Exegesis, forma parte de la hermenéutica y es la aplicación de
                esas normas de interpretación, estableciendo el correcto
                significado do los términos bíblicos.
              </p>
              <p>
                Saber esto tiene mucha importancia, sobre todo en los días como
                los que vivimos, en los que el enemigo está tan ocupado no en
                destruir las Escrituras, perseguirlas, negar su lectura, como en
                otras épocas, sino más bien, y con mejores resultados para él.
                torciéndolas. interpretándolas erróneamente. generando, a través
                de métodos muy astutos, doctrinas de error que hacen que muchos
                sean engañados y se desvíen de la verdad (2 Pedro 3:16).
              </p>
              <p>
                Debemos cuidar mucho la lectura de libros hoy en día, ya que, si
                no se tiene buen discernimiento escritural, puede darse como
                correcto lo que uno lee comúnmente y así errar. Debemos conocer
                bien a los autores y las editoriales, para saber a qué línea
                doctrinal responde un libro determinado.
              </p>
              <p>
                Hay varias formas de interpretar las Escrituras, o, dicho de
                otra manera, hay distintos tipos de hermenéutica. Mencionaremos
                dos de ellas: la literal, y la alegórica.
              </p>
              <p>
                • Los hermanos siguieron y enseñaron la interpretación literal,
                normal o llana de la Palabra. Y esto tiene gran importancia. Si
                no se tiene como regla interpretar las Escrituras en su sentido
                más normal y literal se puede Llegar, fácilmente, a conclusiones
                caprichosas de acuerdo a quién las interprete.
              </p>
              <p>
                • Así, pues, el lenguaje bíblico es sencillo y directo y aunque
                contenga figuras, símbolos. tipos y aun alegorías, no debe
                tomarse siempre como lenguaje figurativo, sino, en general. en
                forma literal.
              </p>
              <p>
                • Ahora bien, los hermanos descubrieron la tipología más rica en
                las Sagradas Escrituras -especialmente en el Antiguo Testamento-
                llena de preciosas lecciones que surgen de pasajes del Nuevo y
                explican aquellos. Por ejemplo ¿quién que los haya leído no
                vibró con la tipología del Pentateuco explicada en los Libros de
                C. H. Mackintosh?, ( uno de los primeros hermanos de las
                Asambleas)
              </p>
              <p>
                • ¿Que es un tipo? Es una figura. un símbolo. comúnmente hallado
                en el Antiguo Testamento, que tiene su antitipo, es decir su
                explicación, su realidad en el Nuevo Testamento, por ejemplo, el
                cordero de la Pascua, como tipo del Señor Jesús (I Corintios
                5:7) o el Tabernáculo. o las Fiestas de Jehová, etc.
              </p>
              <p>
                La diferencia entre alegoría y tipo es que este, a diferencia de
                aquella, se ajusta a la explicación de la doctrina que encierra,
                sin forzar el contexto (ejemplo Hebreos 9:23-24). En realidad,
                toda la carta a los Hebreos explica la riquísima tipología del
                Tabernáculo y los sacrificios del culto aarónico, aplicando su
                lección espiritual para nosotros, en cuanto a la obra redentora,
                santificadora e intercesora de nuestro Gran Sumo Sacerdote.
                Cristo Jesús.
              </p>
              <p>
                • Hay símbolos legítimos de la Palabra de Dios. sobre los que se
                puede desarrollar -- como decía Spurgeon- una "imaginación
                santificada". Pero no debemos caer en el error de espiritualizar
                todo. Hay pasajes que son especialmente escritos para Israel,
                otros para los gentiles, y otros para la Iglesia del Señor.
              </p>
              <p>
                • Es necesario tener en cuenta que el tipo, la alegoría, el
                símbolo. las parábolas, y las demás figuras retoricas sirven
                para ilustrar las doctrinas, no para producirlas.
              </p>
              <p>
                <strong>
                  ¿Cuál es entonces la hermenéutica que consideramos correcta y
                  que fue y es seguida por las Asambleas hasta hoy?
                </strong>{" "}
                Es aquella basada en ciertos principios bíblicos, de los que
                mencionamos los siguientes:
              </p>
              <ol>
                <li>
                  <strong>Interpretación gramatical</strong>, dando a las
                  palabras su verdadero significado, es decir usando una
                  correcta exegesis.
                </li>
                <li>
                  <strong>Interpretación de acuerdo con el contexto</strong>, no
                  tomando versículos aislados sino dentro del contexto
                  gramatical, del estilo literario, histórico, temático, etc.
                </li>
                <li>
                  <strong>Comparación de Escritura con Escritura</strong>, por
                  lo que un pasaje oscuro, o aparentemente contradictorio, no
                  puede invalidar una doctrina claramente apoyada en otros
                  pasajes.
                </li>
                <li>
                  <strong>Distinción entre interpretación y aplicación</strong>:
                  la interpretación debe ser literal, pero puede tener una
                  aplicación espiritual. Aquí justamente es donde se esconde
                  toda la riqueza de la <em>tipología bíblica</em>.
                </li>
              </ol>
              <p>
                <strong>Conclusión:</strong>
              </p>
              <p>
                Habiendo heredado de "Los hermanos" la fidelidad a los
                principios escriturales, una correcta hermenéutica y sana
                exégesis, sigamos aplicando a nuestro estudio personal y a la
                enseñanza de la Palabra de Dios esta saludable práctica.
              </p>
              <p className="author">Autor: Eduardo Cartea</p>
              <p className="source">
                Iglesias Cristianas Evangélicas en Argentina de las Asambleas de
                Hermanos
              </p>
            </section>
          </div>
        </div>

        {/* Botón de scroll to top */}
        {showScrollTop && (
          <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Volver arriba"
          >
            <IoArrowUpCircle size={50} />
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ConfesionDeFe;
