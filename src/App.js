import React from 'react';
//import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import {Route} from 'react-router-dom';
import { Link }from 'react-router-dom';
import './App.css';
import Shelf from './Shelf';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
    currentlyReading : [],
    read : [],
    wantToRead : []
  };

  updateShelves = () => {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      let currentlyReading = [];
      let read = [];
      let wantToRead =[];
      books.map(book => {
        if(book.shelf === "currentlyReading") {
          currentlyReading.push(book);
          //console.log("cr is:", currentlyReading);
        } 
        else if(book.shelf === "read") {
          read.push(book);
          //console.log("r is:", read);
        }
        else {
          wantToRead.push(book);
          //console.log("wr is:", wantToRead);
        }
        this.setState({ currentlyReading: currentlyReading, read: read, wantToRead: wantToRead})
        //this.setState({ books: books })
      })
    })
  }

  componentDidMount() {
    this.updateShelves();
  }

  handleChange = (bookId, shelfName) => {
    //console.log(`bookId: ${bookId} shelfname: ${shelfName}`)
    BooksAPI.update({id: bookId}, shelfName).then((res) => {
      //console.log("response = ", res);
      this.updateShelves();
    })
  }


  render() {
    return (
      <div className="app">
        <Route exact path ='/' render = {() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf shelfName="Currently Reading" books={ this.state.currentlyReading } handleChange={this.handleChange}/>
                  <Shelf shelfName="Read" books={ this.state.read} handleChange={this.handleChange}/>
                  <Shelf shelfName="Want to read" books={ this.state.wantToRead} handleChange={this.handleChange}/>
                </div>
              </div>
              <div className="open-search">
                <Link to ='/SearchBook' className = 'add-book'>SearchBook</Link>
              </div>
          </div>
        )} />
      <Route path ='/searchBook' render = {( {history}) => (
          <SearchBook handleChange={this.handleChange}
                      currentlyReading={this.state.currentlyReading}
                      read={this.state.read}
                      wantToRead={this.state.wantToRead}
            
          />

        )} />
      </div>
    );
  }
}

export default BooksApp
