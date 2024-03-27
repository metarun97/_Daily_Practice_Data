// HTML EVENTS IN JAVASCRIPT:-

/* HTML events are "things" that happen to HTML elements.
when Javascript is used in HTML pages,Javascript can 'react' on these events.
*/

// HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// A n HTML web page has finished loading
// An HTML input field we changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// Javascript lets you execute code when events are detected.

// HTML allows event handler attributes, with Javascript code , to be added to HTML elements.

// Section 4 ways of writing Events in Javascript

// 1. using inline events alert();
// 2. By Calling a function (we already seen and most common way of writing)
// 3. using Inline events (HTML onclick = "" property and element.onclick)
// 4. using Event Listeners (addEventlistener and IE's attachEvent)



// 1st way=>

// alert("Hello I am the basic way to handle events in Javascript...!")

// 2nd way=>

// const myFunc = () => {
//     alert('Most common way of writing functions.');
// }

// 3rd way=>

// const thirdWay = document.getElementById("thirdWay");

// thirdWay.onclick = function(){
//     alert("Third way of writing Event.")
// }

// Note=> It overrides the event once it call once at a time.

// 4th way=>

// const fourthWay = document.querySelector('#fourth');

// fourthWay.addEventListener('click', () =>{
//     alert('Most triditional way of writing events.')
// });

// Note=> It doesn'y overrides the event once it call once at a time you can call it multiple times by addeventlistener.


// Event Object?

// Event object is the parent object of the event object.
// Eg=> MouseEvent, FocusEvent,KeyboardEvent etc


// MouseEvent in Javascript

// The MouseEvent Object
// Events that occur when mouse interacts with HTML.
// document belongs to the MouseEvent Object.


// KeyboardEvents in Javascript
// Event that occur when presses a key on the KeyboardEvent,
// belongs to the keyboardEvent Object.


// function myFunc1(){
//     document.getElementById("myId").style.color = "red";
// }
// function myFunc2(){
//     document.getElementById("myId").style.color = "yellow";
// }


// const mouseActivity = document.getElementById("box");

// mouseActivity.addEventListener('mouseenter', () => {
//     mouseActivity.style.background = "red";
//     console.log('Movse in Bro');
// })

// mouseActivity.addEventListener('mouseleave', () => {
//     mouseActivity.style.background = "green";
//     console.log('Movse out Bro');
// })


// Mouse events in Javascript
// const fiftWay = document.getElementById("fifth");

// const searchEvent = () => {
//     alert("Hello")
// console.log(event);
// console.log(event.target);
// console.log(event.type);
// }

// fiftWay.addEventListener('click', searchEvent)


// Keyboard events:-

// const keyPress = () =>{
//     document.getElementById("keys").innerHTML = `You press ${event.key} and it's code is ${event.code}`;
// }

// const keyDown = () =>{
//     document.getElementById('keys').innerHTML = 'Key is down';
// }

// const keyUp = () =>{
//     document.getElementById('keys').innerHTML = 'Key is up';
// }


// InputEvents in javascript
// The onchange event occurs when the value of an element has been changed.
// For radiobuttons and checkbxes, the onchange event coours when the checked state has been changed.


// Onchange event:-

// const selectElement = () => {
//     const inputChange = document.getElementById('ice').value;
//     const iceCream = document.getElementById('Icecream').value;
//     const result = document.getElementById("result");

//     result.innerHTML = `Mr ${inputChange} select ${iceCream} icecream flavour`;
// console.log(`${inputChange} and ${iceCream}`);
// };


// Addevent listener:-

// const iceChane = document.getElementById('Icecream');

// iceChane.addEventListener('change',() =>{
//     const inputchange = document.getElementById('ice').value;
//     const iceSelect = document.getElementById('Icecream').value;
//     const result = document.getElementById('result');
//     result.innerHTML = `Mr ${inputchange} selected the ${iceSelect} flavour.`
// })




