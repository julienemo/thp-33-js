console.log("script 2");
{
  console.log("2.2.1.: quick maths");
  let x;
  while (true)
  {
    x = prompt("Please pick a postive integer. I'll do the fractorial.");
    if (x && parseInt(x)>=0){
      console.log(`You've chosen ${x}.`);
      let result = 1;
      for(let n = 1;n <= x; n++){
        result = result * n
      };
      console.log(`The fractrorial of ${x} is ${result}.`);
    };break;
  }
}

/*console.log(typeof(3)==='number')
console.log
if (typeof(x) === 'number')
{
  console.log("At least you entered a number");
  break;
}

}*/
