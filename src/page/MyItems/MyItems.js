import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItem from './MyItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setInventorys(data))
    }, [user])
    const handleDelete = id => {
        const proceed = window.confirm('Delete This Item')
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Delete Item');
                    const remaining = inventorys.filter(inventory => inventory._id !== id);
                    setInventorys(remaining);
                })
        }
    }
    return (
        <div>
            <h1 className='text-4xl font-bold text-center m-16'>My Inventory Items : {inventorys.length}</h1>
            <Link className='bg-orange-400 block m-auto p-2 w-44 rounded-lg text-center font-bold mb-4' to='/additem'>Add Item</Link>
            <div className='flex justify-center'>
                <table className='border-2 border-black border-solid'>
                    <thead>
                        <tr>
                            <th className='border-2 border-black border-solid p-4'>Id</th>
                            <th className='border-2 border-black border-solid p-4'>Picture</th>
                            <th className='border-2 border-black border-solid p-4'>Name</th>
                            <th className='border-2 border-black border-solid p-4'>Description</th>
                            <th className='border-2 border-black border-solid p-4'>Supplier Name</th>
                            <th className='border-2 border-black border-solid p-4'>Quantity</th>
                            <th className='border-2 border-black border-solid p-4'>Balance</th>
                            <th className='border-2 border-black border-solid p-4'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventorys.map(item => <MyItem key={item._id} item={item} handleDelete={handleDelete}></MyItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItems;