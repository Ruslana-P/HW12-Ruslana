const small_size = {
    name: 'small_burger',
    price: 50,
    calories: 20
}

const medium_size = {
    name: 'medium_burger',
    price: 75,
    calories: 30
}

const big_size = {
    name: 'big_burger',
    price: 100,
    calories: 40
    }

const extraCheese = {
    name: 'extraCheese',
    price: 10,
    calories: 20
}

const extraSalad = {
    name: 'extraSalad',
    price: 20,
    calories: 5
}

const potato = {
    name: 'potato',
    price: 15,
    calories: 10
}

const extraSpicy = {
    name: 'extraSpicy',
    price: 15,
    calories: 0
}

const topping_mayo = {
    name: 'topping_mayo',
    price: 20,
    calories: 5
}

function Hamburger(size) {
    this.name = size.name;
    this.price = size.price;
    this.calories = size.calories;
    this.modifiers = [];

    this.getPrice = function() {
        return this.price;
    }

    this.getCalories = function() {
        return this.calories;
    }

    this.addModifier = function(modifier) {
        this.price = this.price + modifier.price;
        this.calories = this.calories + modifier.calories;
        this.modifiers.push(modifier);
    }
}

const hamburger = new Hamburger(small_size);

hamburger.addModifier(topping_mayo);
hamburger.addModifier(potato);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());
console.log(hamburger.modifiers);