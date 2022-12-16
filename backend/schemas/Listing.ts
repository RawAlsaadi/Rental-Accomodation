import { relationship, text } from "@keystone-6/core/fields";
import { list } from "@keystone-6/core";
import { allowAll } from '@keystone-6/core/access';

export const Listing = list({
  fields:{
    accomodationName: text( {validation: {isRequired: true}} ),
    accomodationShortDescription: text( {validation: {isRequired: true}} ),
    accomodationDetailedtDescription: text( {validation: {isRequired: true}} ),
    licenceNum: text( {validation: {isRequired: true}} ),
    user: relationship({ ref: 'User' }),
    address: relationship({ ref: 'Address' }),
    photo: relationship({
      ref: 'ListingImage',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['image'],
        inlineCreate: { fields: ['image'] },
        inlineEdit:  { fields: ['image'] },
      },
    }),

    // // const/enum
    // accomodationType: select({
    //   type: 'enum',
    //   validation: {isRequired: true},
    //   options: [
    //     { value: "holiday-home", label: "Holiday home" },
    //     { value: "holiday-flat", label: "Holiday flat" },
    //     { value: "bed-and-breakfast", label: "Bed and Breakfast" },
    //     { value: "castle", label: "Castle / Palace" },
    //     { value: "hut", label: "Hut" },
    //     { value: "hotel", label: "Hotel" },
    //     { value: "boarding-house", label: "Boarding house" },
    //     { value: "house-boat", label: "House boat" }
    //   ]
    // }),

    // // detailed 
    // livingSpaceInM: integer(),
    // numOfBeds: integer(),
    // singleRooms: integer(),
    // doubleRooms: integer(),
    // tripleRooms: integer(),
    // livingRooms: integer(),
    // otherRooms: integer(),
    // bathroomWithShower: integer(),
    // bathroomWithTub: integer(),
    // bathroomWithShowerAndTub: integer(),
    // guestToilet: integer(),
    // // furnishing: text({ validation: {isRequired: true}} ),
    // // suitability: text({ validation: {isRequired: true} }),
    
    // // guests table
    // companyName: text(),
    // title: select({
    //   options: [
    //     { label: 'Mr.', value: 'mr' },
    //     { label: 'Mrs.', value: 'mrs' },
    //     { label: 'Company', value: 'company' },
    //     { label: 'Family', value: 'family' },
    //   ]
    // }),
    // firstName: text(),
    // SureName: text(),
    // emailAddresse: text(),
    // phoneNumber: text(),
    // currencyType: select({
    //   options: [
    //     { value: "euro", label: "Euro" },
    //     { value: "us-dollar", label: "US-Dollar" },
    //     { value: "pound-stirling", label: "Pound Stirling" },
    //     { value: "poln-zloty", label: "poln. Zloty" },
    //     { value: "thai-baht", label: "Thai Baht" },
    //     { value: "CHF", label: "CHF" },
    //     { value: "swedish-crowns", label: "Swedish crowns" }
    //   ]
    // }),
    // pricesType: select({
    //   options: [
    //     { value: "per-object", label: "Per object" },
    //     { value: "per-person", label: "Per person" },
    //     { value: "per-room", label: "Per room" }
    //   ]
    // }),
    // maximumOccupancy: integer(),
    // basePricePerNight: integer(),
    // basePricePerWeek: integer(),
    // preperationTime: integer(),
    // minimumStay: integer(),
    // surchargePerNightAdult: integer(),
    // surchargePerWeekAdult: integer(),
    // surchargePerWeekChild: integer(),
    // surchargePerNightChild: integer(),
    // surchargeFixedAmount: integer(),
    // surchargeNumOfNights: integer(),
    // cancellationType: text(),
    // cancellationTerms: text(),
    // freeCancelationDays: integer()

    // additionalCosts: {
    //       id: integer(),
    //       costType: text(),
    //       calcType: text(),
    //       price: integer()
    //   },
    // TODO: Photo
  },
  access: allowAll,
});