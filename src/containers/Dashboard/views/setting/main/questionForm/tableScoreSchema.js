const ResinData = (validIndex) => {
  const arr = {
    choice1: {
      viewedName: "choice 1",
      numberCheck: 0,
      check: validIndex === 0,
      validation: { required: true, minLength: 3, maxLength: 99 },

      type: "string",
    },
    choice2: {
      viewedName: "choice 2",
      numberCheck: 1,
      check: validIndex === 1,
      validation: { required: true, minLength: 3, maxLength: 99 },

      type: "string",
    },
    choice3: {
      viewedName: "choice 3",
      numberCheck: 2,
      check: validIndex === 2,
      validation: { required: true, minLength: 3, maxLength: 99 },

      type: "string",
    },
    choice4: {
      viewedName: "choice 4",
      numberCheck: 3,
      check: validIndex === 3,
      validation: { required: true, minLength: 3, maxLength: 99 },

      type: "string",
    },
  };
  return arr;
};

export default ResinData;
