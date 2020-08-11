import React from "react";
import { useTranslation } from "react-i18next";
export default function ErrorMessage({
  error,
  minLength = -100000000000000,
  maxLength = 100000000000000,
  min = -100000000000000,
  max = 100000000000000,
}) {
  const { t } = useTranslation();

  if (error) {
    switch (error.type) {
      case "required":
        return (
          <span className="validation-span">{t("This field is required")}</span>
        );
      case "validate":
        return <span className="validation-span">{t(error.message)}</span>;
      case "minLength":
        return (
          <span className="validation-span">
            {t("required at least length")} {minLength} {t("character")}.
          </span>
        );
      case "maxLength":
        return (
          <span className="validation-span">
            {t("required at most length")} {maxLength} {t("character")}
          </span>
        );
      case "min":
        return (
          <span className="validation-span">
            {t("required at least")} {min}
          </span>
        );
      case "max":
        return (
          <span className="validation-span">
            {t("required at most")} {max}
          </span>
        );
      case "pattern":
        return <span className="validation-span">{t(error.message)}</span>;

      default:
        return null;
    }
  }

  return null;
}
