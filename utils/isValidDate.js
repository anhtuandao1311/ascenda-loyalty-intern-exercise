// check if the input is a valid date in the format YYYY-MM-DD
// also check if date is real or not, ex: 2021-02-29 is not a real date
function isValidDate(input) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(input)) return false;

  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return false;
  return d.toISOString().slice(0, 10) === input;
}

module.exports = isValidDate;
