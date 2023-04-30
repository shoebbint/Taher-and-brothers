import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import login from '../../../../images/sign-in-page-flat-design-concept-illustration-icon-account-login-user-login-abstract-metaphor-can-use-for-landing-page-mobile-app-ui-posters-banners-free-vector.jpg'
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const notify = () => toast("Email Sent !");
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = (event) => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        if (email) {
            toast('Sent email');
        }
        else {
            toast('Please enter email address');
        }

    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                            <form onSubmit={handleSubmit}>
                                <div  className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input ref={emailRef} type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input ref={passwordRef} type="text" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <label className="label">
                                <p>New to Taher and brothers? <Link to="/register" className='label-text-alt link link-hover text-primary decoration-none' >Please Register</Link ></p>
                            </label>
                            <label className="label">
                                <p>Forget Password? <button className="btn btn-link label-text-alt link link-hover text-primary decoration-none" to="/register" >Reset Password</button ></p>
                            </label>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>

                    <img class=" mask mask-parallelogram object-cover object-center rounded" alt="hero" src={login} />

                </div>
            </div>
        </div>
    );
};

export default Login;