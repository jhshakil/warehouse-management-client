import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const { itemId } = useParams()
    return (
        <div>
            <h1>This is a inventory page {itemId}</h1>
        </div>
    );
};

export default InventoryDetails;