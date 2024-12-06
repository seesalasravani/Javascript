const dateString = "2024-08-28";
const daysToAdd = 3;

// Parse date string into Date object
const date = new Date(dateString);

// Add days
date.setDate(date.getDate() + daysToAdd);

// Format new date
const newDateString = date.toISOString().split('T')[0];

console.log(newDateString);