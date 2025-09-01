import './App.css';
import Install from './install';
import StartRating from './components/StarRating';
import { Routes, Route } from 'react-router-dom';

import Login from './login/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            <h1>PWA 테스트</h1>
            <Install />
            <StartRating itemId={1} />
            <StartRating itemId={2} />
            <StartRating itemId={3} />
          </>
        } />
      </Routes>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;