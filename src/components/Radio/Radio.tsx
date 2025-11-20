import "./Radio.css";
import { useEffect, useState } from "preact/hooks";
import { useRef } from "preact/compat";
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import logoImg from "../../assets/buenasNuevas.png";
import { useTranslation } from "react-i18next";

const StyledTableCell = styled(TableCell)(({ }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#d0dbee",
    color: "#18181f",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// @ts-ignore
const Radio = ({ sourceRef }) => {
  const { t } = useTranslation();
  const [tabValue, setTabValue] = useState(0);

  const horariosDia1 = [
    { hora: "0:00", programa: "Gracia a Vosotros", maestro: "John F. MacArthur" },
    { hora: "0:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "1:00", programa: "Predicación del Evangelio", maestro: "Hermanos de la Iglesia" },
    { hora: "2:00", programa: "Sabiduría Internacional", maestro: "Stephen Davey" },
    { hora: "2:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "3:00", programa: "Renovando Tu Mente", maestro: "Robert C. Sproul" },
    { hora: "3:30", programa: "A Través de la Biblia - Alimento para el Alma", maestro: "Samuel Montoya, Esteban Larrosa" },
    { hora: "4:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "4:30", programa: "Abre la Biblia", maestro: "Colin Smith" },
    { hora: "5:00", programa: "Carlos Ruiz Devocional - Cambios Profundos", maestro: "Carlos Ruiz, Nicolás Tranchini" },
    { hora: "5:30", programa: "Semillas al Aire", maestro: "Raúl Ferrero" },
    { hora: "6:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "6:30", programa: "Correr para Ganar", maestro: "Erwin Lutzer" },
    { hora: "7:00", programa: "El Camino de la Vida", maestro: "Cornelio Rivera" },
    { hora: "7:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "8:00", programa: "Momento Decisivo", maestro: "David Jeremiah" },
    { hora: "8:30", programa: "El Amor Que Vale", maestro: "Adrián Rogers" },
    { hora: "9:00", programa: "La Verdad en el Tubo de Ensayo", maestro: "Aldo Garrasino y Esteban Larrosa" },
    { hora: "9:30", programa: "Aviva Nuestros Corazones", maestro: "Patricia de Saladin" },
    { hora: "10:00", programa: "Lectura Pública de la Biblia - Estudio Bíblico", maestro: "Ministerio LPB, Llamada de Medianoche" },
    { hora: "10:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "11:00", programa: "Temas Bíblicos", maestro: "Fundación Bíblica La Buena Semilla" },
    { hora: "11:30", programa: "A Través de la Biblia", maestro: "Samuel Montoya" },
    { hora: "12:00", programa: "Gracia a Vosotros", maestro: "John F. MacArthur" },
    { hora: "12:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "13:00", programa: "Predicación del Evangelio", maestro: "Hermanos de la Iglesia" },
    { hora: "14:00", programa: "Sabiduría Internacional", maestro: "Stephen Davey" },
    { hora: "14:30", programa: "Correr para Ganar", maestro: "Erwin Lutzer" },
    { hora: "15:00", programa: "De la Biblia a la vida", maestro: "Patricia Namnún y Chárbela Salcedo" },
    { hora: "15:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "16:00", programa: "El Camino de la Vida", maestro: "Cornelio Rivera" },
    { hora: "16:30", programa: "Visión para Vivir", maestro:"Chuck Swindoll" },
    { hora: "17:00", programa: "Momento Decisivo", maestro: "David Jeremiah" },
    { hora: "17:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "18:00", programa: "Carlos Ruiz Devocional - Cambios Profundos", maestro: "Carlos Ruiz, Nicolás Tranchini" },
    { hora: "18:30", programa: "Pedrito el Pulpo - Viajeros", maestro: "Radio Trans Mundial, Llamada de Medianoche" },
    { hora: "19:00", programa: "La Verdad en el Tubo de Ensayo", maestro: "Aldo Garrasino y Esteban Larrosa" },
    { hora: "19:30", programa: "Aviva Nuestros Corazones", maestro: "Patricia de Saladin" },
    { hora: "20:00", programa: "Renovando Tu Mente", maestro: "Robert C. Sproul" },
    { hora: "20:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "21:00", programa: "Predicación del Evangelio", maestro: "Hermanos de la Iglesia" },
    { hora: "22:00", programa: "Temas Bíblicos", maestro: "Fundación Bíblica La Buena Semilla" },
    { hora: "22:30", programa: "Lectura Pública de la Biblia - Alimento para el Alma", maestro: "Ministerio LPB, Esteban Larrosa" },
    { hora: "23:00", programa: "Música Clásica", maestro: "Varios Compositores" },
  ];

  const horariosDia2 = [
    { hora: "0:00", programa: "Gracia a Vosotros", maestro: "John F. MacArthur" },
    { hora: "0:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "1:00", programa: "Predicación del Evangelio", maestro: "Hermanos de la Iglesia" },
    { hora: "2:00", programa: "Sabiduría Internacional", maestro: "Stephen Davey" },
    { hora: "2:30", programa: "Tierra Firme", maestro: "Esteban Larrosa y Salvador Dellutri" },
    { hora: "3:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "3:30", programa: "A Través de la Biblia - Alimento para el Alma", maestro: "Samuel Montoya, Esteban Larrosa" },
    { hora: "4:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "4:30", programa: "Fundamentos del Discipulado", maestro: "Esteban Larrosa" },
    { hora: "5:00", programa: "Estudio Bíblico - Cambios Profundos", maestro: "Llamada de Medianoche, Nicolás Tranchini" },
    { hora: "5:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "6:00", programa: "Visión para Vivir", maestro:"Chuck Swindoll" },
    { hora: "6:30", programa: "Correr para Ganar", maestro: "Erwin Lutzer" },
    { hora: "7:00", programa: "El Camino de la Vida", maestro: "Cornelio Rivera" },
    { hora: "7:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "8:00", programa: "Momento Decisivo", maestro: "David Jeremiah" },
    { hora: "8:30", programa: "El Amor Que Vale", maestro: "Adrián Rogers" },
    { hora: "9:00", programa: "Jungla Semántica", maestro: "Esteban Larrosa y Héctor Leites" },
    { hora: "9:30", programa: "Entre Amigas", maestro: "Llamada de Medianoche" },
    { hora: "10:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "10:30", programa: "El Contacto Cristiano - Preguntas y Respuestas", maestro: "Luis Ortega y Ricardo Robinson, Llamada de Medianoche" },
    { hora: "11:00", programa: "Abre la Biblia", maestro: "Colin Smith" },
    { hora: "11:30", programa: "A Través de la Biblia", maestro: "Samuel Montoya" },
    { hora: "12:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "12:30", programa: "En Contacto Global", maestro: "Charles Stanley" },
    { hora: "13:00", programa: "Predicación del Evangelio", maestro: "Hermanos de la Iglesia" },
    { hora: "14:00", programa: "Sabiduría Internacional", maestro: "Stephen Davey" },
    { hora: "14:30", programa: "Tierra Firme", maestro: "Esteban Larrosa y Salvador Dellutri" },
    { hora: "15:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "15:30", programa: "Semillas al Aire", maestro: "Raúl Ferrero" },
    { hora: "16:00", programa: "El Camino de la Vida", maestro: "Cornelio Rivera" },
    { hora: "16:30", programa: "Visión para Vivir", maestro:"Chuck Swindoll" },
    { hora: "17:00", programa: "Momento Decisivo", maestro: "David Jeremiah" },
    { hora: "17:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "18:00", programa: "Estudio Bíblico - Cambios Profundos", maestro: "Llamada de Medianoche, Nicolás Tranchini" },
    { hora: "18:30", programa: "Melodías con Historia", maestro: "Equipo Buenas Nuevas" },
    { hora: "19:00", programa: "Bonus Track - Alimento para el Alma", maestro: "Llamada de Medianoche, Esteban Larrosa" },
    { hora: "19:30", programa: "Crianza Reverente", maestro: "Susi Bixby" },
    { hora: "20:00", programa: "Jungla Semántica", maestro: "Esteban Larrosa y Héctor Leites" },
    { hora: "20:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "21:00", programa: "Predicación del Evangelio", maestro: "Hermanos de la Iglesia" },
    { hora: "22:00", programa: "Lectura Pública de la Biblia", maestro: "Ministerio LPB" },
    { hora: "22:30", programa: "Fundamentos del Discipulado", maestro: "Esteban Larrosa" },
    { hora: "23:00", programa: "Música Clásica", maestro: "Varios Compositores" },
  ];

  const horariosFinDeSemana = [
    { hora: "0:00", programa: "Música Clásica", maestro: "Varios Compositores" },
    { hora: "1:00", programa: "Un Sermón para tu Semana", maestro: "Equipo de Coalición Por El Evangelio" },
    { hora: "2:00", programa: "Predicación del Evangelio", maestro: "Hermanos de la Iglesia" },
    { hora: "3:00", programa: "Proyecto Biblia Pódcast", maestro: "Tim Mackie y Jon Collins" },
    { hora: "4:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "4:30", programa: "Gracia a Vosotros", maestro: "John F. MacArthur" },
    { hora: "5:00", programa: "Carlos Ruiz Devocional - Cambios Profundos", maestro: "Carlos Ruiz, Nicolás Tranchini" },
    { hora: "5:30", programa: "BITE Project", maestro: "Equipo de BITE Project" },
    { hora: "6:00", programa: "Visión para Vivir", maestro:"Chuck Swindoll" },
    { hora: "6:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "7:00", programa: "Luis Palau Responde", maestro: "Luis Palau" },
    { hora: "7:30", programa: "Pedrito el Pulpo - Viajeros", maestro: "Radio Trans Mundial, Llamada de Medianoche" },
    { hora: "8:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "8:30", programa: "Fundamentos del Discipulado", maestro: "Esteban Larrosa" },
    { hora: "9:00", programa: "Sabiduría Internacional", maestro: "Stephen Davey" },
    { hora: "9:30", programa: "Coalición Podcast", maestro: "Equipo de Coalición Por El Evangelio" },
    { hora: "10:00", programa: "El Contacto Cristiano - Estudio Bíblico", maestro: "Luis Ortega y Ricardo Robinson, Llamada de Medianoche" },
    { hora: "10:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "11:00", programa: "Lectura Pública de la Biblia", maestro: "Ministerio LPB" },
    { hora: "11:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "12:00", programa: "Un Sermón para tu Semana", maestro: "Equipo de Coalición Por El Evangelio" },
    { hora: "13:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "13:30", programa: "Esperanza Segura", maestro: "J. Otis Yoder y J. Mark Horst" },
    { hora: "14:00", programa: "Escuela Bíblica Trans Mundial", maestro: "Radio Trans Mundial" },
    { hora: "14:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "15:00", programa: "Proyecto Biblia Pódcast", maestro: "Tim Mackie y Jon Collins" },
    { hora: "16:00", programa: "A Través de la Biblia - Alimento para el Alma", maestro: "Samuel Montoya, Esteban Larrosa" },
    { hora: "16:30", programa: "BITE Project", maestro: "Equipo de BITE Project" },
    { hora: "17:00", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "17:30", programa: "Semillas al Aire", maestro: "Raúl Ferrero" },
    { hora: "18:00", programa: "Carlos Ruiz Devocional - Cambios Profundos", maestro: "Carlos Ruiz, Nicolás Tranchini" },
    { hora: "18:30", programa: "Pedrito el Pulpo - Viajeros", maestro: "Radio Trans Mundial, Llamada de Medianoche" },
    { hora: "19:00", programa: "Luis Palau Responde", maestro: "Luis Palau" },
    { hora: "19:30", programa: "Espacio Musical" , maestro: "Varios Compositores"},
    { hora: "20:00", programa: "Predicación del Evangelio", maestro: "Hermanos de la Iglesia" },
    { hora: "21:00", programa: "Gracia a Vosotros", maestro: "John F. MacArthur" },
    { hora: "21:30", programa: "Espacio Musical", maestro: "Varios Compositores" },
    { hora: "22:00", programa: "Lectura Pública de la Biblia", maestro: "Ministerio LPB" },
    { hora: "22:30", programa: "Fundamentos del Discipulado", maestro: "Esteban Larrosa" },
    { hora: "23:00", programa: "Música Clásica", maestro: "Varios Compositores" },
  ];

  const handleTabChange = (_event: any, newValue: number) => {
    setTabValue(newValue);
  };

  const getCurrentSchedule = () => {
    switch (tabValue) {
      case 0:
        return horariosDia1;
      case 1:
        return horariosDia2;
      case 2:
        return horariosFinDeSemana;
      default:
        return horariosDia1;
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReconnecting, setIsReconnecting] = useState(false);

  const audioRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const wasPlayingRef = useRef(false);

  const handleSeek = (e: any) => {
    // @ts-ignore
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const handleTimeUpdate = () => {
    // @ts-ignore
    const time = audioRef.current.currentTime;
    // @ts-ignore
    const dur = audioRef.current.duration;

    setCurrentTime(time);
    setDuration(isFinite(dur) ? dur : 0);
  };

  const handlePlay = () => {
    // @ts-ignore
    audioRef.current.play().catch((error) => {
      console.error("Error playing audio:", error);
      attemptReconnect();
    });
    setIsPlaying(true);
    wasPlayingRef.current = true;
  };

  const handlePause = () => {
    // @ts-ignore
    audioRef.current.pause();
    setIsPlaying(false);
    wasPlayingRef.current = false;
  };

  const handlePlayPause = () => {
    if (isPlaying) handlePause();
    else handlePlay();
  };

  const attemptReconnect = () => {
    if (isReconnecting) return;

    setIsReconnecting(true);

    // @ts-ignore
    if (reconnectTimeoutRef.current) {
      // @ts-ignore
      clearTimeout(reconnectTimeoutRef.current);
    }

    // @ts-ignore
    reconnectTimeoutRef.current = setTimeout(() => {
      if (audioRef.current) {
        // @ts-ignore
        const currentSrc = audioRef.current.src;
        // @ts-ignore
        audioRef.current.src = "";
        // @ts-ignore
        audioRef.current.load();

        // @ts-ignore
        audioRef.current.src = `${currentSrc}?t=${Date.now()}`;
        // @ts-ignore
        audioRef.current.load();

        if (wasPlayingRef.current) {
          // @ts-ignore
          audioRef.current.play().catch((error) => {
            console.error("Error al reintentar reproducción:", error);
            setTimeout(() => attemptReconnect(), 3000);
          });
        }
      }
      setIsReconnecting(false);
    }, 1000);
  };

  const handleError = (e: any) => {
    console.error("Error en el stream de audio:", e);
    if (wasPlayingRef.current) {
      attemptReconnect();
    }
  };

  const handleStalled = () => {
    if (wasPlayingRef.current) {
      attemptReconnect();
    }
  };

  const handleWaiting = () => {
    console.log("Buffering...");
  };

  const handleCanPlay = () => {
    setIsReconnecting(false);
  };

  function formatTime(durationSeconds: number) {
    if (!isFinite(durationSeconds) || durationSeconds === 0) {
      return "LIVE";
    }
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // @ts-ignore
    audio.addEventListener("timeupdate", handleTimeUpdate);
    // @ts-ignore
    audio.addEventListener("error", handleError);
    // @ts-ignore
    audio.addEventListener("stalled", handleStalled);
    // @ts-ignore
    audio.addEventListener("waiting", handleWaiting);
    // @ts-ignore
    audio.addEventListener("canplay", handleCanPlay);

    const checkConnection = setInterval(() => {
      // @ts-ignore
      if (wasPlayingRef.current && audio.paused && !isReconnecting) {
        attemptReconnect();
      }
    }, 5000);

    return () => {
      // @ts-ignore
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      // @ts-ignore
      audio.removeEventListener("error", handleError);
      // @ts-ignore
      audio.removeEventListener("stalled", handleStalled);
      // @ts-ignore
      audio.removeEventListener("waiting", handleWaiting);
      // @ts-ignore
      audio.removeEventListener("canplay", handleCanPlay);
      clearInterval(checkConnection);
      // @ts-ignore
      if (reconnectTimeoutRef.current) {
        // @ts-ignore
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [isReconnecting]);

  return (
    <div className="radio">
      <div className="player-card">
        <img className="player-img" src={logoImg} alt="Cover Image" />

        {isReconnecting && (
          <div
            style={{
              color: "#ff9800",
              fontSize: "14px",
              padding: "5px",
              textAlign: "center",
            }}
          >
            Reconectando...
          </div>
        )}

        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          disabled={!isFinite(duration) || duration === 0}
          style={{ opacity: !isFinite(duration) || duration === 0 ? 0.3 : 1 }}
        />

        <audio
          ref={audioRef}
          src={sourceRef}
          type="audio/mpeg"
          preload="none"
        ></audio>

        <div className="track-duration">
          <p>{formatTime(currentTime)}</p>
          <p>{formatTime(duration)}</p>
        </div>

        <button className="track-button" onClick={handlePlayPause}>
          <span className="material-symbols-rounded">
            {isPlaying ? "pause" : "play_arrow"}
          </span>
        </button>
      </div>

      <div className="horarios-programas">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              backgroundColor: "#d0dbee",
              "& .MuiTab-root": {
                color: "#18181f",
                fontWeight: 600,
              },
              "& .Mui-selected": {
                color: "#436ee6 !important",
              },
            }}
          >
            <Tab label="Lun-Mié-Vie" />
            <Tab label="Mar-Jue" />
            <Tab label="Sáb-Dom" />
          </Tabs>
        </Box>

        <TableContainer
          component={Paper}
          sx={{ maxHeight: 400, overflow: "auto" }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <h3>{t("radioHora")}</h3>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <h3>{t("radioPrograma")}</h3>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <h3>Maestro/s</h3>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getCurrentSchedule().map((row: any, index: any) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">{row.hora}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.programa}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.maestro}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Radio;