import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/inventory'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Item add');
            })
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='block border-2 border-solid border-black mt-4 rounded p-2 bg-gray-200 w-72 m-auto' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
            <textarea className='block border-2 border-solid border-black mt-4 rounded p-2 bg-gray-200 w-72 m-auto' placeholder='Description' {...register("description", { required: true })} />
            <input className='block border-2 border-solid border-black mt-4 rounded p-2 bg-gray-200 w-72 m-auto' placeholder='Supplier Name' {...register("supplier_name", { required: true, maxLength: 20 })} />
            <input className='block border-2 border-solid border-black mt-4 rounded p-2 bg-gray-200 w-72 m-auto' placeholder='Balance' type="number" {...register("balance", { required: true })} />
            <input className='block border-2 border-solid border-black mt-4 rounded p-2 bg-gray-200 w-72 m-auto' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
            <input className='block border-2 border-solid border-black mt-4 rounded p-2 bg-gray-200 w-72 m-auto' placeholder='Photo Url' type="text" {...register("picture", { required: true })} />
            <input className='block border-2 border-solid border-black mt-4 rounded p-2 bg-gray-200 w-72 m-auto' type="submit" value='Add Item' />
        </form>
    );
};

export default AddItem;