import { Table } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const myReviews = useLoaderData();
    // console.log(myReviews);

    return (
        <div className='min-h-screen w-[95%] mx-auto'>
            <h1 className="text-4xl font-bold text-center my-10">My Reviews</h1>
            <Table hoverable={true}>
                <Table.Head>
                    <Table.HeadCell className="!p-4">
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Service name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Review
                    </Table.HeadCell>
                    <Table.HeadCell>
                        User Email
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Price
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Modify
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                    {
                        myReviews.map(review => <ReviewRow key={review._id} review={review}></ReviewRow>)
                    }

                </Table.Body>
            </Table>
        </div>
    );
};

export default MyReviews;