import moment from "moment";
export const toShortDate = (date: Date) => {
  return (
    date.getFullYear() +
    "-" +
    (parseInt(date.getUTCMonth().toString()) + 1) +
    "-" +
    date.getUTCDate()
  );
};
export const getThisYear = () => {
  const now = new Date();
  return now.getFullYear();
};
export const getDates = function (date: string | undefined) {
  if (!date) date = new Date().toString();
  const tempDate = new Date(date);
  const mome = moment(tempDate);
  return {
    yearfull: mome.format("YYYY"),
    yearshort: mome.format("YY"),
    quarter: mome.format("Q"),
    monthfull: mome.format("MM"),
    monthshort: mome.format("M"),
    monthfullname: mome.format("MMMM"),
    monthshortname: mome.format("MMM"),
    dayfull: mome.format("DD"),
    dayshort: mome.format("D"),
    datenormal: mome.format("MMMM D, YYYY"),
    dateshortname: mome.format("DD MMMM YYYY"),
    dateLong: mome.format("MMM Do YYYY"),
    timeShort: mome.format("HH:mm"),
    datefull: mome.format("DD MMMM YYYY HH:mm"),
    isValid: true,
  };
};

export const utc = function (): string {
  return moment.utc().toISOString();
};

export const toUtc = function (date: string): string {
  return moment(date).utc().toISOString();
};
export const to_unix = function () {
  return moment().unix();
};
export const timeDifference = (current, previous) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const elapsed = current - previous;
  if (elapsed < 0) {
    return getDates(elapsed.toString());
  }
  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
};
