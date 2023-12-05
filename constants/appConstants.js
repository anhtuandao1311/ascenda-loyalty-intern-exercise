const OffersCategory = require("../enums/OffersCategory");

const DAYS_FORWARD = 5;

const VALID_CATEGORIES = [
  OffersCategory.Restaurant,
  OffersCategory.Retail,
  OffersCategory.Activity,
];

module.exports = {
  DAYS_FORWARD,
  VALID_CATEGORIES,
};
