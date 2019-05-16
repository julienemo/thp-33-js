prompt("This is script 3: 2.2.2.: Mario's pyramid. Press <F12> then <OK> to continue.")

{
  let x;
  while (true)
  {
    x = prompt("Hey you! Welcome to Mario's pyramid. How many stages do you want?");
    if (x && parseInt(x)>=0){
      x = parseInt(x)
      console.log(`You've chosen ${x}.`);
      for(let n = 1;n <= x; n++){
        i = x - n
        console.log(" ".repeat(i)+"#".repeat(n));
      };
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
