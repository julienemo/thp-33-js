//single line comment
/* multi
line
comment*/

//2.1.1. Bonjour
let greeting = "greeting: let from global"
{
  let greeting1= "greeting1: let from sub-bloc"
  var greeting2= "greeting2: var from sub-bloc"
  greeting3= "greeting3: no let no var from sub-bloc"
}
console.log(greeting);
console.log(greeting2);
console.log(greeting3);
/* like anywhere else, when js meets an error
it stops there and don't look further*/

/*a var can be declared with let, or var, or implicitly
note that "let" in a sub-bloc means a "local variable"
the following line will return an error*/

/*console.log(greeting1); returns
Uncaught ReferenceError: greeting1 is not defined*/
{
let a = 1, b = 2;

console.log("a increment");
/*note how a+1 doesn't change nor return a value
and a++ changes but doesn't return a value
and a+= changes and returns a value */
console.log(a);
console.log(a + 1);
console.log(a);
console.log(a+= 1);
console.log(a);
console.log(a++);
console.log(a);
}

{
  console.log("array operations")
  let theaters = ["ComedieFrancaise","LaVillette","Chaillot","OperaComique","TheatreDuRondPoint"];
  console.log(theaters)
  console.log(theaters.length)
  console.log(theaters[1])
  // as in ruby, a string is an array of characters
  console.log(theaters[1][0])


  /*note hw unshift and push works with multiple elements
  unshift muliple will take the elements as a whole and
  insert them in the presented order in the first place of the array*/
  theaters.push("TheatreMontfort","TheatreOdeon","TheatreDeLatelier")
  theaters.unshift("AtheneeTheatreLouisJouvet","LaColline","LaBriqueterie")
  console.log(theaters)

  /*pop and shift don't take argument,
  they change the array and return the removed item*/
  let a = theaters.pop()
  console.log(a)
  console.log(theaters)
  let b = theaters.shift()
  console.log(b)
  console.log(theaters)

  //splice takes two arguments:staring items and the item before which to stop
  //it changes the array and returns the removed part
  let c = theaters.splice(0,2)
  console.log(c)
  console.log(theaters)

  /*array.slice doesn't change the original array but returns the slice
  slice func takes two arguments, if there is one more argument
  it will be ignored and no error is returned*/
  theaters.slice(0,3,4)
  console.log(theaters)
  console.log(theaters.slice(0,3,4))
}

{
  // adding a string with a number (regardless of order)
  // is adding the concatenation string with number transformed to string
  console.log("string and number operation");
  let a = 3;
  console.log("Bonjour à tous les "+ a);
  console.log(a + "3");

  // multiplcation between string and number (regardless of order) doesn't work
  // will return NaN but will not display error nor stop prog
  console.log("coucou" * a);
  console.log(a * "coucou");

  // inserting a variable into a string
  // replace the #{} by ${}
  // same as ruby, it only works when enclosed in special container
  // ``
  let numStudent = 4;
  let statement1 = `Dans mon groupe on est ${numStudent} moussaillons`;
  let statement2 = "Dans mon groupe on est ${numStudent} moussaillons";
  let statement3 = 'Dans mon groupe on est ${numStudent} moussaillons';

  console.log(statement1);
  console.log(statement2);
  console.log(statement3);
}

{
  console.log("comparaisons");
  console.log("=== is called a strict comparaison while == is an abstract comparaison");
  console.log("the >,<,>=,<= are all abstract");
  console.log(`36 = "36" => Uncaught ReferenceError: Invalid left-hand side in assignment`)
  console.log(`"36" == 36 ${"36" == 36}`);
  console.log(`"36" === 36 ${"36" === 36}`);
  let a = 4, b = "4", c = "7", d = "d", e ="e"
  console.log(`a = 4, b = "4", c = "7", d = "d", e ="e"`);
  console.log(`a == b ${a == b}`);
  console.log(`a === b ${a === b}`);
  console.log(`a < c ${a < c}`);
  console.log(`b < c ${b < c}`);
  console.log(`a < d ${a < d}`);
  console.log(`a == d ${a == d}`);
  console.log(`a > d ${a > d}`);
  console.log(`d < e ${d < e}`);
}

{
  console.log("flow controlling by condition");
  console.log("note in JS condition flow controlling, there is no end");
  let number = -7;
  if(number > 0) {
    console.log("if=> number is positive");
  } else if (number === 0) {
    console.log("else if=>number is 0")
  } else {
    console.log("else=> number is negative")
  }

  if (true && true) {
  console.log("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
  }
  if (true || false) {
    console.log("ce message s'affiche car avec un OU, si l'une des conditions est à TRUE, le résultat est TRUE");
  }
  if (!false) {
    console.log("ce message s'affiche car un NON sur FALSE donne TRUE");
  }
}

{
  let number = 0; //0 is considered to be non-existant, #logiquimperturbabledesfous
  if (number) {
    console.log("ce message ne s'affiche que si number est non nul ");
  }

  let string = ""; //"" => empty, " "=> not empty, ok
  if (string) {
    console.log("ce message ne s'affiche que si string est non vide");
  }

  let myVariable
  // ruby's nil is JS's null, existance without declaration nor assignment is null
  // also, you can't just write xx = undefined, it'll return an error
    console.log("ce message ne s'affiche que si myVariable contient une valeur ");

}


{
  const multiply = function(inputNumber1, inputNumber2) {
    let outputNumber = inputNumber1 * inputNumber2;
    return outputNumber;
  }

  // now doing a let multiply = 3 will get an error
  console.log(multiply(2, 3));
  const otherMultiply = multiply; //On peut ainsi affecter la fonction à une autre variable
  console.log(otherMultiply(2, 3));
}
