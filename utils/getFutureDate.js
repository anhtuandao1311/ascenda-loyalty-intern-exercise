function getFutureDate(input, daysForward) {
  const inputDate = new Date(input);
  const futureDate = new Date(
    inputDate.setDate(inputDate.getDate() + daysForward)
  );
  return futureDate;
}

module.exports = getFutureDate;
