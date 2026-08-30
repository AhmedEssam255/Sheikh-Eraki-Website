'use client';

import SearchPageComponent from '../../../lib/searchPageComponent';
import MessagesDisplay from '../../../lib/messagesDisplay';

const SearchBooks = () => {
  return (
    <main className='flex-1'>
      <SearchPageComponent endPoint='messages' placeHolder='ابحث عن رسالة' DisplayComponent={MessagesDisplay} />
    </main>
  );
};

export default SearchBooks;
