import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { inventoryId } = useParams()
    const quantityRef = useRef('');
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventory])

    const handleQuantity = event => {
        event.preventDefault();
        const quantity = quantityRef.current.value;
        const add = { quantity };

        // fetch('http://localhost:5000/user', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         alert('Data is send')
        //         event.target.reset()
        //     })
        const url = `http://localhost:5000/inventory/${inventoryId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Quantity add');
                event.target.reset()
            })
    }
    return (
        <div>
            <div className='w-1/4 block m-auto p-4 mt-8 border border-solid border-black rounded-lg'>
                <div>
                    <img className='w-full rounded-lg' src={inventory.picture} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-center mt-4 mb-4'>{inventory.name}</h2>
                    <p>{inventory.description}</p>
                    <h3 className='text-lg font-bold'>Supplier: {inventory.supplier_name}</h3>
                    <div className='grid grid-cols-2 gap-6'>
                        <p>Balance: {inventory.balance}</p>
                        <p>Quantity: {inventory.quantity}</p>
                    </div>
                    {/* <Link className='bg-orange-300 p-2 w-full m-auto mt-8 rounded-lg font-bold' to='/itemsupdate'>Update</Link> */}
                    <button className='bg-orange-300 p-2 w-1/2 block m-auto mt-8 rounded-lg font-bold'>Delevered</button>
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-bold mt-8 text-center'>Restock The Item</h2>
                <form onSubmit={handleQuantity}>
                    <input ref={quantityRef} className='block m-auto bg-gray-300 w-1/4 mt-4 p-2' type="number" placeholder='Enter Your Quantity' />
                    <input className='block m-auto bg-orange-300 font-bold w-1/4 mt-4 p-2' type="submit" value="Add Quantity" />
                </form>
            </div>
            <div>
                <h2 className='text-3xl font-bold mt-8 text-center'>Restock The Item</h2>
                <Link className='block m-auto text-center bg-orange-300 font-bold w-1/4 mt-4 p-2' to='/manageitems'>Manage Items</Link>
            </div>
        </div>
    );
};

export default InventoryDetails;