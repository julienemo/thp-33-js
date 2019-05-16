prompt("This is script 6: 2.4.1. Code of life . Press <F12> then <OK> to continue.")
{
  // basical settings
  let rnas= ['CCGUCGUUGCGCUACAGC','CCUCGCCGGUACUUCUCG'];
  for (let i in rnas){
    if (rnas[i].length % 3 !== 0 ){
      console.log("At least one of the RNA strings has the wrong number of letters.")
      throw "Go check your stuff and come back later.";
    } else {
        rnas[i] = rnas[i].match(/.{1,3}/g);
        for (n in rnas[i]){
          switch (rnas[i][n]) {
            case "UCU":
            case "UCC":
            case "UCA":
            case "UCG":
            case "AGU":
            case "AGC":
              rnas[i][n] = "Sérine";
              break;
            case "CCU":
            case "CCC":
            case "CCA":
            case "CCG":
              rnas[i][n] = "Proline";
              break;
            case "UUA":
            case "UUG":
              rnas[i][n] = "Leucine";
              break;
            case "UUU":
            case "UUC":
              rnas[i][n] = "Phénylalanine";
              break;
            case "CGU":
            case "CGC":
            case "CGA":
            case "CGG":
            case "AGA":
            case "AGG":
              rnas[i][n] = "Arginine";
              break;
            case "UAU":
            case "UAC":
              rnas[i][n] ="Tyrosine";
              break;
          }
        }
        rnas[i] = rnas[i].join("-")
    }
  }

  console.log("The two RNA strings are:")
  for (let i in rnas){
    console.log(`---${rnas[i]}`);
  }

}
