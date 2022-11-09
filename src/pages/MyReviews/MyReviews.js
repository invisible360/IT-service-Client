import React from 'react';

const MyReviews = () => {
    return (
        <div>
            <h1>My Reviews</h1>
            <p>show only the reviews that the current user added either in a table or in cards with relevant information like - service name, review etc. There will be two buttons/icons - edit review(details in the bonus part) and delete review with each review. On clicking the delete button/icon, you have to delete the review, and it won't show up on that service page anymore. When the delete is successful, a toast/modal with a message will pop up to inform the user. If the user doesn't add any review, the page will show 'No reviews were added' at the middle of the page</p>
        </div>
    );
};

export default MyReviews;