import './App.css';

import SelectionPage from './Pages/SelectionPage/SelectionPage';
import {Route, Routes, Navigate, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Regular Routes */}
        <Route path='/layout/:layout' element={<SelectionPage />} />
        <Route path='/add' element={
          <div className='addNew'>Add new page goes here...eventually. <br/><a href='/'>Go Home</a></div>
        } />
        <Route path='/login'></Route>

        {/* Redirects */}
        <Route path='/' element={<Navigate to='/layout/home' />} />
        <Route path='/layout/' element={<Navigate to='/layout/home' />} />
        
        <Route path='*' element={
          <div className='error'>Page not found <br/><a href='/'>Go Home</a></div>
        }/>
      </Routes>

    </div>
  );
}

export default App;
