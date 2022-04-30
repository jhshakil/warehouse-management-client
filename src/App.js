import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './page/Shared/Header/Header';
import Home from './page/Home/Home';
import Footer from './page/Shared/Footer/Footer';
import Login from './page/Login/Login';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/login' element={<Login></Login>}>Log In</Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
