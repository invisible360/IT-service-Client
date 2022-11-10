import { Button, Table } from 'flowbite-react';
import React from 'react';

const ReviewRow = ({ review, handleDeleteItem }) => {
    // console.log(review);
    const { serviceName, reviewerMessage, reviewer, price, _id } = review;

   

    return (

        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4">
                <Button
                    onClick={() => handleDeleteItem(_id)}
                    color="gray"
                    pill={true}
                >
                    X
                </Button>
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {serviceName}
            </Table.Cell>
            <Table.Cell>
                {reviewerMessage}
            </Table.Cell>
            <Table.Cell>
                {reviewer}
            </Table.Cell>
            <Table.Cell>
                {price}
            </Table.Cell>
            <Table.Cell>
                <Button
                    color="gray"
                    pill={true}
                >
                    Edit
                </Button>
            </Table.Cell>
        </Table.Row>

    );
};

export default ReviewRow;