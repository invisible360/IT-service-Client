import { Button, TextInput } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {
    const review = useLoaderData()
    // console.log(review._id);
    const navigate = useNavigate();

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const updatedRev = event.target.update.value;
        // console.log(updatedRev);

        fetch(`https://it-service-server-invisible360.vercel.app/review/${review._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ updatedRev })

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Review is Updated!');
                    navigate ('/myreviews')

                }
            })

    }
    return (
        <div className='min-h-screen w-[90%] mx-auto'>
            <h1 className='text-4xl text-center font-bold my-10'>Update Your Review</h1>

            <form onSubmit={handleUpdateReview}>
                <TextInput
                    type="text"
                    name="update"
                    sizing="lg"
                    placeholder={`Previous: ${review.reviewerMessage}`}
                />
                <div className='flex items-center justify-center my-5'>
                    <Button type="submit">
                        Update
                    </Button>
                </div>
            </form>

        </div>
    );
};

export default Update;