const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];
//Create a function called getAvailableBooks that returns an array of a
//ll available
//books.
function getAvailableBooks(){
let available=books.filter(book=>{
    return book.isAvailable===true
})
let titles=available.map(each=>{
 return each.title
})
return titles

      
    
    
       
}
console.log(getAvailableBooks())
//2. Create a function getBooksByAuthor that takes an author's
// name as an argument and
//returns an array of all books by that author.
function getBooksByAuthor(author){
    let authors=books.filter(book=>{
        return book.author
    })
    if(authors.includes(author)){
        authors.title
    }
    return authors
    
     

}
console.log(getBooksByAuthor("Homer"))
//Create a function addNewBook that takes a book object as an argument //
//and adds it to the library, ensuring that the new book has all required properties (title, author,
   // publicationYear, and isAvailable).
   function addNewBook(){
    const bookobject=new Object(books)
    bookobject.title="river and the source"
    bookobject.author="margaret"
    bookobject.publicationYear=2002
    bookobject.isAvailable=true
    console.log(bookobject)
   }
   
addNewBook()
//Create a function checkoutBook that takes a book title as an argument and changes
//the book's isAvailable property to false. If the book is not found in th
//e library, the
//function should return a message indicating that the book is not available.
function checkoutBook(title){
    
    for(let i=0;i <books.length;i++){
        if(books[i].title){
            console.log(books[i].isAvailable===false)
        }
        else{
            console.log("book not available")
        }

    }


}
checkoutBook("Great Expectations")