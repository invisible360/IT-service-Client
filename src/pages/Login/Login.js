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
                console.log(user);
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
                console.log(user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })


    }





    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="password" name='password' placeholder='Password' required />
                <br />
                <input type="submit" value="Login" />
            </form>
            <p>New user? <Link to='/register'>Register</Link></p>

            <p>Or Sign In:</p>
            <button onClick={handleGoogleSignIn}>Google</button>
        </div>
    );
};

export default Login;