import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp';
import serializeform from 'form-serialize'

class SearchBook extends Component {

	state = {
		
		showingBooks: []
	}

   	bookSearch = (query) => {
   		const maxResults = 10;
   		BooksAPI.search(query, maxResults).then((res) => {
      		console.log(" search query response = ", res);
      		this.setState({ showingBooks : res })
    	})
   	}

   	changeHandler = (shelfName, bookId) => {
        console.log(`bookId: ${bookId} shelfname: ${shelfName}`)
		this.props.handleChange(bookId, shelfName);
	}
    render() {
    	let shelfName = "none"
        return(
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" >Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"  onChange={(event) => this.bookSearch(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
              	<ol className="books-grid">
              	{ this.state.showingBooks.map( (book) => (
                    <li key={book.id} >
                        <div className="book">
                          	<div className="book-top">
	                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
	                            <div className="book-shelf-changer">
				              		{(() => {
				              			if (this.props.currentlyReading.some(cr => cr.id === book.id)) {
				              				shelfName = "currentlyReading"
				              			} else if (this.props.read.some(r => r.id === book.id)) {
				              				shelfName = "read"
				              			} else if (this.props.wantToRead.some(wr => wr.id === book.id)) {
				              				shelfName = "wantToRead"
				              			} else {
				              				shelfName = "none"
				              			}
				              		})()}	                            
	                              <select value ={shelfName} onChange = {(event) => this.changeHandler(event.target.value, book.id)} >
	                                <option value="none" disabled>Move to...</option>
	                                <option value="currentlyReading" >Currently Reading</option>
	                                <option value="wantToRead" >Want to Read</option>
	                                <option value="read" >Read</option>
	                                <option value="none">None</option>
	                              </select>
	                            </div>
                          	</div>
                          	<div className="book-title">{book.title}</div>
                          	<div className="book-authors">{book.authors}</div>
                        </div>
                     </li>
                ))}
              	</ol>
            </div>
          </div>
        )
	}
}
export default SearchBook;