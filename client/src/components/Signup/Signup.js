import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Auth from '../Login/useAuth';

const Signup = () => {
    const auth = Auth();

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    

    const handleSignUp = () => {
        
        auth.signUpWithPassword(email, password)
            .then(res => {
                console.log(email, password)
                window.location.pathname = '/';
            })
            .catch(err=>{
                console.log(email, password)
            })
       
    }

    const handleSignInWithGoogle = () => {
        auth.signInWithGoogle()
            .then(res => {
                window.location.pathname = '/';
            })
    }

    const handleChange = e => {
        e.preventDefault();
        if(e.target.name === "email") setEmail(e.target.value)
        else setPassword(e.target.value);
    }

    return (
        <div>
            <h3>Sign up</h3>
            <hr/>
            <br/><br/>
            <Button onClick={handleSignInWithGoogle}> Sign-in with Google </Button> <br/><br/><br/>
            <h4>Or</h4> <br/><br/>
            <Container>

            <Form>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" required name="email" placeholder="Email" onChange={handleChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" required name="password" placeholder="Password"  onChange={handleChange}  />
                    </Col>
                </Form.Group>
                

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={handleSignUp}>Sign up</Button>
                        </Col>
                    </Form.Group>
            </Form>
            </Container>
        </div>
    );
};

export default Signup;