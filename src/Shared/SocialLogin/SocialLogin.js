import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import UseToken from '../../Hooks/UseToken';

const SocialLogin = () => {

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = UseToken(createdUserEmail)

    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }


    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                saveUser(user.email)
                
                setCreatedUserEmail(user.email)
            })
            .then(err => console.error(err))

    }

    const saveUser = (email) => {
        const user = { email };
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
                navigate('/')
            })
    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-primary'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;