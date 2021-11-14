
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../components/hooks/useAuth';
import MenuBar from '../../shared/MenuBar/MenuBar'

const Register = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const { createUser, isLoading, user } = useAuth();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password, data.name)
        // toast.success('')
        // toast.success('And SuccessFully Login')
        if (isLoading) {
            return <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        }
        else {
            toast.success('User Created Successfully')
        }
        reset();
        history.push('/dashboard')
    };
    return (
        <div>
            <MenuBar></MenuBar>
            <Container>
                <h2>Registration Page</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem', margin: '0 auto' }}>
                        <Row >
                            <Col md={6} xs={12} className="pr-md-4">
                                <input className="our-form-input" placeholder="Name"{...register("name")} />

                                <input className="our-form-input" placeholder="Email"{...register("email")} />

                                <input className="our-form-input" placeholder="Password" {...register("password")} />

                                <Button type="submit" variant="warning">Register</Button>
                            </Col>

                        </Row>

                    </div>
                </form>
                <Toaster />
                <Link to="/login"><h4>Already Registered ?</h4></Link>
            </Container>
        </div>




    );
};

export default Register;