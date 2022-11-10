import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register')
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Registration Done')
                navigate('/')
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='min-h-screen w-1/2 mx-auto my-24'>

            <h1 className="text-4xl font-bold text-center my-5">Register</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        name="email"
                        type="email"
                        placeholder="name@email.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        name="password"
                        type="password"
                        required={true}
                    />
                </div>

                <Button type="submit">
                    Register
                </Button>
            </form>

            <div className='my-5 flex items-center justify-center flex-col'>
                <p>Already have an Account? <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to='/login'>Login</Link></p>
            </div>

        </div>
    );
};

export default Register;