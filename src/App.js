import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './page/Shared/Header/Header';
import Home from './page/Home/Home';
import Footer from './page/Shared/Footer/Footer';
import Login from './page/Login/Login';
import Registration from './page/Registration/Registration';
import ItemsUpdate from './page/ItemsUpdate/ItemsUpdate';
import InventoryDetails from './page/InventoryDetails/InventoryDetails';
import RequireAuth from './page/Shared/RequireAuth/RequireAuth'
import ManageItems from './page/ManageItems/ManageItems';
import AddItem from './page/AddItem/AddItem';
import MyItem from './page/MyItems/MyItems';
import NotFound from './page/NotFound/NotFound';
import Blog from './page/Blog/Blog';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/login' element={<Login></Login>}>Log In</Route>
        <Route path='/registration' element={<Registration></Registration>}>Registation</Route>
        <Route path='/itemsupdate' element={<ItemsUpdate></ItemsUpdate>}>Items Update</Route>
        <Route path='/inventory/:inventoryId' element={<RequireAuth><InventoryDetails></InventoryDetails></RequireAuth>}>Inventory</Route>
        <Route path='/manageitems' element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}>Manage Items</Route>
        <Route path='/additem' element={<RequireAuth><AddItem></AddItem></RequireAuth>}>Add Item</Route>
        <Route path='/myitems' element={<RequireAuth><MyItem></MyItem></RequireAuth>}>My Item</Route>
        <Route path='/blog' element={<Blog></Blog>}>Blog</Route>
        <Route path='*' element={<NotFound></NotFound>}>Not Found</Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
