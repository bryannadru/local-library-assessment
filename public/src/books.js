function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

// return book object that matches the id passed in
function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

  // return array with books that have been checked out
  // then return array inside of it with books that have been returned
function partitionBooksByBorrowedStatus(books) {
  let checkedOut = [];
  let returnedBooks = [];

  books.forEach((book) => {
    // Assuming the most recent borrow record indicates the current status
    if (book.borrows[0].returned === false) {
      checkedOut.push(book);
    } else {
      returnedBooks.push(book);
    }
  });
  return [checkedOut, returnedBooks];
}



// returns array of  > 10 items that represents accounts identified by IDs
// from the books borrows array
// match the id from the borrows array to the id of the account 
function getBorrowersForBook(book, accounts) {
  // First, create the full list of borrower information
  const borrowers = book.borrows.map(borrow => {
    // Find the account that matches the borrow's id
    const accountInfo = accounts.find(account => account.id === borrow.id);
    // Combine the borrow object with the account info
    return { ...borrow, ...accountInfo };
  });

  // Then, return only the first 10 borrowers
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

