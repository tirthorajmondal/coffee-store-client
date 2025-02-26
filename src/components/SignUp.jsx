import React, { useContext } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";


const SignUp = () => {
    const { createUser, handelToggle } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);
        createUser(email, password)
            .then(result => {
                //new user has been created!!
                console.log(result.user);
                const createAt = result.user?.metadata?.creationTime
                const user = { email, createdAt: createAt }
                fetch('https://coffee-store-server-by-tirtho.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-right',
                                title: "User Created Successfully!",
                                icon: "success",
                            });
                            console.log('User added to database successfully')
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='mt-16 flex flex-col md:max-w-md max-w-lg mx-auto p-6 bg-rose-300 rounded-lg shadow-lg border border-rose-400'>
            <form onSubmit={handleSignUp} className="space-y-4 w-ful">
                <h2 className="text-2xl font-semibold text-center text-rose-900 ">Create New Account</h2>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-rose-900">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200"
                    />
                </div>

                <div className="flex flex-col relative">
                    <label className="text-sm font-medium text-rose-900">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        className="outline-none px-4 py-3 rounded-md border border-rose-400 bg-rose-200 transition duration-200 "
                    />
                    <p onClick={handelToggle} className="absolute right-3 bottom-3 cursor-pointer duration-200">Show</p>

                </div>


                <button
                    type="submit"
                    className="w-full py-3 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-400 transition duration-200"
                >
                    Sign Up
                </button>

            </form>
            <FcGoogle onClick={() => { handleGoogeSignUp() }} className='self-center text-4xl my-3 cursor-pointer' />

            <p className='text-center'>Already have account <Link to='/signin' className='ml-3 px-3 py-1 ring-0 btn bg-transparent border-none outline'>Click Here</Link></p>
        </div>
    );
};

export default SignUp;

