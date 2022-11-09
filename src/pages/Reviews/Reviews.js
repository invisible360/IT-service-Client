import React from 'react';
import { Link } from 'react-router-dom';

const Reviews = () => {
    // reviews page contain= a text, name, image of the reviewer, 
    return (
        <div>
            <h1>All Reviews are Here</h1>
            <p>reviews page contain= a text, name, image of the reviewer,</p>

            <p>Please <Link to='/login'>Login</Link> to Add a Review</p>
            <form>
                <textarea></textarea>
                <input type="submit" value="Add a Review" />
            </form>
        </div>
    );
};

export default Reviews;