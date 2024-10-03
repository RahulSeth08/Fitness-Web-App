import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') || null);
    const [userData, setUserData] = useState(null); // State to hold user data
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const backend_url = import.meta.env.VITE_API_URL;

    useEffect(() => {
        // Clear user data if not authenticated
        if (!authToken) {
            setUserData(null);
        }
    }, [authToken]);

    const login = async (username, password) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${backend_url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const authResponse = await response.json();
                const token = authResponse.token; // Capture the token from the response

                // Set token in context and local storage
                setAuthToken(token);
                localStorage.setItem('authToken', token);

                // Set user data from response
                setUserData(authResponse.user); // Assume the user data is returned with the token
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Sign in failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred during sign in. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const register = async (fullName, username, email, password) => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${backend_url}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, username, email, password }), // Pass all required fields
            });

            if (response.ok) {
                const authResponse = await response.json();
                const token = authResponse.token; // Capture the token from the response

                // Set token in context and local storage
                setAuthToken(token);
                localStorage.setItem('authToken', token);

                // Set user data from response if returned
                setUserData(authResponse.user); // Assume the user data is returned with the token
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Registration failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred during registration. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('authToken');
        setUserData(null); // Clear user data on logout
    };

    return (
        <AuthContext.Provider value={{ authToken, login, register, logout, loading, error, userData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
