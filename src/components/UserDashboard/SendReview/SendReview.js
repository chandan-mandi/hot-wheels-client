import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const SendReview = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="send-review-section">
            <h2 style={{fontFamily: 'Rakkas', fontSize: '52px', color: 'orange'}} className="text-center py-3">Say Something About Our Website...</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                        <Row>
                            <Col style={{width: '550px', margin: '0 auto'}} md={12} xs={12} className="pr-md-4">
                                <label>Name</label>
                                <input
                                    className="our-form-input"
                                    type="text"
                                    defaultValue={user.displayName}
                                    {...register("name", { required: true })}
                                    placeholder="Your Name"
                                />
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="our-form-input"
                                    defaultValue={user.email}
                                    {...register("email", { required: true })}
                                    placeholder="Your Email"
                                />
                                <label>Rate Our Site</label>
                                <select 
                                    className="our-form-input"
                                    defaultValue="Four"
                                    {...register("rating", {required: true})}
                                    >
                                    <option>One</option>
                                    <option >Two</option>
                                    <option>Three</option>
                                    <option>Four</option>
                                    <option>Five</option>
                                </select>
                                <label>Description</label>
                                <textarea
                                    type="textarea"
                                    style={{height : '150px'}}
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("address", { required: true })}
                                    placeholder="Comments on Our site"
                                />
                                 <br />
                                {/* <Button type="submit">Send</Button> */}
                            </Col>
                        </Row>
                    </div>

                    <div className="text-center mt-4">
                        <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                            Submit
                        </Button>
                    </div>
                </form>
        </div>
    );
};

export default SendReview;