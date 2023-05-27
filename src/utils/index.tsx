export const tripDateString = ({ title, startDate, endDate}) => {
  const startDay = startDate.getDate();
  const startMonth = startDate.toLocaleString('default', { month: 'short' });
  const startYear = startDate.getFullYear();

  const endDay = endDate.getDate();
  const endMonth = endDate.toLocaleString('default', { month: 'short' });
  const endYear = endDate.getFullYear();

  if (startYear !== endYear) {
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`
  } else if (startMonth !== endMonth) {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`
  }

  return `${startMonth} ${startDay} - ${endDay}, ${startYear}`
}
