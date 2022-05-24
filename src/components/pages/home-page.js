import React from 'react';

import BookList from '../book-list';

const HomePage = () => {
    const books = [
        {id: 1,
        title: 'Glutch',
        author: 'Hikle'},
        {id: 2,
        title: 'Jatil',
        author: 'Bats'}
    ];
    return (
        <BookList books={books} />
    );
};

export default HomePage;