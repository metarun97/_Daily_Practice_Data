// Date & time in javascript:-

/*
Javascript Date objects represents a single moment in time in a platform-indepent format. Date objects contain a number that represents milliseconds since January 1970 UTC.
*/

// Creating Date Objects:-

// There are 4 ways to create a new date object.

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// It takes 7 arguments

// new Date(milliseconds)

// we will avoid month section
// new Date(date string)

// new Date() constructor:-

// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());                     // 2024-03-19T17:56:16.519Z
// console.log(new Date().toLocaleString());    // 3/19/2024, 11:25:49 PM
// console.log(new Date().toString());          // Tue Mar 19 2024 23:25:23 GMT+0530 (India Standard Time)

// Date.now()

/*
Returns the numeric values corrosponding to the correct time-the numder of milliseconds elapsed since January 1 ,1997 00:00:00 UTC
*/
// console.log(Date .now());                    // 1710948099693


/*
new Date(year,month, ...)
7 numbers spacify year,month,day,hour,month,second and millisecond(in that order)
Note: Javascript counts months from 0 to 11.

Where January is 0 and December is 11.
*/

// var d = new Date(2018, 11, 24, 10, 33, 30, 0);
// console.log(d.toLocaleString());           // 12/24/2018, 10:33:30 AM

// new Date(dateString)
// new Data(dateString) creates a new date object from a date string

// var d = new Date("October 13, 2014 11:13:00");
// console.log(d);                          // 2014-10-13T05:43:00.000Z
// console.log(d.toLocaleString());         // 10/13/2014, 11:13:00 AM 

// console.log(Date.now());                 // 1710949982443    


// var d = new Date(0);
// var d = new Date(100000000000);
// var d = new Date(1609574531435);
// var d = new Date(86400000*2);

// console.log(d.toLocaleString());             // 1/1/1970, 5:30:00 AM
// console.log(d.toLocaleString());             // 3/3/1973, 3:16:40 PM
// console.log(d.toLocaleString());             // 1/2/2021, 1:32:11 PM
// console.log(d.toLocaleString());             // 1/3/1970, 5:30:00 AM


// Date methods:-

// const curDate = new Date();


// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// How to get the indivisual date:-

// console.log(curDate.setFullYear(2026));          // 1774025850041
// console.log(curDate.setFullYear(2026, 6, 5));    // 1774025850041
// console.log(curDate.setMonth(10));               // 1774025850041
// console.log(curDate.setDate(2026));              // 1774025850041


// Times Methods:-

// const curTime = new Date();

// The getTime() method returns the number of milliseconds

// console.log(curTime.getTime());                       // 1710954587167
// console.log(curTime.getHours());                      // 22 hours
// console.log(curTime.getMinutes());                    // 39 minutes 
// console.log(curTime.getSeconds());                    // 47 seconds
// console.log(curTime.getMilliseconds());               // 167 milliseconds


// let curTime = new Date();

// How to set the individual time 
// console.log(curTime.setTime());
// console.log(curTime.setHours(5));                       // 1710892930674
// console.log(curTime.setMinutes(5));                     // 1710891310674
// console.log(curTime.setSeconds(5));                     // 1710891305674
// console.log(curTime.setMilliseconds(5));                // 1710891305005



