// Helper function to convert 24-hour time to 12-hour format
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

// Seeded random number generator for consistency
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

// ENHANCED: Generate more available reservation times for a given date
export const fetchAPI = function(date) {
  // Try to use the window.fetchAPI if available (for production/testing)
  if (window.fetchAPI) {
    const times24 = window.fetchAPI(date);
    return times24.map(time => convertTo12Hour(time));
  }

  // ENHANCED FALLBACK: More time slots with better coverage
  console.warn('fetchAPI not found on window, using enhanced fallback with more time slots');
  
  let result = [];
  let random = seededRandom(date.getDate());

  // EXPANDED TIME SLOTS - Lunch through Late Dinner
  const allTimeSlots = [
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
    '8:00 PM',
    '8:30 PM',
    '9:00 PM',
    '9:30 PM',
    '10:00 PM'
  ];

  // Randomly select 8-12 available time slots for realistic availability
  const numberOfSlots = Math.floor(random() * 5) + 8; // Between 8 and 12 slots

  for (let i = 0; i < numberOfSlots; i++) {
    const randomIndex = Math.floor(random() * allTimeSlots.length);
    const selectedTime = allTimeSlots[randomIndex];
    
    // Avoid duplicates
    if (!result.includes(selectedTime)) {
      result.push(selectedTime);
    }
  }

  // Sort times chronologically
  result.sort((a, b) => {
    const timeA = convertTo24HourForSort(a);
    const timeB = convertTo24HourForSort(b);
    return timeA - timeB;
  });

  return result;
};

// Helper function to convert time to 24-hour format for sorting
function convertTo24HourForSort(time) {
  const [timePart, period] = time.split(' ');
  let [hours, minutes] = timePart.split(':').map(Number);
  
  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }
  
  return hours * 60 + minutes;
}

// Submit booking form data
export const submitAPI = function(formData) {
  // Try to use the window.submitAPI if available (for production/testing)
  if (window.submitAPI) {
    return window.submitAPI(formData);
  }
  
  // Fallback: Log the submission and simulate success
  console.log('Form submitted:', formData);
  
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};