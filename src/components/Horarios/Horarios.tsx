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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const horarios = [
    {
      hora: "09:30",
      domingo: t("horariosSantaCena"),
      lunes: "-",
      martes: "-",
      miercoles: "-",
      jueves: "-",
      viernes: "-",
      sabado: "-",
    },
    {
      hora: "11:00",
      domingo: t("horariosExplicacionEvangelio"),
      //domingo: t("horariosEscuelaDominical"),
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
      sabado: "-",
      //sabado: t("horariosReunionPreadolescentes"),
    },
    {
      hora: "15:30",
      domingo: "-",
      lunes: "-",
      //lunes: t("horariosReunionFemenina"),
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
      sabado: "-",
      //sabado: t("horariosReunionAdolescentes"),
    },
    {
      hora: "19:00",
      domingo: "-",
      //domingo: t("horariosExplicacionEvangelio"),
      lunes: "-",
      martes: "-",
      miercoles: "-",
      jueves: "-",
      viernes: "-",
      sabado: "-",
    },
    {
      hora: "20:00",
      domingo: "-",
      lunes: "-",
      martes: t("horariosReunionOracion"),
      miercoles: "-",
      jueves: "-",
      //jueves: t("horariosEstudioBiblico"),
      viernes: "-",
      //viernes: t("horariosReunionJovenes"),
      sabado: "-",
      //sabado: t("horariosReunionJovenes"),
    },
  ];

  return (
    <div className="horarios">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                <h3>{t("horariosHora")}</h3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <h3>{t("horariosDomingo")}</h3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <h3>{t("horariosLunes")}</h3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <h3>{t("horariosMartes")}</h3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <h3>{t("horariosMiercoles")}</h3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <h3>{t("horariosJueves")}</h3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <h3>{t("horariosViernes")}</h3>
              </StyledTableCell>
              <StyledTableCell align="center">
                <h3>{t("horariosSabado")}</h3>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {horarios.map((row: any, index: any) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">{row.hora}</StyledTableCell>
                <StyledTableCell align="center">{row.domingo}</StyledTableCell>
                <StyledTableCell align="center">{row.lunes}</StyledTableCell>
                <StyledTableCell align="center">{row.martes}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.miercoles}
                </StyledTableCell>
                <StyledTableCell align="center">{row.jueves}</StyledTableCell>
                <StyledTableCell align="center">{row.viernes}</StyledTableCell>
                <StyledTableCell align="center">{row.sabado}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Horarios;
