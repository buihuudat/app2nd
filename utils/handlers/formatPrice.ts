export const formatPrice = (price: number) => {
  const current = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return current;
};
