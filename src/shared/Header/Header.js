import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Link to='/'>Home</Link>
            {
                user && user.uid ?
                    <>
                        <Link><button onClick={handleLogout}>Log Out</button></Link>
                        <Link to='/myreviews'>My Reviews</Link>
                        <Link to='/addservice'>Add Service</Link>
                    </>
                    :
                    <Link to='/login'>Login</Link>
            }
        </div>
    );
};

export default Header;