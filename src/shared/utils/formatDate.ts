export function formatDate12Hour(dateString: string): string {
  const date = new Date(dateString);
  let hour = date.getUTCHours();
  const minute = date.getUTCMinutes().toString().padStart(2, '0');
  const ampm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12 || 12;
  const formattedHour = hour.toString().padStart(2, '0');

  return `${formattedHour}:${minute} ${ampm}`;
}

export function formatDateToString(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
}
