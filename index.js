const express = require('express');

const app = express();

//to parse the request body
app.use(express.json());


//Books Api Routes: GET, POST, PUT, DELETE
let books = [
    {
        id: 1,
        name: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        id: 2,
        name: "The Alchemist",
    },
    {
        id: 3,
        name: "The Da Vinci Code",
    }

];


app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello change this to list of books!" });
     res.send(books)
})

app.post("/addBook", async(req,res)=>{
    try{
        const id=req.body.id;
        const name=req.body.name;
        const author=req.body.author;
         if(id && name){
             books.push({id,name,author});
             res.send("Book added succesfully");
    }
    else
         res.send("Something went wrong");
    }catch(e){console.log(e)}
})
app.get("/ping", (req, res) => {
    res.status(200).json({ message: "Pong" });
    res.send("Hii");
})



app.delete("/deleteBook/:id", async (req, res) => {
    try {
        const delBook = parseInt(req.params.id); // Parse the ID parameter from URL
        const bookIndex = books.findIndex(book => book.id === delBook);
        if (bookIndex === -1) {
            res.send.json("Book not found")
        }
        // Remove the book from the 'books' array
        books.splice(bookIndex, 1);
        res.send.json("Book deleted")
    } catch (e) {
        res.send("something went wrong")
    }
});
// Add other requests GET, POST, PUT, DELETE



app.listen(8000, () => {
    console.log(`App is live on: http://localhost:8000`);
});