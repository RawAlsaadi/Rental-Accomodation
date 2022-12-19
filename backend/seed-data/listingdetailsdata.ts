function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const listingDetails = [
  {
      livingSpaceInM: 1,
      numOfBeds: 1,
      singleRooms: 1,
      doubleRooms: 1,
      tripleRooms: 1,
      livingRooms: 1,
      otherRooms: 1,
      bathroomWithShower: 1,
      bathroomWithTub: 1,
      bathroomWithShowerAndTub: 1,
      guestToilet: 1,
  },
  {
    livingSpaceInM: 1,
    numOfBeds: 1,
    singleRooms: 1,
    doubleRooms: 1,
    tripleRooms: 1,
    livingRooms: 1,
    otherRooms: 1,
    bathroomWithShower: 1,
    bathroomWithTub: 1,
    bathroomWithShowerAndTub: 1,
    guestToilet: 1,
  },
  {
    livingSpaceInM: 1,
    numOfBeds: 1,
    singleRooms: 1,
    doubleRooms: 1,
    tripleRooms: 1,
    livingRooms: 1,
    otherRooms: 1,
    bathroomWithShower: 1,
    bathroomWithTub: 1,
    bathroomWithShowerAndTub: 1,
    guestToilet: 1,
  },
]