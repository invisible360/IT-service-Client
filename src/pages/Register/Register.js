import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="email" name='email' placeholder='email' />
                <br />
                <input type="password" name='password' placeholder='password' />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an Account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;