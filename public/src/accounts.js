function findAccountById(accounts, id) {
  // returns object with matching id
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last.toLowerCase() < b.name.last.toLowerCase() ?  -1 : 1)
  // needs to return list of accounts ordered by last name
  // how else do i reference the last name in the object 
}

  // returns number of times the id has been in any books 'borrows' array
  // if account id === borrow array
  // count ++ and return #
  // number is being return 
  // returning how many times the person has borrowed the book
  // by matching the account id with the id under borrowed
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((a, b) => {
    if (b.borrows.some(i => i.id === account.id)) {
      // if borrows has id and the account has the id 
      a++
      // increment a
    }
    return a
    // why is this not counting 
    
  }, 0)
}

// returns array of book objects including author info (author name)
// returns books that are already checked out (if returned = false)
function getBooksPossessedByAccount(account, books, authors) {
  return books.reduce((a, b) => {
    if (b.borrows.some(i => account.id === i.id && i.returned === false)) {
        const author = authors.find(p => p.id === b.authorId)
        
        if (author) b.author = author 
    
        a.push(b)
        }
    return a
  }, [])
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
