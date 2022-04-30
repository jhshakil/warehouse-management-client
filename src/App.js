import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './page/Header/Header';
import Home from './page/Home/Home';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
      </Routes>
    </div>
  );
}

export default App;
