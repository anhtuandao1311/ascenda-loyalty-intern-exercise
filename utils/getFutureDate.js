// get the future date from the input date (in this exercise it's 5 days forward)
function getFutureDate(input, daysForward) {
  const inputDate = new Date(input);
  const futureDate = new Date(
    inputDate.setDate(inputDate.getDate() + daysForward)
  );
  return futureDate;
}

module.exports = getFutureDate;
