function unix(dt, format) {
  let ms = dt * 1000;
  let date = new Date(ms);

  let result =
    format == "weekday"
      ? date.toLocaleString("en-US", { weekday: "long" })
      : format == "month"
      ? date.toLocaleString("en-US", { month: "short" })
      : format == "day"
      ? date.toLocaleString("en-US", { day: "numeric" })
      : "";

  return result;
}

export default unix;

// dt = 1686812400

// format:

// weekday = Monday
// day = 15
// month=  June
