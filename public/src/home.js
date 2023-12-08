function getTotalBooksCount(books) {
  return books.length
}


function getTotalAccountsCount(accounts) {
  let count = 0;
  accounts.forEach((account) => {
    count += 1;
  });
  return count;
}


function getBooksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false) {
      // [0] is used to access the most recent item to determine if the book is currently borrowed 
      count += 1;
    }
  }
  return count;
}

// review this function 
function getMostCommonGenres(books) {
  const genreCounts = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
  }, {});

  const sortedGenres = Object.entries(genreCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return sortedGenres.slice(0, 5);
}

function getMostPopularBooks(books) {
  // Create an array with book titles and their borrow count
  const popularity = books.map(book => {
    return { name: book.title, count: book.borrows.length };
  });

  // Sort the array based on the count in descending order
  popularity.sort((a, b) => b.count - a.count);

  // Slice the first 5 elements to limit to five objects or fewer
  return popularity.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let authorCounts = {};

  // Count the total number of borrows for each author
  books.forEach(book => {
    const authorId = book.authorId;
    const borrowCount = book.borrows.length;
    if (authorCounts[authorId]) {
      authorCounts[authorId] += borrowCount;
    } else {
      authorCounts[authorId] = borrowCount;
    }
  });

  // Transform into an array of author objects with name and count
  let authorPopularity = Object.keys(authorCounts).map(authorId => {
    const author = authors.find(author => author.id === parseInt(authorId));
    return {
      // this writes a return statement for the correct object 
      name: `${author.name.first} ${author.name.last}`,
      count: authorCounts[authorId]
    };
  });

  // Sort authors by count and get the top 10
  authorPopularity.sort((a, b) => b.count - a.count);
  return authorPopularity.slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


