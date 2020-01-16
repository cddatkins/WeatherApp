function ConvertKToF(temp) {
  return ((temp - 273.15) * 9) / 5 + 32;
}

function GetUTCDateString(date) {
  const unixTimestamp = date;
  const dateObj = new Date(unixTimestamp * 1000);
  return dateObj.toUTCString();
}

function IsUSZipCode(str) {
  const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
  return regexp.test(str);
}

export { ConvertKToF, GetUTCDateString, IsUSZipCode };
