export const irrCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("fa-IR").format(price) : null;
};

export const gbpCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("en-GB").format(price) : null;
};
