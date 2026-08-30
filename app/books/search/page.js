'use client';

import SearchPageComponent from '../../../lib/searchPageComponent';
import BooksDisplay from '../../../lib/booksDisplay';

const SearchBooks = () => {
  return (
    <main className='flex-1'>
      <SearchPageComponent
        endPoint='books'
        placeHolder='ابحث عن كتاب'
        DisplayComponent={BooksDisplay}
      />
    </main>
  );
};

export default SearchBooks;
