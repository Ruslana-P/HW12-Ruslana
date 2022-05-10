const small_size = {
    price: 50,
    calories: 20}
;

const medium_size = {
    price: 75,
    calories: 30
}

const big_size = {
    price: 100,
    calories: 40
    }

const extraCheese ={
    price: 10,
    calories: 20
}

const extraSalad = {
    price: 20,
    calories: 5
}

const potato = {
    price: 15,
    calories: 10
}

const extraSpicy = {
    price: 15,
    calories: 0
}

const topping_mayo = {
    price: 20,
    calories: 5
}

function Hamburger (size) {
    this.price = size.price;
    this.calories = size.calories;
    this.getPrice = function() {
        return this.price;
    }
    this.getCalories =  function() {
        return this.calories;
    }
    this.addModifier = function(modifier){
        this.price = this.price + modifier.price;
        this.calories = this.calories + modifier.calories;
    }
}

const hamburger = new Hamburger(small_size);

hamburger.addModifier(topping_mayo);
hamburger.addModifier(potato);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());