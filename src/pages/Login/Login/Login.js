import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../components/hooks/useAuth';
import MenuBar from '../../shared/Navigation/MenuBar';


const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const {loginUsingPassword, isLoading, user} = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || 'home';

    const onSubmit = data => {
        console.log(data)
        loginUsingPassword(data.email, data.password)
        if(isLoading){
            alert('successful')
        }
        else {
            alert('Please enter Valid Email')
        }
        reset();
        history.push(redirect_uri)
    };
    return (
        <div>
            <MenuBar></MenuBar>
            <h2>Login Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Email" {...register("email")} />
                <br />
                <input placeholder="Password" {...register("password")} />
                <br />
                <input type="submit" value="Login" />
            </form>
            <h4>New User ? <Link to="/register">Please Register</Link></h4>
            {isLoading && <p>try to Login</p>}
            {user.email && <h2>Login Success</h2>}
        </div>
    );
};

export default Login;