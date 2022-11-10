import { Button, TextInput, Timeline } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import IndividualReview from '../IndividualReview/IndividualReview';

const Reviews = ({ oneService }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const { _id, title, price, img } = oneService

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewerEmail = user?.email || 'unregistered';
        const reviewerPhoto = user?.photoURL || 'No photo found';
        const reviewerMessage = form.reviewMessage.value;
        // console.log(reviewMessage);

        const reviews = {
            service: _id,
            serviceName: title, price, img,
            reviewer: reviewerEmail, reviewerPhoto, reviewerMessage
        }
        // console.log(reviews);
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    alert('Review Posted Succesfully');
                }
            })
            .catch(err => console.error(err))

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