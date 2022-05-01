// Key: .dough, .sauce, .cheese, .toppings
// Value: dough, sauce, cheese, toppings
// Parameters: (dough, sauce, cheese, toppings)
// Arguements: ("deepdish", "marinara", ["Mozzarella"], ["Pepperoni", "Sausage", "Chicken"])




function pizzaOven(dough, sauce, cheese, toppings) {
    var pizza = {};
    pizza.dough = dough;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deepdish", "marinara", ["Mozzarella"], ["Pepperoni", "Sausage", "Chicken"]);
var p2 = pizzaOven("NYC", "none", ["Provolone"], ["Tomato", "Italian Sausage"]);
var p3 = pizzaOven("thin crust", "white sauce", ["Gouda"], ["Onion", "Sausage", "Banana Pepper"]);
var p4 = pizzaOven("traditional", "marinara", ["Mozzarella", "Feta"], ["Mushrooms", "Olives", "Onions"]);
console.log(p1);


// function randomPizza() {
//     var randomCrust = getRandomItem();
//     var randomSauce = getRandomItem();
//     var randomCheeses = getRandomItems();
//     var randomToppings = getRandomItems();
//     return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
// }

// var doughOptions = ["Thin Crust", "Traditional", "NYC", "Deep Dish"];
// var sauceOptions = ["Marinara", "Red Sauce", "White Sauce", "Balsamic"];
// var cheeseOptions = ["Mozzarella", "Gouda", "PepperJack", "American"];
// var toppingOptions = ["Pepperoni", "Sausage", "Peppers", "Onions"];

// function getRandomItem (arr) {
//     var i = Math.floor(arr.length * Math.random());
//     return arr[i];
// }

// function getRandomItems (max, min) {
//     return Math.floor(Math.random * max - min) + min;
// }

