import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    return (
        <div>
            <h1>All Reviews are Here</h1>
            <p>reviews page contain= a text, name, image of the reviewer,</p>

            {
                user && user.uid ?
                    <form>
                        <textarea></textarea>
                        <input type="submit" value="Add a Review" />
                    </form>
                    :
                    <>
                    <p>Please <Link to='/login' state={{ from: location }} replace>Login</Link> to Add a Review</p>
                    </>
            }
        </div>
    );
};

export default Reviews;