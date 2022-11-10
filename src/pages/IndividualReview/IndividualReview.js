import { Avatar, Timeline } from 'flowbite-react';
import React from 'react';

const IndividualReview = ({ review }) => {
    // console.log(review);
    const { reviewer, reviewerPhoto, reviewerMessage } = review;
    return (
        <div>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Title className='flex items-center'>
                        <Avatar
                            img={reviewerPhoto}
                            rounded={true}
                        />
                        <span className='ml-4'>{reviewer}</span>
                    </Timeline.Title>
                    <Timeline.Body>
                        {reviewerMessage}
                    </Timeline.Body>

                </Timeline.Content>
            </Timeline.Item>
        </div>
    );
};

export default IndividualReview;