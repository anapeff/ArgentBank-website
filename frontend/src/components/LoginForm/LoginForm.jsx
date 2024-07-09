import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password,
        };

        console.log('data:', userData);

        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const responseData = await response.json();
                const token = responseData.body.token;

                localStorage.setItem('token', token);

                navigate('/user');
                dispatch(userLogin({ user: responseData.body.user, token }));
            } else if (response.status === 400) {
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                setErrorMessage('Invalid username or password');
            }
        } catch (error) {
            console.error('Erreur :', error);
        }
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="username"
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
            </form>
        </section>
    );
};

export default LoginForm;
