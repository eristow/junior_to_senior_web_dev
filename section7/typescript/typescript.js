var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
console.log(answer);
//TYPES
// boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = 'brown';
var favoriteQuote = "I'm not old, I'm only " + age + ".";
// Array
var pets = ['cat', 'dog', 'fish'];
var pets2 = ['lion', 'dragon', 'lizard'];
// object (lowercase)
var wizard = {
    name: 'John'
};
// null and undefined
var meh = undefined;
var nope = null;
// Tuple
var basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNumber = Size.Small;
// Any - !!!!!!!! BE CAREFUL
var whatever = 'oh no';
whatever = 5;
whatever = true;
whatever = Size.Small;
whatever = basket;
// void - nothing returned
var sing = function () {
    console.log('lala9a');
};
// never - function never returns, or var is never true
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('Fight!');
};
var robotArmy = {
    count: 5,
    type: 'cool',
    magic: 'yep'
};
fightRobotArmy(robotArmy);
var dog = {};
dog.count;
var robots = { count: 5, type: 'string' };
// Function
var fightRobotArmy2 = function (robots) {
    console.log('testFight2');
    return 5;
};
// Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        // instance vars set to public by default
        this.sing = 'lalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('ROAR');
console.log(lion.greet());
// Union
var confused = 'hello';
confused = 5;
// Type Inference
var x = 4;
// x = 'test';    TS knows this is a number through type inference
