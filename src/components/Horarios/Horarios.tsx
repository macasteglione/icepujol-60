import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    styled,
    tableCellClasses,
} from "@mui/material";
import "./Horarios.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
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

const Horarios = () => {
    const horarios = [
        {
            hora: "09:30",
            domingo: "Santa Cena",
            lunes: "-",
            martes: "-",
            miercoles: "-",
            jueves: "-",
            viernes: "-",
            sabado: "-",
        },
        {
            hora: "11:00",
            domingo: "Escuela Dominical",
            lunes: "-",
            martes: "-",
            miercoles: "-",
            jueves: "-",
            viernes: "-",
            sabado: "-",
        },
        {
            hora: "14:30",
            domingo: "-",
            lunes: "-",
            martes: "-",
            miercoles: "-",
            jueves: "-",
            viernes: "-",
            sabado: "Reunión de Preadolescentes",
        },
        {
            hora: "15:30",
            domingo: "-",
            lunes: "Reunión Femenina",
            martes: "-",
            miercoles: "-",
            jueves: "-",
            viernes: "-",
            sabado: "-",
        },
        {
            hora: "17:00",
            domingo: "-",
            lunes: "-",
            martes: "-",
            miercoles: "-",
            jueves: "-",
            viernes: "-",
            sabado: "Reunión de Adolescentes",
        },
        {
            hora: "20:00",
            domingo: "Explicación del Evangelio",
            lunes: "-",
            martes: "Reunión de Oración",
            miercoles: "-",
            jueves: "Estudio Bíblico",
            viernes: "-",
            sabado: "Reunión de Jóvenes",
        },
    ];

    return (
        <div className="horarios">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">
                                <h3>Hora</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Domingo</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Lunes</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Martes</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Miércoles</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Jueves</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Viernes</h3>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <h3>Sábado</h3>
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
                                    {row.domingo}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.lunes}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.martes}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.miercoles}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.jueves}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.viernes}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {row.sabado}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Horarios;
