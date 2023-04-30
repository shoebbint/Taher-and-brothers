import React, { useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import login from '../../../../images/account-login-line-icon-new-user-register-free-vector.jpg'
const Register = () => {
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [user3, loading3, error3] = useAuthState(auth);
    // const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    // const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const navigateLogin = (event) => {
        navigate('/login');
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const regEmailRef = useRef('');
    const regPasswordRef = useRef('');
    const nameRef = useRef('');
    // const confirmPasswordRef = useRef('');
    const handleRegister = (event) => {
        event.preventDefault();
        const regEmail = regEmailRef.current.value;
        const regPassword = regPasswordRef.current.value;
        console.log(regEmail, regPassword)
        createUserWithEmailAndPassword(regEmail, regPassword);

    };
    if (user3 ||  user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
                            <form onSubmit={handleRegister} action="submit">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input ref={nameRef} type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input ref={regEmailRef} type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input ref={regPasswordRef} type="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <label className="label">
                                <p>Already have an account ?<Link to="/login" className='text-danger decoration-none' onClick={navigateLogin}><button className="btn btn-link label-text-alt link link-hover text-primary decoration-none" to="/register" >Login</button ></Link >  </p>
                            </label>


                        </div>
                    </div>

                    <img className="mask mask-parallelogram object-cover object-center rounded" alt="hero" src={login} />

                </div>
            </div>
        </div>
    );
};

export default Register;