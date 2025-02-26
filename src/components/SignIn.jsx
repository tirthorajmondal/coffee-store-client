import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
    const { signInUser, handelToggle } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                const loggedIn = result.user?.metadata?.lastSignInTime;
                const user = { email, lastLoggedIn: loggedIn }
                fetch('https://coffee-store-server-by-tirtho.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            position: 'top-right',
                            title: "User logged in!",
                            icon: "success",
                            timer:1500,
                            iconColor: '#0000'
                        });
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    


    return (
        <div className='mt-16 flex flex-col md:max-w-md max-w-lg mx-auto p-6 bg-rose-300 rounded-lg shadow-lg border border-rose-400'>
            <form onSubmit={handleSignIn} className="space-y-4 w-full ">
                <h2 className="text-2xl font-semibold text-center text-rose-900 mb-6">Sign In Your Account</h2>
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-rose-900">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                    />
                </div>
                <div className="flex flex-col relative" >
                    <label className="text-sm font-medium text-rose-900">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="password outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                    />
                    <p onClick={handelToggle} className="absolute right-3 bottom-3 cursor-pointer duration-200">Show</p>
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-400 transition duration-200"
                >
                    Sign In
                </button>
            </form>
            <FcGoogle onClick={() => { handleGoogeSignIn() }} className='self-center text-4xl my-3 cursor-pointer' />


            <p className='text-center'>Create new account <Link to='/signup' className='ml-3 px-3 py-1 ring-0 btn bg-transparent border-none outline'>Click Here</Link></p>
        </div>
    );
};

export default SignIn;