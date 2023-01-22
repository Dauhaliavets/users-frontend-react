const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

const convertDate = (date: string): string => {
  const currentDate = new Date(date);

  return currentDate.toLocaleString('en-GB', options);
};

export { convertDate };
