import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams()
    const [modifiedCount, setModifiedCount] = useState('')
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://warehouse-management-server-ruby.vercel.app/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [modifiedCount])
    // add quantity 
    const quantityRef = useRef('');
    const handleQuantity = event => {
        event.preventDefault();
        let stock = 'In Stock'
        let oldQuantity = inventory.quantity;
        let newQuantity = quantityRef.current.value;
        let quantity = parseInt(oldQuantity) + parseInt(newQuantity)
        if (!quantity) {
            return alert('Please enter a valid quantity')
        }
        let newCount = ''
        setModifiedCount(newCount)
        const add = { quantity, stock };
        const url = `https://warehouse-management-server-ruby.vercel.app/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                setModifiedCount(data.modifiedCount)
                alert('Quantity add');
                event.target.reset()
            })
    }
    const deleverItem = () => {
        let oldQuantity = inventory.quantity;
        let stock = 'In Stock'
        // let newQuantity = quantityRef.current.value;
        let quantity = parseInt(oldQuantity) - 1
        if (quantity === 0) {
            stock = 'Sold'
        }
        if (quantity < 0) {
            quantity = 0;
            return alert('No item available');

        }
        let newCount = ''
        setModifiedCount(newCount)
        const add = { quantity, stock };
        const url = `https://warehouse-management-server-ruby.vercel.app/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                setModifiedCount(data.modifiedCount)
                alert('Item Deleverd');
            })
    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 m-4'>
            <div className='w-full p-4 mt-8 border border-solid border-black rounded-lg'>
                <div>
                    <img className='w-full rounded-lg' src={inventory.picture} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-center mt-4 mb-4'>{inventory.name}</h2>
                    <p>{inventory.description}</p>
                    <h3 className='text-lg font-bold'>Supplier: {inventory.supplier_name}</h3>
                    <div className='grid grid-cols-3 gap-6'>
                        <p>Balance: {inventory.balance}$</p>
                        <p>Quantity: {inventory.quantity}</p>
                        <p>Stock: {inventory.stock}</p>
                    </div>
                    <button onClick={deleverItem} className='bg-orange-300 p-2 w-1/2 block m-auto mt-8 rounded-lg font-bold'>Delivered</button>
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-bold mt-8 text-center'>Restock The Item</h2>
                <form onSubmit={handleQuantity}>
                    <input ref={quantityRef} className='block m-auto bg-gray-300 w-3/4 mt-4 p-2' type="number" placeholder='Enter Your Quantity' />
                    <input className='block m-auto bg-orange-300 rounded-lg font-bold w-1/2 mt-4 p-2' type="submit" value="Add Quantity" />
                </form>
            </div>
            <div>
                <h2 className='text-3xl font-bold mt-8 text-center'>Manage Items</h2>
                <Link className='block m-auto text-center bg-orange-300 rounded-lg font-bold w-1/2 mt-4 p-2' to='/manageitems'>Click Here</Link>
            </div>
        </div>
    );
};

export default InventoryDetails;