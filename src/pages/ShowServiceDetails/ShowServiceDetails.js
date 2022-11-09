import React from 'react';

const ShowServiceDetails = ({ oneService }) => {
    return (
        <div>
            <h1>Showing Details</h1>
            <p>{oneService.title}</p>
        </div>
    );
};

export default ShowServiceDetails;