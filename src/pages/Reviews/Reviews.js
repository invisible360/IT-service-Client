import { Button, TextInput, Timeline } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import IndividualReview from '../IndividualReview/IndividualReview';

const Reviews = ({ oneService }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { _id, title, price, img } = oneService;

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const reviewsByID = data.filter(filIds => filIds.service === _id);
                const filterIDS = reviewsByID.map(id => id.service)
                console.log(filterIDS);
                fetch('http://localhost:5000/reviewsByServiceID', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(filterIDS)
                })
                    .then(res => res.json())
                    .then(data => {
                        setReviews(data);
                    })
            })
    }, [_id])

    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewerEmail = user?.email || 'unregistered';
        const reviewerPhoto = user?.photoURL;
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
                    navigate (0)
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='w-[80%] mx-auto'>
            <h1 className='text-4xl font-bold text-center my-10'>See Reviews</h1>

            <Timeline>
                {
                    reviews.map(review => <IndividualReview
                        key={review._id}
                        review={review}
                    ></IndividualReview>)
                }

            </Timeline>

            {
                user && user.uid ?
                    <form onSubmit={handleAddReview}>
                        <TextInput
                            type="text"
                            name="reviewMessage"
                            sizing="lg"
                            defaultValue={title}
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