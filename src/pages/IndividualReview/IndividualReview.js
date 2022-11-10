import { Avatar, Timeline } from 'flowbite-react';
import React from 'react';

const IndividualReview = () => {
    return (
        <div>
            <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Title className='flex items-center'>
                        <Avatar
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded={true}
                        />
                        <span className='ml-4'>Reviewer er name</span>
                    </Timeline.Title>
                    <Timeline.Body>
                        Ekta Text thakbe
                    </Timeline.Body>

                </Timeline.Content>
            </Timeline.Item>
        </div>
    );
};

export default IndividualReview;