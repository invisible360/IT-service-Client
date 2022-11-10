import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const navigate = useNavigate();

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.serviceName.value;
        const img = form.photo.value;
        const price = form.price.value;
        const description = form.description.value;

        const addService = {
            title, img, price, description
        }
        console.log(addService);


        fetch(`http://localhost:5000/allservices`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Service Added Succesfully');
                    navigate('/services')
                }
            })


    }

    return (
        <div className='min-h-screen w-1/2 mx-auto'>
            <h1 className='text-4xl text-center font-bold my-10'>Add Service Page</h1>

            <form onSubmit={handleAddService} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Service Name"
                        />
                    </div>
                    <TextInput
                        name="serviceName"
                        type="text"
                        sizing="lg"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        name="photo"
                        type="text"
                        sizing="lg"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Description"
                        />
                    </div>
                    <TextInput
                        name="description"
                        type="text"
                        sizing="lg"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            value="Price"
                        />
                    </div>
                    <TextInput
                        name="price"
                        type="number"
                        required={true}
                    />
                </div>

                <Button type="submit">
                    Add Service
                </Button>
            </form>
        </div>
    );
};

export default AddService;