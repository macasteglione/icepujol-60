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
  const horarios = [
    { hora: "00:00", programa: "A Través de la Biblia" },
    { hora: "00:30", programa: "Crianza Reverente" },
    { hora: "01:00", programa: "Correr para Ganar" },
    { hora: "01:30", programa: "Momento Decisivo" },
    { hora: "02:00", programa: "El Amor Que Vale" },
    { hora: "02:30", programa: "Micro mensajes" },
    { hora: "03:00", programa: "Entre Amigas" },
    { hora: "03:30", programa: "Aviva Nuestros Corazones" },
    { hora: "04:00", programa: "De la Biblia a la vida" },
    { hora: "04:30", programa: "Renovando Tu Mente" },
    { hora: "05:00", programa: "Predicación del Evangelio" },
    { hora: "06:00", programa: "Pedrito el Pulpo" },
    { hora: "06:30", programa: "Viajeros" },
    { hora: "07:00", programa: "Cambios Profundos" },
    { hora: "07:30", programa: "La Verdad en el Tubo de Ensayo" },
    { hora: "08:00", programa: "De la Biblia a la vida" },
    { hora: "08:30", programa: "Micro mensajes" },
    { hora: "09:00", programa: "Tierra Firme" },
    { hora: "09:30", programa: "Jungla Semántica" },
    { hora: "10:00", programa: "Lectura Pública de la Biblia" },
    { hora: "10:30", programa: "Gracia a Vosotros" },
    { hora: "11:00", programa: "Preguntas y Respuestas" },
    { hora: "11:30", programa: "Bonus Track" },
    { hora: "12:00", programa: "A Través de la Biblia" },
    { hora: "12:30", programa: "Crianza Reverente" },
    { hora: "13:00", programa: "Correr para Ganar" },
    { hora: "13:30", programa: "Momento Decisivo" },
    { hora: "14:00", programa: "El Amor Que Vale" },
    { hora: "14:30", programa: "Micro mensajes" },
    { hora: "15:00", programa: "Entre Amigas" },
    { hora: "15:30", programa: "Aviva Nuestros Corazones" },
    { hora: "16:00", programa: "Lectura Pública de la Biblia" },
    { hora: "16:30", programa: "Renovando Tu Mente" },
    { hora: "17:00", programa: "Pedrito el Pulpo" },
    { hora: "17:30", programa: "Viajeros" },
    { hora: "18:00", programa: "Melodias con Historias" },
    { hora: "18:30", programa: "Micro mensajes" },
    { hora: "19:00", programa: "Cambios Profundos" },
    { hora: "19:30", programa: "La Verdad en el Tubo de Ensayo" },
    { hora: "20:00", programa: "Predicación del Evangelio" },
    { hora: "21:00", programa: "Tierra Firme" },
    { hora: "21:30", programa: "Jungla Semántica" },
    { hora: "22:00", programa: "Lectura Pública de la Biblia" },
    { hora: "22:30", programa: "Gracia a Vosotros" },
    { hora: "23:00", programa: "Música Clásica" },
  ];

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
              </TableRow>
            </TableHead>
            <TableBody>
              {horarios.map((row: any, index: any) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">{row.hora}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.programa}
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
