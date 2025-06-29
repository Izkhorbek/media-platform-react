const formatPrice = (price: number) => {
  return new Intl.NumberFormat('uz-UZ').format(price) + ' so`m';
};

export default formatPrice;
