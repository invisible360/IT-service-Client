import { Table } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    const myReviews = useLoaderData();
    const { user } = useContext(AuthContext);
    const userEmails = myReviews.filter(userReviews => userReviews.reviewer === user.email)
    // console.log(userEmails.length);

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
                        userEmails.map(review => <ReviewRow key={review._id} review={review}></ReviewRow>)
                    }

                </Table.Body>
            </Table>
            {
                userEmails.length === 0 &&
                <>
                    <h1 className='text-center text-4xl font-bold my-20'>No Reviews were Added</h1>
                </>
            }
        </div>
    );
};

export default MyReviews;