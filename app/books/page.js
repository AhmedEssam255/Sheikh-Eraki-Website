import BooksDisplay from '../../lib/booksDisplay';
import PageComponent from '../../lib/pageComponent';

const Books = async () => {
  return <PageComponent title='كتب الشيخ' DisplayComponent={BooksDisplay} endPoint='books' search={{title: 'انقر للبحث عن كتب الشيخ', route: '/books/search'}} />
};

export default Books;
