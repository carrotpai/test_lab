const date1 = new Date('January 1, 2023 00:00:00');
console.log(date1)
console.log(new Date())
const date2 = new Date(Math.abs(new Date().getTime() - date1.getTime()))
console.log(date2)
console.log(`months: ${date2.getMonth()}, days: ${date2.getDate()}, hours: ${date2.getUTCHours()}, minutes: ${date2.getMinutes()} to new year`)