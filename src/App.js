import './App.css';
import Install from './install';
import StartRating from './components/StarRating';


function App() {
  return (
    <div className="App">

        <Route path='/' element={
          <>
            <h1>PWA 테스트</h1>
            <Install />
            <StartRating itemId={1} />
            <StartRating itemId={2} />
            <StartRating itemId={3} />

    </div>

  );
}

export default App;