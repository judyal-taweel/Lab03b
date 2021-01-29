
// var yourName = prompt('What is your name?');

// alert('hi ' + yourName)
// console.log(yourName);


var yourAge = prompt('how old are you?');



if(yourAge > 15 && yourAge <50){
alert('You will go trip to space');
}else if(yourAge < 15 && yourAge > 50){
alert('We are invited to watch the best film about space ');
};

console.log(yourAge);

var planetName = prompt('give me one of Planets ? ,write in small letters','place your planet');
while(planetName !=='earth' && planetName !=='mercury' && planetName !=='venus' && planetName !=='mars' && planetName !== 'jupiter' && planetName !=='saturn'&& planetName !=='uranus' && planetName !=='neptune'){
    planetName = prompt('please enter the correct planet')
}

console.log(planetName);



var numberPlanet = prompt('how many planet do you know ?')

var image=''; 

for(var i = 0; i < numberPlanet; i++){
    if(numberPlanet == 1 || 2 || 3 || 4 || 5 || 6 || 7){
        image = image + '<img src="https://www.alghad.tv/wp-content/uploads/2019/10/solar-system-1-678x381.jpg"/>'
        console.log(image)

    }else if(numberPlanet == 8){
        image = image + '<img src= "https://www.almrsal.com/wp-content/uploads/2020/05/223.png"/>'
    }
}
document.write(image)














// var yourPlanet = prompt('What is the name of your planet?');
// if(yourPlanet == 'earth'){
//     document.write('<h1>'+'Hello in our planet, you are from ' + yourPlanet +'<h1>');
// }else {
//     document.write('<h1>'+'Are you an alien creature? you are from ' + yourPlanet +'<h1>');
// }




// var number1 = 10;
// var number2 = "10";
// console.log(number1 == number2);

// function myFunction() {
//     document.body.style.backgroundColor = "#ffcccc";

// }
// function myFunction2() {
// document.body.style.backgroundColor = "#f0b3ff";
// }



