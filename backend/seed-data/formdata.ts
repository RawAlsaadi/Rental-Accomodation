function timestamp() {
    // sometime in the last 30 days
    const stampy =
      Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
    return new Date(stampy).toISOString();
  }

export const formSeedData = {
  "accomodationType": "holiday-home",
  "accomodationName": "jhyedfjukhfukhjwf",
  "accomodationShortDescription": "bla",
  "accomodationDetailedtDescription": "bla",
  "streetNum": 5465464,
  "postalCode": "hrhrdjhtrj",
  "townName": "hhtrhrh",
  "country": "GB",
  "licenceNum": "543",
  "livingSpaceInM": 1,
  "numOfBeds": 1,
  "singleRooms": 1,
  "doubleRooms": 1,
  "tripleRooms": 1,
  "livingRooms": 1,
  "otherRooms": 1,
  "bathroomWithShower": 1,
  "bathroomWithTub": 1,
  "bathroomWithShowerAndTub": 1,
  "guestToilet": 1,
  "companyName": "Invest Ottawa",
  "title": "mr",
  "firstName": "raw",
  "SureName": "moe",
  "emailAddresse": "raw@hotmail.com",
  "phoneNumber": "+16666666666",
  "currencyType": "euro",
  "pricesType": "per-object",
  "maximumOccupancy": 1,
  "basePricePerNight": 1,
  "basePricePerWeek": 1,
  "preperationTime": 1,
  "minimumStay": 1,
  "surchargePerNightAdult": 1,
  "surchargePerWeekAdult": 1,
  "surchargePerWeekChild": 1,
  "surchargePerNightChild": 1,
  "surchargeFixedAmount": 1,
  "surchargeNumOfNights": 1,
  "cancellationType": "Individual",
  "cancellationTerms": "individual terms",
  "freeCancelationDays": 2
}