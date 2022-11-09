import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import { Navbar } from 'flowbite-react';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            {/* <Link to='/'>Home</Link>
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
            <Link to='/blogs'>Blog</Link> */}

            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
                        <Link to='/'>IT-Solution</Link>
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    <Navbar.Link active={true}>
                        <Link to='/'>Home</Link>
                    </Navbar.Link>

                    {
                        (user && user.uid) &&
                        <>
                            <Navbar.Link >
                                <Link to='/myreviews'>My Reviews</Link>
                            </Navbar.Link>

                            <Navbar.Link >
                                <Link to='/addservice'>Add Service</Link>
                            </Navbar.Link>
                        </>

                    }

                    <Navbar.Link >
                        <Link to='/blogs'>Blog</Link>
                    </Navbar.Link>

                    {
                        user && user.uid ?
                            <Navbar.Link >
                                <button onClick={handleLogout}>Log Out</button>
                            </Navbar.Link>
                            :
                            <Navbar.Link >
                                <Link to='/login'>Login</Link>
                            </Navbar.Link>

                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;