import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            login(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError('Failed to sign in')
        }

    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100' type='submit'>Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
}