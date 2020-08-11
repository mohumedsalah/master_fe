import React from "react";

import ErrorMessage from "../../../../shared/ErrorMessage";
import axiosBaseFree from "../../../../shared/axiosBaseFree";
import { apiToken } from "../../../../constant";
import "./loginForm.css";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const LoginForm = ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axiosBaseFree
      .post("/api/user/login", data)
      .then((res) => {
        localStorage.setItem(apiToken, res.data.token);
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Your username or password not correct!");
      });
  };
  const { t } = useTranslation();
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="icon material-icons">account_circle</i>
            </div>
          </div>

          <input
            ref={register({ required: true, minLength: 5, maxLength: 50 })}
            placeholder={t("E-Mail")}
            name="email"
            type="text"
            className={` form-control ${errors.username ? " is-invalid" : ""} `}
          />
        </div>
        <div className="validation-error">
          <div></div>
          <ErrorMessage error={errors.username} minLength="5" maxLength="50" />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="icon material-icons">vpn_key</i>
            </div>
          </div>
          <input
            ref={register({ required: true })}
            placeholder={t("PASSWORD")}
            name="password"
            type="password"
            className={` form-control ${errors.password ? " is-invalid" : ""} `}
          />
        </div>

        <div className="validation-error">
          <div></div>
          <ErrorMessage error={errors.password} />
        </div>

        <div className="login-action">
          <div>
            <button type="submit" className="btn btn-danger login-btn">
              {t("Login")}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default LoginForm;
