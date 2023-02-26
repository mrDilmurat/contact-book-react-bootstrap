import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactBook from './components/ContactBook'
import ContactCreate from './components/ContactCreate'
import ContactDetail from './components/ContactDetail'
import ContactEdit from './components/ContactEdit'

function App () {
  return (
    <div>
      <h1>React JS CRUD Operations</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ContactBook />}></Route>
          <Route path='/contact/create' element={<ContactCreate />}></Route>

          <Route path='/contact/details/:conid' element={<ContactDetail />}></Route>
          <Route path='/contact/edit/:conid' element={<ContactEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
