# MyReads Project

This is project is first project of Udacity's React Nanodegree course, which covers React Fundamentals. A static template with HTML/CSS was provided. However we suppossed to add interactivity to the app by refactoring the static code in this template.
The project is a virtual a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. 
I created SearchBook(to search and add books) and Shelf components (which essentially contains 3 different arrays - currently reading, read and want to read)


## To run the app

* clone this repo
* install all project dependencies with `npm install`
* start the development server with `npm start`

## App Functionality
As you run the app, the main page displays a list of "shelves" (currently reading, read and want to read). Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. When you click on the search button at the bottom right corner, you'll be taken to search page that allows you to find books to add to your library. The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. 


## Backend Server and BooksAPI

To simplify development process, a backend server and BooksAPI.js file was given. The file [`BooksAPI.js`](src/BooksAPI.js) contains the methods that are needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## App's search criteria
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


