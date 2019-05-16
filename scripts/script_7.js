prompt("This is script 7: 2.4.2. Teen Bot . Press <F12> then <OK> to continue.")
{ console.log("Mooooorniiiing. This is your teeeeen bot...Can I heeeeelp?")
  let answer;
  let question;
  while (true){
    question = prompt("You can type here. (<?> for question, UPPERCASE to shout)")
    if (!question){
      answer = "t'es en PLS ?"
    } else if (question.match(/[?]/g)){
      answer = "Ouais ouais...";
    } else if (question === question.toUpperCase()){
      answer = "Pwaaaaa, calme-tooooooi..."
    } else if (question.toLowerCase().includes("fornite")){
      answer = "on s' fait une partie soum-soum ?"
    } else {
      answer = "BA-LE-QUE!"
    }
    console.log(answer);
  }
}
