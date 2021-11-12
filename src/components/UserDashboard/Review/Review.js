import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <h2>Review page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-main" style={{ borderRadius: "15px", maxWidth: '85rem' }}>
                        <Row>
                            <Col md={6} xs={12} className="pr-md-4">
                                <input className="our-form-input" type="text" {...register("CarName", { required: true })} defaultValue={name} />
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
                                <label>Your Phone Number</label>
                                <input
                                    type="number"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("phone", { required: true })}
                                    placeholder="Phone Number"
                                />
                                <label>Test Drive Date</label>
                                <input
                                    type="date"
                                    date="{{date}}" timezone="[[timezone]]"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("testDriveDate", { required: true })}
                                    placeholder="Test Drive Date"
                                />
                                <textarea
                                    type="textarea"
                                    className="our-form-input"
                                    defaultValue=""
                                    {...register("address", { required: true })}
                                    placeholder="Address"
                                />
                                 <br />
                                {/* <Button type="submit">Send</Button> */}
                            </Col>
                        </Row>
                    </div>

                    <div className="text-center mt-4">
                        <Button type="submit" className="btn-main" style={{ padding: ".68rem 2rem" }}>
                            Confirm Booking
                        </Button>
                    </div>
                </form>
        </div>
    );
};

export default Review;