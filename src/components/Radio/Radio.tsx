import "./Radio.css";
import {useEffect, useState} from "preact/hooks";
import {useRef} from "preact/compat";
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

const StyledTableCell = styled(TableCell)(({}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#d0dbee",
        color: "#18181f",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

// @ts-ignore
const Radio = ({sourceRef}) => {
    const horarios = [
        {hora: "00:00", programa: "A Través de la Biblia"},
        {hora: "00:30", programa: "Crianza Reverente"},
        {hora: "01:00", programa: "Correr para Ganar"},
        {hora: "01:30", programa: "Momento Decisivo"},
        {hora: "02:00", programa: "El Amor Que Vale"},
        {hora: "02:30", programa: "Micro mensajes"},
        {hora: "03:00", programa: "Entre Amigas"},
        {hora: "03:30", programa: "Aviva Nuestros Corazones"},
        {hora: "04:00", programa: "De la Biblia a la vida"},
        {hora: "04:30", programa: "Renovando Tu Mente"},
        {hora: "05:00", programa: "Predicación del Evangelio"},
        {hora: "06:00", programa: "Pedrito el Pulpo"},
        {hora: "06:30", programa: "Viajeros"},
        {hora: "07:00", programa: "Revista Radial"},
        {hora: "07:30", programa: "La Verdad en el Tubo de Ensayo"},
        {hora: "08:00", programa: "Cambios Profundos"},
        {hora: "08:30", programa: "Micro mensajes"},
        {hora: "09:00", programa: "Tierra Firme"},
        {hora: "09:30", programa: "Jungla Semántica"},
        {hora: "10:00", programa: "Lectura Pública de la Biblia"},
        {hora: "10:30", programa: "Gracia a Vosotros"},
        {hora: "11:00", programa: "Preguntas y Respuestas"},
        {hora: "11:30", programa: "Bonus Track"},
        {hora: "12:00", programa: "A Través de la Biblia"},
        {hora: "12:30", programa: "Crianza Reverente"},
        {hora: "13:00", programa: "Correr para Ganar"},
        {hora: "13:30", programa: "Momento Decisivo"},
        {hora: "14:00", programa: "El Amor Que Vale"},
        {hora: "14:30", programa: "Micro mensajes"},
        {hora: "15:00", programa: "Entre Amigas"},
        {hora: "15:30", programa: "Aviva Nuestros Corazones"},
        {hora: "16:00", programa: "De la Biblia a la vida"},
        {hora: "16:30", programa: "Renovando Tu Mente"},
        {hora: "17:00", programa: "Pedrito el Pulpo"},
        {hora: "17:30", programa: "Viajeros"},
        {hora: "18:00", programa: "Cambios Profundos"},
        {hora: "18:30", programa: "Micro mensajes"},
        {hora: "19:00", programa: "Revista Radial"},
        {hora: "19:30", programa: "La Verdad en el Tubo de Ensayo"},
        {hora: "20:00", programa: "Predicación del Evangelio"},
        {hora: "21:00", programa: "Tierra Firme"},
        {hora: "21:30", programa: "Jungla Semántica"},
        {hora: "22:00", programa: "Lectura Pública de la Biblia"},
        {hora: "22:30", programa: "Gracia a Vosotros"},
        {hora: "23:00", programa: "Preguntas y Respuestas"},
        {hora: "23:30", programa: "Bonus Track"},
    ];

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    const handleSeek = (e: any) => {
        // @ts-ignore
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    }

    const handleTimeUpdate = () => {
        // @ts-ignore
        setCurrentTime(audioRef.current.currentTime);
        // @ts-ignore
        setDuration(audioRef.current.currentTime);
    }

    const handlePlay = () => {
        // @ts-ignore
        audioRef.current.play();
        setIsPlaying(true);
    }

    const handlePause = () => {
        // @ts-ignore
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const handlePlayPause = () => {
        if (isPlaying) handlePause()
        else handlePlay()
    }

    function formatTime(durationSeconds: number) {
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        // @ts-ignore
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            // @ts-ignore
            audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        }
    }, [])

    return (
        <div className="radio">
            <div className="player-card">
                <img className="player-img" src={logoImg} alt="Cover Image"/>

                <input
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                />

                <audio ref={audioRef} src={sourceRef} type="audio/mpeg"></audio>

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
                <TableContainer component={Paper} sx={{maxHeight: 400, overflow: 'auto'}}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">
                                    <h3>Hora</h3>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <h3>Programa</h3>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {horarios.map((row: any, index: any) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="center">
                                        {row.hora}
                                    </StyledTableCell>
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
    )
}

export default Radio;
