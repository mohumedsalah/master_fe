const dayOfWeek = {
  SAT: "sat",
  SUN: "sun",
  MON: "mon",
  TUE: "tue",
  WED: "wed",
  THU: "thu",
  FRI: "fri",
};
const buttonNames = {
  BTN_DEFAULT: "btn_default",
  BTN_PRIMARY: "btn_primary",
  BTN_SECONDARY: "btn_secondary",
};
const apiToken = "apiToken";
const limit = 20;
const acceptLetterOnly = /^[A-Za-z\u0621-\u064A\u0660-\u0669]+$/i;
const acceptGermanyNumber = /^[-+]?[0-9]+(,[0-9]+)?$/;
const acceptEnglishNumber = /^[-+]?[0-9]+(\.[0-9]+)?$/;
export {
  dayOfWeek,
  buttonNames,
  acceptGermanyNumber,
  acceptEnglishNumber,
  apiToken,
  limit,
  acceptLetterOnly,
};
