const getFormatedDate = (value, type, inMS) => {
  if (!type) return value;
  if (!inMS) value = value * 1000;

  const date = new Date(value);
  let option;

  if (type === "date") {
    option = {
      day: "numeric",
      weekday: "long",
      month: "long",
      year: "numeric",
    };
  } else if (type == "time") {
    option = {
      hour: "numeric",
      minute: "numeric",
    };
  }

  return new Intl.DateTimeFormat("en-us", option).format(date);
};

export { getFormatedDate };
