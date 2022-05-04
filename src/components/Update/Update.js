import React from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Updating user: {id}</h2>
        </div>
    );
};

export default Update;