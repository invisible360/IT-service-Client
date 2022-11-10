import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Login = () => {
    const { googleLogin, login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from.pathname || '/';

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
            })
            .then(error => {
                console.error(error);
            })

    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className=' min-h-screen w-1/2 mx-auto my-24'>

            <h1 className="text-4xl font-bold text-center my-5">Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                    Login
                </Button>
            </form>

            <div className='my-5 flex items-center justify-center flex-col'>
                <p>New user? Please <Link className='font-medium text-blue-600 dark:text-blue-500 hover:underline' to='/register'>Register</Link></p>

                <span>Or Sign In Using:</span>
                <Button className='my-5' onClick={handleGoogleSignIn}>Google</Button>
            </div>
        </div>
    );
};

export default Login;