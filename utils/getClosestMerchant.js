// get the closest merchant from the list of merchants
function getClosestMerchant(merchants) {
  return merchants.reduce((prev, curr) =>
    prev.distance <= curr.distance ? prev : curr
  );
}

module.exports = getClosestMerchant;
