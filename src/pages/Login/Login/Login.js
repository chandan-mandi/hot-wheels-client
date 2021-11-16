import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../components/hooks/useAuth';
import MenuBar from '../../shared/MenuBar/MenuBar';


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { loginUsingPassword, signInUsingGoogle, isLoading, user } = useAuth();

    const location = useLocation();
    const history = useHistory();
    // const redirect_uri = location.state?.from || 'home';

    const onSubmit = data => {
        
        loginUsingPassword(data.email, data.password, location, history)
        if (isLoading) {
            return <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        }
        reset();
        // history.push(redirect_uri)
    };
    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    }
    return (
        <div className="login-page pt-5">
            <MenuBar></MenuBar>
            <Container className="py-5">
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem', margin: '0 auto' }}>
                        <Row >
                            <Col md={6} xs={12} className="pr-md-4">
                                <input className="our-form-input" placeholder="Email" {...register("email")} />
                                <br />
                                <input className="our-form-input" placeholder="Password" {...register("password")} />
                                <br />
                                <Button type="submit" variant="success">Login</Button>
                            </Col>
                        </Row>
                    </div>
                </form>
                <Toaster />
                <h4 className="py-3">New User ? <Link to="/register">Please Register</Link></h4>
                <Button onClick={handleGoogleLogin} variant="warning" className="my-3">Continue with Google</Button>
            </Container>
        </div>
    );
};

export default Login;