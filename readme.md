# PASC Backend SIG Task

## 1. Install or Setup Project

1. Clone the project
Open terminal create specific folder and Run Commands:

    ```
    git clone https://github.com/PICT-ACM-Student-Chapter/PASC-BackendSIGTask
    ```

2. Install Dependencies:

    ```
    npm install
    ```

3. RUn Project:

    ```
    npm run dev
    ```

## 2. Task

1. Get Request: */* or **/books**
    Create a  **GET Request** at route **/** which will send all books data. From available Book:

    e.g. Response should like:

2. Post Request: **/addBook**
    Create a  **POST Request** at route **/addBook** which will add new book to the list.

    e.g. Request Body: User will send this from postman/frontend

    ```
    {
        "id": 234,
        "name": "Book Name",
        "author": "Author Name",
    }
    ```

    e.g. Response should like:

    ```
    {
        "message": "Book Added Successfully",
    }
    ```

3. Put Request: **/updateBook/:id**
    Create a  **PUT Request** at route **/updateBook** which will update the book details. Book should be updated by id.

    e.g. Request Body: User will send this from postman/frontend

    ```
    {
        "id": 234,
        "name": "Book Name",
        "author": "Author Name",
    }
    ```

    e.g. Response should like:

    ```
    {
        "message": "Book Updated Successfully",
    }
    ```

4. Delete Request: **/deleteBook/:id**
    Create a  **DELETE Request** at route **/deleteBook** which will delete the book by id.

    e.g. Response should like:

    ```
    {
        "message": "Book Deleted Successfully",
    }
    ```

## 3. Submission

Submit your github repo to the google form.
<https://forms.gle/Y6KQwuy2XDZFgLEN6>
