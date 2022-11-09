import React from 'react';
import { getAuth } from 'firebase/auth'
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const authinfo = {

    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;