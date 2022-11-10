import { Button, Label, TextInput, Timeline } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import IndividualReview from '../IndividualReview/IndividualReview';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewMessage = form.reviewMessage.value;
        console.log(reviewMessage);
    }

    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-4xl font-bold text-center my-10'>See Reviews</h1>

            <Timeline>
                <IndividualReview></IndividualReview>
            </Timeline>

            {
                user && user.uid ?
                    <form onSubmit={handleAddReview}>
                        <TextInput
                            type="text"
                            name="reviewMessage"
                            sizing="lg"
                            placeholder="Write Reviews"
                        />
                        <div className='flex items-center justify-center my-5'>
                            <Button type="submit">
                                Add a Review
                            </Button>
                        </div>
                    </form>
                    :
                    <>
                        <p className='text-center text-xl font-semibold'>Please <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to='/login' state={{ from: location }} replace>Login</Link> to Add a Review.</p>
                    </>
            }
        </div>
    );
};

export default Reviews;