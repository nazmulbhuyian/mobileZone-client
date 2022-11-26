import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SocialLogin = () => {

    // const [createdUserEmail, setCreatedUserEmail] = useState('')

    const navigate = useNavigate();


    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                // saveUser(user.email)
                navigate('/')
                // setCreatedUserEmail(user.email)
            })
            .then(err => console.error(err))

    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;