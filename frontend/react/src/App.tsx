import React from 'react'
import { Route, Routes } from 'react-router';
import CreateBooks from './pages/createBooks';
import ShowBooks from './pages/showBooks';
import DeleteBook from './pages/deleteBook';
import EditBook from './pages/editBook';
import Home from './pages/home';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element={<CreateBooks/>}/>
    <Route path='/books/details/:id' element={<ShowBooks/>}/>
    <Route path='/books/edit/:id' element={<EditBook/>}/>
    <Route path='/books/delete/:id' element={<DeleteBook/>}/>
   </Routes>
  )
}

export default App