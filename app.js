var userName = prompt('Please Enter your name!');

alert('Hello ' + userName);
document.write(userName + `... gotta catch em' all!`)

// function getName(){
//     var userName = prompt('Please Enter your name!')
//     return `Hello ` + userName
// }

// function countToTen(){
//     for(var i =0; i <=10; i++){
//         document.write(`<p>` + i + `</p>`);
//     }
// }

// function getNames(){
//     var userName;
//     while(userName){
//         userName = prompt(`Please enter your name`);
//         document.write(userName);
//     }
// }

// // function welcome(hourNow, whoGroup) {
// //     var greeting, html;
    
// //     if (hourNow < 0) {
// //         return "ERROR"
// //     }
    
// //     if (hourNow > 23) {
// //         return "ERROR";
// //     }


// //     if (hourNow > 18) {
// //       greeting = 'Good evening, ';
// //     } else if (hourNow > 12) {
// //       greeting = 'Good afternoon, ';
// //     } else if (hourNow >= 0) {
// //       greeting = 'Good morning, ';
// //     } else {
// //       greeting = 'Welcome, ';
// //     }
    
// //     greeting = greeting + whoGroup + '!';
// //     html = '<h3>' + greeting + '</h3>';

// //     return html;
// //   }

// // var processOrder = function() {
//   var order = prompt('What would you like to order?').toLowerCase();
//   var image;

//   while (order !== 'hotel' && order !== 'house') {
//     order = prompt('You can order a Hotel or a House. Which would you like?').toLowerCase();
//   }

//   image = '<img src="charmander.png' + order + '.png">';

//   return buildOrder(image);
// };
  
// function welcome(hourNow, whoGroup) {
//     var greeting, html;
    
//     if (hourNow < 0) {
//         return "ERROR"
//     }

//     if (hourNow > 18) {
//       greeting = 'Good evening, ';
//     } else if (hourNow > 12) {
//       greeting = 'Good afternoon, ';
//     } else if (hourNow >= 0) {
//       greeting = 'Good morning, ';
//     } else {
//       greeting = 'Welcome, ';
//     }
    
//     greeting = greeting + whoGroup + '!';
//     html = '<h3>' + greeting + '</h3>';

//     return html;
//   }

// var buildOrder = function(img) {
//   var output = '';
//   var count = prompt('How many would you like?');

//   for (var index = 0; index < count; index++) {
//     output += img; // equivalent to: output = output + image;
//   }

//   return output;
// }

// var processOrder = function() {
//   var order = prompt('What would you like to order?').toLowerCase();
//   var image = '';
//   var output = '';
//   var count;

//   while (order !== 'hotel' && order !== 'house') {
//     order = prompt('You can order a Hotel or a House. Which would you like?').toLowerCase();
//   }

//   image = '<img src="images/' + order + '.png">';

//   count = prompt('How many ' + order + 's would you like?');

//   for (var index = 0; index < count; index++) {
//     output = output + image; 
//   }

//   return output;
// };

// var processOrder = function() {
//     var order = prompt(`What type of Pokemon would you like to catch?`).toLowerCase();
//     var image;

//     while (order !== `water` && order !== `fire`) {
//         order = prompt(`Would you like a Fire or Water Pokemon?`).toLowerCase();
//     }

//     if (order === 'water') {
//         image = `<img src="squirtle.png">?`
//     }
//     else if (order === `fire`) {
//         image = `<img src="charmander.png">`
//     }

//     for (var index = 0; index < count; index++) {
//         output = output + image;
//     }
    
//     return output;
// };

// function getName(){
//     var userName = prompt('Please Enter your name!')
//     return `Hello ` + userName
// }

// function greeting(welcome){
//     if welcome == `Hello Matt`{
//         welcome = welcome + `! Welcome back`
//     }
//     return welcome
// }


