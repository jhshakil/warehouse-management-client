import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItem from './MyItem';
import MyItemMobile from './MyItemMobile';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const [inventorys, setInventorys] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `https://warehouse-management-server-ruby.vercel.app/myitems?email=${email}`
        // try {
        //     fetch(url, {
        //         method: 'GET',
        //         headers: {
        //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //         }
        //     })
        //         .then(res => res.json())
        //         .then(data => setInventorys(data))
        // }
        // catch (error) {
        //     console.log(error.massage)
        //     if (error.response.status === 401 || error.response.status === 403) {
        //         signOut(auth);
        //         navigate('/login')
        //     }
        // }
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
            const url = `https://warehouse-management-server-ruby.vercel.app/inventory/${id}`;
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
            <h1 className='text-4xl font-bold text-center m-16'>My Items : {inventorys.length}</h1>
            <Link className='bg-orange-400 block m-auto p-2 w-44 rounded-lg text-center font-bold mb-4' to='/additem'>Add Item</Link>
            <div className='md:flex justify-center hidden'>
                <table className='border-2 border-black border-solid m-4'>
                    <thead>
                        <tr>
                            <th className='border-2 border-black border-solid p-4'>Id</th>
                            <th className='border-2 border-black border-solid p-4'>Picture</th>
                            <th className='border-2 border-black border-solid p-4'>Name</th>
                            <th className='border-2 border-black border-solid p-4'>Description</th>
                            <th className='border-2 border-black border-solid p-4'>Supplier Name</th>
                            <th className='border-2 border-black border-solid p-4'>Quantity</th>
                            <th className='border-2 border-black border-solid p-4'>Balance</th>
                            <th className='border-2 border-black border-solid p-4'>Stock</th>
                            <th className='border-2 border-black border-solid p-4'>Delete</th>
                            <th className='border-2 border-black border-solid p-4'>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventorys?.map(item => <MyItem key={item._id} item={item} handleDelete={handleDelete}></MyItem>)
                        }
                    </tbody>
                </table>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                    inventorys?.map(item => <MyItemMobile key={item._id} item={item} handleDelete={handleDelete}></MyItemMobile>)
                }
            </div>
        </div>
    );
};

export default MyItems;