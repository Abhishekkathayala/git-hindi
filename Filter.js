

const scorecard = [34,32,45,2,5,65,67];

// let res = scorecard.filter((item) => {
//     return item>10;
// })

// console.log(res);

// const newScoreCard = []

//  scorecard.forEach((score) =>{
//     if(score>10){
//         newScoreCard.push(score)

//     }
    
// })
// console.log(newScoreCard)




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //let userBooks = books.filter( (book) =>{return book.publish>=2000});
  
  userBooks = books.filter( (book) =>{return book.genre == "Fiction" && book.publish<1987});
  console.log(userBooks)