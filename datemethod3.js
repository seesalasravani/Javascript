const dateString1 = "2024-08-28";
const dateString2 = "2024-09-01";

const date1 = new Date(dateString1);
const date2 = new Date(dateString2);
const days = Math.round((date2 - date1) / (1000 * 3600 * 24));

console.log(days);