function timestamp() {
    // sometime in the last 30 days
    const stampy =
      Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
    return new Date(stampy).toISOString();
  }

export const listings = [
    {
        accomodationType: "holiday-home",
        accomodationName: "name100",
        accomodationShortDescription: "bla100",
        accomodationDetailedtDescription: "bla100",
        licenceNum: "100",
    },
    {
        accomodationType: "bed-and-breakfast",
        accomodationName: "name200",
        accomodationShortDescription: "bla200",
        accomodationDetailedtDescription: "bla200",
        licenceNum: "200",
    },
    {
        accomodationType: "castle",
        accomodationName: "name300",
        accomodationShortDescription: "bla300",
        accomodationDetailedtDescription: "bla300",
        licenceNum: "300",
    },

//   "companyName": "Invest Ottawa",
//   "title": "mr",
//   "firstName": "raw",
//   "SureName": "moe",
//   "emailAddresse": "raw@hotmail.com",
//   "phoneNumber": "+16666666666",
//   "currencyType": "euro",
//   "pricesType": "per-object",
//   "maximumOccupancy": 1,
//   "basePricePerNight": 1,
//   "basePricePerWeek": 1,
//   "preperationTime": 1,
//   "minimumStay": 1,
//   "surchargePerNightAdult": 1,
//   "surchargePerWeekAdult": 1,
//   "surchargePerWeekChild": 1,
//   "surchargePerNightChild": 1,
//   "surchargeFixedAmount": 1,
//   "surchargeNumOfNights": 1,
//   "cancellationType": "Individual",
//   "cancellationTerms": "individual terms",
//   "freeCancelationDays": 2
]