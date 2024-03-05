// EXAMPLE 1 - Initialize a Date with Time Zone using JavaScript

const date = new Date();

// ✅ Get a string according to a provided Time zone
console.log(
  date.toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
  }),
); // 👉️ "7/24/2023, 4:48:16 AM"

console.log(
  date.toLocaleString('de-DE', {
    timeZone: 'Europe/Berlin',
  }),
); // 👉️ "24.7.2023, 13:48:16"

// ✅ Or get a Date object with the specified Time zone
function changeTimeZone(date, timeZone) {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    }),
  );
}

const laDate = changeTimeZone(new Date(), 'America/Los_Angeles');
console.log(laDate); // 👉️ "Mon Jul 24 2023 04:52:34"

const berlinDate = changeTimeZone(new Date(), 'Europe/Berlin');
console.log(berlinDate); // 👉️ "Mon Jul 24 2023 13:52:34"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get a Date object initialized to a particular time zone

// function changeTimeZone(date, timeZone) {
//   if (typeof date === 'string') {
//     return new Date(
//       new Date(date).toLocaleString('en-US', {
//         timeZone,
//       }),
//     );
//   }

//   return new Date(
//     date.toLocaleString('en-US', {
//       timeZone,
//     }),
//   );
// }

// const laDate = changeTimeZone(new Date(), 'America/Los_Angeles');
// console.log(laDate); // 👉️ "Mon Jul 24 2023 04:50:36"

// const berlinDate = changeTimeZone(new Date(), 'Europe/Berlin');
// console.log(berlinDate); // 👉️ "Mon Jul 24 2023 13:50:36"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Specifying different properties on the `options` object

// const date = new Date();

// console.log(
//   date.toLocaleString('en-US', {
//     timeZone: 'America/Los_Angeles',
//     dateStyle: 'full',
//     timeStyle: 'full',
//   }),
// ); // 👉️ "Monday, July 24, 2023 at 4:53:10 AM Pacific Daylight Time"

// ------------------------------------------------------------------

// // EXAMPLE 4 - The toLocaleString() method calls Intl.DateTimeFormat under the hood

// const date = new Date();

// // US English uses month-day-year order
// console.log(new Intl.DateTimeFormat('en-US').format(date));
// // "7/24/2023"

// // British English uses day-month-year order
// console.log(new Intl.DateTimeFormat('en-GB').format(date));
// // "24/07/2023"

// // German uses day-month-year order
// console.log(new Intl.DateTimeFormat('de-DE').format(date));
// // "24.7.2023"
