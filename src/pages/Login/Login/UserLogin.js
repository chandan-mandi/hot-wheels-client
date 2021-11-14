import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../components/hooks/useAuth';
import MenuBar from '../../shared/MenuBar/MenuBar';
import './Login.css';

const UserLogin = () => {
    const { register, handleSubmit, reset } = useForm();
    const { loginUsingPassword, signInUsingGoogle, isLoading, authError } = useAuth();

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
    };
    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history)
    }
    return (
        <>
        <MenuBar/>
        <div className="login-section">
            <div className="imgBx">
                <img src="https://image.freepik.com/free-photo/indian-woman-working-laptop-street-cafe-wearing-stylish-smart-clothes-jacket-glasses_1157-48457.jpg" alt="" />
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="inputBx">
                            <span>Username</span>
                            <input type="text" {...register("email")}/>
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password" {...register("password")}/>
                        </div>
                        <div className="remember">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Sign in" name="" />
                        </div>
                        <div className="inputBx">
                            <p>Don't have an acount ? <Link to="/register">Sign up</Link> </p>
                        </div>
                    </form>
                    <Toaster/>
                    <h3>Login with social media</h3>
                    <ul className="sci">
                        <li><img src="https://cdn-icons-png.flaticon.com/512/20/20837.png" alt="" /></li>
                        <li onClick={handleGoogleLogin}><img src="https://cdn-icons.flaticon.com/png/512/104/premium/104093.png?token=exp=1636892792~hmac=95b1cbb8fa02435061f2bf648c921955" alt="" /></li>
                        <li><img src="https://cdn-icons.flaticon.com/png/512/2175/premium/2175377.png?token=exp=1636892890~hmac=f1db8b0c4abc7788dc653fce4a003b3c" alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default UserLogin;