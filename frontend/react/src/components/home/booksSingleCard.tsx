import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

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

interface BooksTableProps {
    books: Book[];
    book: Book;
}

const BooksSingleCard: React.FC<BooksTableProps> = ({ book }) => {
  return (
    <div
        key={book._id}
        className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
    >
      <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
        {book.publishYear}
      </h2>
      <img src={`/${book.coverImage}`} alt={`${book.title} cover`} className='w-32 h-48 object-cover mx-auto my-2' />
      <h4 className='my-2 text-gray-500'>{book._id}</h4>
      <div className='flex justify-start items-center gap-x-2'>
        <PiBookOpenTextLight className='text-red-300 text-2xl'/>
        <h2 className='my-1'>{book.title}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <BiUserCircle className='text-red-300 text-2xl'/>
        <h2 className='my-1'>{book.author}</h2>
      </div>
      <p className='my-2'><strong>Price:</strong> ${book.price}</p>
      <p className='my-2'><strong>Rating:</strong> {book.rating} / 5</p>
      <p className='my-2'><strong>Status:</strong> {book.inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
        Add to Cart
      </button>
      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'/>
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black'/>
        </Link>
      </div>
    </div>
  )
}

export default BooksSingleCard;
