import { withStyles, makeStyles } from "@material-ui/core/styles";

const style = (TableCell, TableRow) => {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#1F2026',
      color: theme.palette.common.white,
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
    body: {
      fontSize: "1.4rem",
      fontWeight: "bold",
      padding: ".2rem",
    },
  }))(TableCell);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
    tableContainer: {
      maxHeight: "84vh",
      minHeight: "10vh",
    },
    searchButton: {
      padding: "2px 2px",
      minWidth: "4rem",
      height: "4rem",
      boxSizing: "border-box",
      background: "#CC0B10 0% 0% no-repeat padding-box",
      borderRadius: "0px 70px 70px 70px",
      textTransform: "uppercase",
      position: "absolute",
      right: "1%",
    },
    addButton: {
      padding: "2px 2px",
      minWidth: "6rem",
      height: "6rem",
      boxSizing: "border-box",
      background: "#CC0B10 0% 0% no-repeat padding-box",
      borderRadius: "50%",
      textTransform: "uppercase",
      position: "absolute",
      top: "90%",
      right: "1%",
    },
    dialogForm: {
      margin: 0,
      marginBottom: "auto",
      display: "flex",
      flexDirection: "column",
      fontSize: "1.7rem",
    },
  });

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "#FFFFFF",
      },
      "&:nth-of-type(even)": {
        backgroundColor: "#F8F8F8",
      },
    },
  }))(TableRow);

  return { StyledTableCell, StyledTableRow, useStyles };
};
export { style };
