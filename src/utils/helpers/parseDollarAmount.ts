const parseDollarAmount = (str: string) => {
  const amount = Number(str.replace(/\$/g, '').replace(/,/g, ''));
  return amount;
};

export default parseDollarAmount;
