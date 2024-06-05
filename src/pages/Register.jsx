import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = name ? "" : "Name is required.";
        tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? "" : "Email is not valid.";
        tempErrors.password = /^(?=.*[A-Z]).{8,}$/.test(password) ? "" : "Password must be at least 8 characters long and contain at least one uppercase letter.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).every(x => !tempErrors[x]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Handle form submission
            console.log({ name, email, password });
        }
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <TextField
                                    label="Full Name"
                                    variant="outlined"
                                    fullWidth
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    {...(errors.name && { error: true, helperText: errors.name })}
                                />
                            </div>
                            <div className="form my-3">
                                <TextField
                                    label="Email address"
                                    variant="outlined"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    {...(errors.email && { error: true, helperText: errors.email })}
                                />
                            </div>
                            <div className="form my-3">
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    {...(errors.password && { error: true, helperText: errors.password })}
                                />
                            </div>
                            <div className="my-3">
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link></p>
                            </div>
                            <div className="text-center">
                                <Button type="submit" variant="contained" color="primary">Register</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
