export const tripDateString = ({ startDate, endDate }) => {
  const startDateJS = new Date(startDate);
  const endDateJS = new Date(endDate);

  const startDay = startDateJS.getDate();
  const startMonth = startDateJS.toLocaleString('default', { month: 'short' });
  const startYear = startDateJS.getFullYear();

  const endDay = endDateJS.getDate();
  const endMonth = endDateJS.toLocaleString('default', { month: 'short' });
  const endYear = endDateJS.getFullYear();

  if (startYear !== endYear) {
    return `${startMonth} ${startDay}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`
  } else if (startMonth !== endMonth) {
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${startYear}`
  }

  return `${startMonth} ${startDay} - ${endDay}, ${startYear}`
}
