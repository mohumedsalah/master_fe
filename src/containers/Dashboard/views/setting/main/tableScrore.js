import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Button,
} from "@material-ui/core";

import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
} from "@material-ui/icons";
import InfiniteScroll from "react-infinite-scroller";

import { style } from "./tableScoreCss";
import axiosBaseAuth from "../../../../../shared/axiosBaseAuth";
import { limit } from "../../../../../constant";
import { deleteConfirmation } from "../../../../../components/sweetAlert/DeleteConfirmation";

import { toGer, toEng } from "../../../../../localization/handleLanguage";

import "./Resin.css";
import ResinForm from "./questionForm/questionForm";
import { useTranslation } from "react-i18next";

const { StyledTableCell, StyledTableRow, useStyles } = style(
  TableCell,
  TableRow
);

export default function CustomizedTables({ history }) {
  const { t } = useTranslation();
  const lang = useTranslation()[1].language;
  const [rows, setRows] = useState([]);

  const [haveMore, setHaveMore] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [editId, setEditId] = useState("");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const loadMore = () => {
    const searchTextConvert = "" + toEng(searchText);
    const url = `/api/resin?limit=${limit}&skip=${rows.length}&search=${searchTextConvert}`;

    axiosBaseAuth.get(url).then((res) => {
      setRows((last) => {
        return [...last, ...res.data];
      });
      if (res.data.length < limit) {
        setHaveMore(false);
      }
    });
  };
  let scrollParentRef = null;
  const removeTableData = () => {
    setRows([]);
    setHaveMore(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = (id) => {
    deleteConfirmation(
      () => axiosBaseAuth.delete(`/api/resin/${id}`),
      () =>
        setRows((old) => {
          let indexOfDeleted = old.findIndex((x) => x._id === id);
          old.splice(indexOfDeleted, 1);
          return [...old];
        })
    );
  };

  const renderTable = () => {
    const filteredArr = rows.reduce((acc, current) => {
      const x = acc.find((item) => item._id === current._id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    return filteredArr.map((row, inx) => (
      <StyledTableRow key={row._id}>
        <StyledTableCell align="center">E-mail</StyledTableCell>
        <StyledTableCell align="center">Degree</StyledTableCell>
        <StyledTableCell align="center">Take At</StyledTableCell>
      </StyledTableRow>
    ));
  };

  return (
    <div className="table-page-container">
      <div className="table-view-header">
        <div>
          <IconButton
            onClick={() => {
              history.push("/dashboard/setting");
            }}
            aria-label="edit"
          >
            <KeyboardBackspaceIcon fontSize="large" />
          </IconButton>
          <label>{t("Resin")}</label>
        </div>
        <div>
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
              removeTableData();
            }}
            type="text"
            placeholder={t("SEARCH")}
            className="form-control"
          />
          <Button
            className={classes.searchButton}
            variant="contained"
            color="secondary"
            aria-label="edit"
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
      </div>
      <TableContainer
        id="scrollDic"
        className={classes.tableContainer}
        component={Paper}
        ref={(ref) => (scrollParentRef = ref)}
      >
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={haveMore}
          loader={
            <div className="loader" key={0}>
              {t("Loading")} ...
            </div>
          }
          useWindow={false}
          getScrollParent={() => scrollParentRef}
        >
          <Table
            className={classes.table}
            aria-label="customized table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <StyledTableCell key={1} align="center">
                  E-Mail
                </StyledTableCell>
                <StyledTableCell key={1} align="center">
                  Score
                </StyledTableCell>
                <StyledTableCell key={1} align="center">
                  Take At
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderTable()}</TableBody>
          </Table>
        </InfiniteScroll>
      </TableContainer>

      <ResinForm
        editId={editId}
        reloadTable={removeTableData}
        useStyles={useStyles}
        handleClose={handleClose}
        open={open}
      />

      <Button
        onClick={() => {
          handleClickOpen();
          setEditId("");
        }}
        className={classes.addButton}
        variant="contained"
        color="secondary"
        aria-label="edit"
      >
        <AddIcon fontSize="large" />
      </Button>
    </div>
  );
}
