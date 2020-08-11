const toGer = (x) => {
  const xx = Number(x) ? x.toLocaleString("de-DE", { useGrouping: false }) : x;

  return xx;
};

const toEng = (x) => {
  const xx = Number(x.replace(",", ".")) ? Number(x.replace(",", ".")) : x;
  return xx;
};

const handleData = (data, schema) => {
  const newObj = {};

  Object.keys(data).forEach((key) => {
    if (schema[key] && schema[key].type === "number") {
      newObj[key] = toEng(data[key]);
    } else {
      newObj[key] = data[key];
    }
  });
  return newObj;
};

export { toGer, toEng, handleData };
