import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import '../../Sass/Partials/_LogIn.scss';

const LogIn = () => {
    return (
        <>
            <Container >
                <Row>
                    <h1 className=' mt-5 text-center'>Sign In</h1>

                    <Form className='logIn-form'>
                        <Form.Group className=" mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                   
                        <Button className='submit-btn' variant="info" type="submit"> SUBMIT </Button>
                    </Form>
                </Row>
            </Container>
            
        </>
    );
};

export default LogIn;