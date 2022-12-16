function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const addresses = [
  {
      streetNum: 1001,
      postalCode: "B57 9BH",
      townName: "London",
      country: "GB",
  },
  {
      streetNum: 1002,
      postalCode: "G23 8KH",
      townName: "Dublin",
      country: "IE",
  },
  {
      streetNum: 1003,
      postalCode: "K79oa9",
      townName: "Amsterdam",
      country: "NL",
  },
]