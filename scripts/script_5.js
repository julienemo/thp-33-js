prompt("This is script 5: 2.3.2. Librarian. Press <F12> then <OK> to continue.")
{
  // basical settings
  const books = [
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: `Pourquoi j'ai mangé mon père`, id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Les frères Karamazov', id: 450911, rented: 5 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  let listLength = books.length;
  let unrent=[];
  for(let n in books){
    let book = books[n];
    if (book['rented'] === 0) {
      unrent.push(book);
    }
  }
  console.log("Question 1: Are all the books rented at least once?");
  if (unrent.length === 0) {
    console.log(`---Yes, all ${listLength} books are rented once`);
  } else {
    console.log(`---No, ${unrent.length} book(s) have/has never been rented.`);
  }

  console.log("");
  console.log("Questions 2 and 3:What are the most and least rented books?");
  let sortedArray = books.sort((a,b) => (a.rented> b.rented) ? 1 : ((b.rented > a.rented) ? -1 : 0));
  let most = sortedArray[listLength-1];
  let least = sortedArray[0];
  console.log(`---The most rented book is N.${most.id}:${most.title} (rented ${most.rented} times)`);
  console.log(`---The least rented book is N.${least.id}:${least.title}(rented ${least.rented} times)`);

  console.log("");
  console.log("Questions 4:What is the book 873495?");
  let bookById = books.find(function(book){
    return book.id == "873495";
  });

  console.log(`---The book 873495 is ${bookById.title}`);

  console.log("");
  console.log("Questions 5: Remove book 133712");
  bookById = books.find(function(book){
    return book.id == "133712";
  });
  console.log(`---The book 133712 is ${bookById.title}`);
  books.splice(books.indexOf(bookById),1);
  console.log("---It just got removed from the books list. Here is the current list")
  console.log(books);
  console.log(`---See? No more ${bookById.title}`)

  console.log("");
  console.log("Questions 6: Sort books by title alphabetic order");
  sortedArray = books.sort((a,b) => (a.title> b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
  console.log("---Here is the sorted list:");
  console.log(sortedArray);


}
