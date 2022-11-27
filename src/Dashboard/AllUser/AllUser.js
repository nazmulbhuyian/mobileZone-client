import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.modifiedCount > 0) {
                //     alert('Make admin successful')
                    refetch();
                // }
            })
    }

    return (
        <div>
            <h3 className='text-3xl'>All Users</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td><button className='btn btn-xs btn-primary text-white' onClick={() => handleMakeAdmin(user._id)}>Make Admin</button></td>
                                {/* <td>{user?.role !== 'admin' &&
                                    <button className='btn btn-xs btn-primary text-white'>Make Admin</button>}</td> */}
                                <td><button className='btn btn-xs text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;