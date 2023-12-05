const getFutureDate = require("../utils/getFutureDate");
const { VALID_CATEGORIES, DAYS_FORWARD } = require("../constants/appConstants");
const getClosestMerchant = require("../utils/getClosestMerchant");
const writeToOutputFile = require("../utils/writeToOutputFile");

// big function to process offers and write to output.json
function processOffers(input, offers) {
  const futureDate = getFutureDate(input, DAYS_FORWARD);
  const categories = VALID_CATEGORIES;
  const minDistanceOffers = {};

  for (let offer of offers) {
    let { category, valid_to } = offer;
    if (!offer.merchants.length) continue;

    const validTo = new Date(valid_to);
    // if the offer's "valid_to" is not valid or the category is not valid, skip it
    if (!categories.includes(category) || validTo < futureDate) {
      continue;
    }

    // if the offer has multiple merchants, assign the one with the minimum distance
    const closestMerchant = getClosestMerchant(offer.merchants);
    offer.merchants = [closestMerchant];

    // assign the offer with the minimum distance to each category
    // if the offer is already assigned to a category, check if the current offer's distance is smaller than the existing one, if so, replace it
    if (
      !minDistanceOffers[category] ||
      minDistanceOffers[category].merchants[0].distance >
        offer.merchants[0].distance
    ) {
      minDistanceOffers[category] = offer;
    }
  }

  // take the first 2 offers with the minimum distance
  const dataToBeStringified = Object.values(minDistanceOffers)
    .sort((a, b) => {
      return a.merchants[0].distance - b.merchants[0].distance;
    })
    .slice(0, 2);

  // stringify the data and write to output.json
  const outputData = JSON.stringify({ offers: dataToBeStringified }, null, 2);
  writeToOutputFile("output.json", outputData);
}

module.exports = processOffers;
