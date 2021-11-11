
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../components/hooks/useAuth';
import MenuBar from '../../shared/Navigation/MenuBar'

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const {createUser, isLoading, user} = useAuth();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        alert('User Created Successfully')
        reset();
    };
    return (
        <div>
            <MenuBar></MenuBar>
            <h2>Registration Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name"{...register("name")} />
                <input placeholder="Email"{...register("email")} />
                <br />
                <input placeholder="Password" {...register("password")} />
                <br />
                <input type="submit" value="Register" />
            </form>
            <Link to="/login"><h4>Already Registered ?</h4></Link>
            {isLoading && <p>try to Registration</p>}
            {user.email && <h2>User Created Successfully!</h2>}
        </div>
    );
};

export default Register;