'use client';

import SearchPageComponent from '../../../lib/searchPageComponent';
import DisplayVideos from '../../../lib/displayVideos';

const SearchVideos = () => {
  return (
    <main className='flex-1'>
      <SearchPageComponent endPoint='videos/search' placeHolder='ابحث عن فيديو' DisplayComponent={DisplayVideos} />
    </main>
  );
};

export default SearchVideos;
