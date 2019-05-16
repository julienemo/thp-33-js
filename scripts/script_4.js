prompt("This is script 4: 2.3.1. Startup Nation. Press <F12> then <OK> to continue.")
{
  // basical settings
  const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  let bornIn70s = [];
  let names = [];

  // I decided to iterate only once through the loop
  // So I printed the age of each person first
  console.log("Ages of all entrepreneurs if they were all alive today.")
  for(let person in entrepreneurs){

    // lazy people settings
    let birthYear = entrepreneurs[person]['year'];
    let firstName = entrepreneurs[person]['first'];
    let lastName = entrepreneurs[person]['last'];

    // new array of only names
    names.push({'first':firstName, 'last':lastName})

    //new array of people IF birthYear fits the condition
    console.log(`---${firstName} is ${2019 - birthYear} years old now.`)
    if ((birthYear >= 1970) && (birthYear <= 1979)){
      bornIn70s.push(entrepreneurs[person])
    };
  };
  console.log("")
  console.log("List of entrepreneurs born in the 70s:");
  console.log(bornIn70s);

  console.log("")
  console.log("List of first and last names")
  console.log(names);

  console.log("")
  sortedArray = entrepreneurs.sort((a,b) => (a.last> b.last) ? 1 : ((b.last > a.last) ? -1 : 0));
  console.log("List sorted by family name:");
  console.log(sortedArray);
}
