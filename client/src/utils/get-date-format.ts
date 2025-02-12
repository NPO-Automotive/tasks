export default (
  value: Date,
  longDateFormat = 'longDateTime',
  fullDateFormat = 'fullDateTime',
) => {
  const year = value.getFullYear();
  const currentYear = new Date().getFullYear();

  return year === currentYear ? longDateFormat : fullDateFormat;
};
