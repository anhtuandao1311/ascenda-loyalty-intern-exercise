const getFutureDate = require("../utils/getFutureDate");
const { VALID_CATEGORIES, DAYS_FORWARD } = require("../constants/appConstants");
const getClosestMerchant = require("../utils/getClosestMerchant");
const writeToOutputFile = require("../utils/writeToOutputFile");

function processOffers(input, offers) {
  const futureDate = getFutureDate(input, DAYS_FORWARD);
  const categories = VALID_CATEGORIES;
  const minDistanceOffers = {};

  for (let offer of offers) {
    let { category, valid_to } = offer;
    if (!offer.merchants.length) continue;

    const validTo = new Date(valid_to);

    if (!categories.includes(category) || validTo < futureDate) {
      continue;
    }

    const closestMerchant = getClosestMerchant(offer.merchants);
    offer.merchants = [closestMerchant];

    if (
      !minDistanceOffers[category] ||
      minDistanceOffers[category].merchants[0].distance >
        offer.merchants[0].distance
    ) {
      minDistanceOffers[category] = offer;
    }
  }

  const dataToBeStringified = Object.values(minDistanceOffers)
    .sort((a, b) => {
      return a.merchants[0].distance - b.merchants[0].distance;
    })
    .slice(0, 2);

  const outputData = JSON.stringify({ offers: dataToBeStringified }, null, 2);
  writeToOutputFile("output.json", outputData);
}

module.exports = processOffers;
