const sum = (a: number, b: number): number => {
  return a + b;
};

const answer = sum(4, 5);

console.log(answer);

//TYPES
// boolean
const isCool: boolean = true;

// number
const age: number = 56;

// string
const eyeColor: string = 'brown';
const favoriteQuote: string = `I'm not old, I'm only ${age}.`;

// Array
const pets: string[] = ['cat', 'dog', 'fish'];
const pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// object (lowercase)
const wizard: object = {
  name: 'John',
};

// null and undefined
const meh: undefined = undefined;
const nope: null = null;

// Tuple
const basket: [string, number] = ['basketball', 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
const sizeName: string = Size[2];
const sizeNumber: number = Size.Small;

// Any - !!!!!!!! BE CAREFUL
let whatever: any = 'oh no';
whatever = 5;
whatever = true;
whatever = Size.Small;
whatever = basket;

// void - nothing returned
const sing = (): void => {
  console.log('lala9a');
};

// never - function never returns, or var is never true
const error = (): never => {
  throw Error('oops');
};

// interface - useful for props in react
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}
const fightRobotArmy = (robots: RobotArmy) => {
  console.log('Fight!');
};
const robotArmy = {
  count: 5,
  type: 'cool',
  magic: 'yep',
};
fightRobotArmy(robotArmy);

// Type Assertion
interface CatArmy {
  count: number;
  type: string;
  magic: string;
}
const dog = {} as CatArmy;
dog.count;

// Optional Property
interface RobotArmy2 {
  count: number;
  type: string;
  magic?: string;
}
const robots = { count: 5, type: 'string' };

// Function
const fightRobotArmy2: Function = (robots: RobotArmy2): number => {
  console.log('testFight2');
  return 5;
};

// Class
class Animal {
  // instance vars set to public by default
  private sing: string = 'lalalala';

  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}
const lion = new Animal('ROAR');
console.log(lion.greet());

// Union
let confused: string | number = 'hello';
confused = 5;

// Type Inference
let x = 4;
// x = 'test';    TS knows this is a number through type inference
