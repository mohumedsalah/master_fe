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

import { Add as AddIcon } from "@material-ui/icons";
import InfiniteScroll from "react-infinite-scroller";
import moment from "moment";

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
  const [editId, setEditId] = useState("");
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const loadMore = () => {
    const url = `api/user/user-scores`;

    axiosBaseAuth.get(url).then((res) => {
      setRows((last) => {
        return [...last, ...res.data];
      });

      setHaveMore(false);
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
        <StyledTableCell align="center">{row.email}</StyledTableCell>
        <StyledTableCell align="center">{row.quiz.score}</StyledTableCell>
        <StyledTableCell align="center">
          {moment(row.quiz.updatedAt).format("DD/MM/YYYY")}
        </StyledTableCell>
      </StyledTableRow>
    ));
  };

  return (
    <div className="table-page-container">
      <div className="table-view-header">
        <div>
          <label>{t("User Scores")}</label>
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
