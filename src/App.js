import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './page/Shared/Header/Header';
import Home from './page/Home/Home';
import Footer from './page/Shared/Footer/Footer';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
