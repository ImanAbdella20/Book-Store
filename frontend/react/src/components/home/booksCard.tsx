import BooksSingleCard from './booksSingleCard';

interface Book {
    _id: string;
    title: string;
    author: string;
    publishYear: number;
    coverImage: string;
    price: number;
    rating: number;
    inStock: boolean;
}

interface BooksCardProps {
  books: Book[];
}

const BooksCard: React.FC<BooksCardProps> = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
       <BooksSingleCard key={item._id} book={item} books={[]} />
      ))}
    </div>
  );
};

export default BooksCard;
