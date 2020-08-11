import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
  Checkbox,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

import ErrorMessage from "../../../../../../shared/ErrorMessage";
import axiosBaseAuth from "../../../../../../shared/axiosBaseAuth";
import { toast, ToastContainer } from "react-toastify";
import {
  toGer,
  handleData,
} from "../../../../../../localization/handleLanguage";
import "./resinForm.css";
import ResinSchemaMaker from "./tableScoreSchema";
import { useTranslation } from "react-i18next";
const transition = 600;

const Transition = React.forwardRef(function Transition(props, ref) {
  return (
    <Slide
      in={true}
      direction="down"
      timeout={transition}
      ref={ref}
      {...props}
    />
  );
});

const ResinForm = ({ useStyles, editId, reloadTable, handleClose, open }) => {
  const { t } = useTranslation();
  const lang = useTranslation()[1].language;
  const { register, handleSubmit, errors, clearError, setValue } = useForm();
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState(-1);
  const [resinSchema, setResinSchema] = useState(
    ResinSchemaMaker(selectedOption)
  );

  useEffect(() => {
    setResinSchema(ResinSchemaMaker(selectedOption));
  }, [selectedOption]);

  const onSubmit = (_data) => {
    if (selectedOption === -1) {
      toast.error("please select one option");
      return;
    }
    const obj = {
      content: _data.content,
      choices: [
        { content: _data.choice1 },
        { content: _data.choice2 },
        { content: _data.choice3 },
        { content: _data.choice4 },
      ],
      correctAnswerInx: selectedOption,
    };
    axiosBaseAuth
      .post("/api/question", obj)
      .then((res) => {
        toast.success("question added success");
        setInputField();
        handleClose();
      })
      .catch((err) => {
        toast.error("there is proplem in adding question");
      });
  };

  const setInputField = (obj = {}) => {
    clearError(["content", ...Object.keys(resinSchema).map((key) => key)]);
    Object.keys(resinSchema).forEach((key) => {
      setValue(key, (lang === "du" ? toGer(obj[key]) : obj[key]) || "");
    });
    setValue("content");
    setSelectedOption(-1);
  };

  return (
    <div>
      <Dialog
        transitionDuration={transition}
        maxWidth="lg"
        fullWidth
        open={open}
        classes={{ paper: classes.dialogForm }}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>
          <div className="setting-form-header">{t("Question")}</div>
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="setting-form-container"
          >
            <div className="row">
              <div className="col-12 custom-field">
                <label htmlFor={"content"}>{t("content")}</label>
                <div className="setting-filed-container">
                  <input
                    ref={register({
                      required: true,
                      minLength: 6,
                      maxLength: 199,
                    })}
                    placeholder={t("content")}
                    className={` form-control ${
                      errors["content"] ? " is-invalid" : ""
                    } `}
                    name={"content"}
                    type="text"
                  />
                  <ErrorMessage
                    error={errors["content"]}
                    {...{ required: true, minLength: 6, maxLength: 199 }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {Object.keys(resinSchema).map((key) => (
                <div
                  key={key}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 custom-field"
                >
                  <label htmlFor={key}>{t(resinSchema[key].viewedName)}</label>
                  <Checkbox
                    checked={resinSchema[key].check}
                    onChange={() => {
                      setSelectedOption(resinSchema[key].numberCheck);
                    }}
                    name="checkedB"
                    color="primary"
                  />
                  <div className="setting-filed-container">
                    <input
                      ref={register(resinSchema[key].validation)}
                      placeholder={t(resinSchema[key].viewedName)}
                      className={` form-control ${
                        errors[key] ? " is-invalid" : ""
                      } `}
                      name={key}
                      type="text"
                    />
                    <ErrorMessage
                      error={errors[key]}
                      {...resinSchema[key].validation}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="setting-action-side">
              <button type="submit" className="btn btn-danger ">
                {editId ? t("Edit") : t("Add")}
              </button>
              <button
                onClick={() => {
                  handleClose();
                }}
                type="button"
                className="btn btn-secondary"
              >
                {t("Cancel")}
              </button>
              <button
                onClick={() => {
                  setInputField();
                }}
                type="button"
                className="btn btn-light"
              >
                {t("Reset")}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
export default ResinForm;
