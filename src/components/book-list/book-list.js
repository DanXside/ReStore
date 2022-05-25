import React, { Component } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './book-list.css';
import withBookstoreService from '../hoc';
import {booksLoaded} from '../../actions';

class BookList extends Component {

    componentDidMount() {
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        );
                    })
                }
            </ul>
        );
    }
};

const mapStateToProps = ({ books }) => {
    return { books };
};

const mapDispatchToProps = {
    booksLoaded
};

export default withBookstoreService()(
    connect(mapStateToProps, mapDispatchToProps)(BookList)
    );