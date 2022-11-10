import { Table } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReviews = () => {
    useTitle('My Reviews')
    const myReviews = useLoaderData();
    const { user } = useContext(AuthContext);
    const userEmails = myReviews.filter(userReviews => userReviews.reviewer === user.email)
    // console.log(userEmails.length);

    const [userRevs, setUserRevs] = useState(userEmails);

    //delete from DB
    const handleDeleteItem = id => {
        const proceed = window.confirm(`Are You Sure want to Delete?`);
        if (proceed) {
            fetch(`https://it-service-server-invisible360.vercel.app/reviews/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success ('Review Deleted Successfully')
                        const remainingReviews = userRevs.filter(rev => rev._id !== id)
                        setUserRevs(remainingReviews)
                    }
                })
        }
    }

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
                        userRevs.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                            handleDeleteItem={handleDeleteItem}
                        ></ReviewRow>)
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