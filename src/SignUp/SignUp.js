import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import UseToken from '../Hooks/UseToken';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser } = useContext(AuthContext)

    const [signUpError, setSignUpError] = useState('');

    const navigate = useNavigate();

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = UseToken(createdUserEmail)

    if (token) {
        navigate('/')
    }


    const handleSignUp = data => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => {
                console.error(err)
                setSignUpError(err.message)
            })
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://mobile-zone-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCreatedUserEmail(email)
                toast.success('User created successfully.')
                // navigate('/')
            })

    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 caracter or longer' },
                            })
                        }
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Role</span></label>
                        <select {...register('role')} className="select input-bordered w-full max-w-xs">
                            <option disabled selected>Please select a Option</option>
                            <option>seller</option>
                            <option>bayer</option>
                        </select>
                    </div>

                    <input className='btn btn-accent w-full mt-5' value='Sign Up' type="submit" />
                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                </form>
                <p>Already have an account <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;