const dateString = "2024-08-28";

// Parse date string into Date object
const date = new Date(dateString);

// Format date
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const year = date.getFullYear();

const formattedDate = `${month}/${day}/${year}`;

console.log(formattedDate);