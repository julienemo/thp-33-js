console.log("script 1");
console.log("2.1.1.: Hello world!");

{
  let name;
  while (true) {
    name = prompt("2.1.2.: What is your name?");
    if (name){
      // I allowed myself to capitalize the name
      // turns out to be not quite easy hmmmmm....
      name = name.charAt(0).toUpperCase() + name.slice(1);
      console.log(`Hello, ${name} !`);
      break;
    }
  }
}
