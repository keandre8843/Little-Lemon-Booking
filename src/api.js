function convertTo12Hour(time24) {
  const [hours, minutes] = time24.split(':');
  let hour = parseInt(hours);
  const period = hour >= 12 ? 'PM' : 'AM';

  if (hour === 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
  }

  return `${hour}:${minutes} ${period}`;
}

export const fetchAPI = function(date) {
  if (window.fetchAPI) {
    const times24 = window.fetchAPI(date);
    return times24.map(time => convertTo12Hour(time));
  }

  console.warn('fetchAPI not found on window, using fallback');
  return ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];
};

export const submitAPI = function(formData) {
  if (window.submitAPI) {
    return window.submitAPI(formData);
  }
  console.log('Form submitted:', formData);
  return true;
};