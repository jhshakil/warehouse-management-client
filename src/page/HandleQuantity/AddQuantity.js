import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

const AddQuantity = () => {
    const { inventoryId } = useParams()
    const quantityRef = useRef('');
    const handleQuantity = event => {
        event.preventDefault();
        let quantity = quantityRef.current.value;
        if (!quantity) {
            return alert('Please enter a valid quantity')
        }
        const add = { quantity };
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
                console.log(data);
                alert('Quantity add');
                event.target.reset()
            })
    }
    return (
        <div>
            <h2 className='text-3xl font-bold mt-8 text-center'>Restock The Item</h2>
            <form onSubmit={handleQuantity}>
                <input ref={quantityRef} className='block m-auto bg-gray-300 w-3/4 mt-4 p-2' type="number" placeholder='Enter Your Quantity' />
                <input className='block m-auto bg-orange-300 rounded-lg font-bold w-1/2 mt-4 p-2' type="submit" value="Add Quantity" />
            </form>
        </div>
    );
};

export default AddQuantity;