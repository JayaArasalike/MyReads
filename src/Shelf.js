import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link }from 'react-router-dom'
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import './App.css'

class Shelf extends Component {

	state = {
		query: '',
		currentShelf: "currentlyReading"
	}

	
	changeHandler = (shelfName, bookId) => {
    console.log(`bookId: ${bookId} shelfname: ${shelfName}`)
		this.props.handleChange(bookId, shelfName);
	}
	
	render() {

		return(
			<div>
			    <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    { this.props.books.map((book) => (
                    	<li key={book.id} >
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select value ={book.shelf} onChange = {(event) => this.changeHandler(event.target.value, book.id)} >
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
      </div>

		)
	}

}
export default Shelf;


                