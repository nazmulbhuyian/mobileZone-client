
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imagebb_key;

    const navigate = useNavigate();

    const handleAddAProduct = data => {
        console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData) {
                    const addProduct = {
                        catagory_id: data.catagory_id,
                        name: data.name,
                        email: data.email,
                        img: imgData.data.url,
                        original_price: data.original_price,
                        resale_price: data.resale_price,
                        use: data.use,
                        seller_name: data.seller_name,
                        location: data.location
                    }

                    fetch('https://mobile-zone-server.vercel.app/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/myproduct')
                        })

                }

            })
    }

    return (
        <div className='w-96 p-7 mx-auto'>
            <h3 className='text-4xl'>Add A Product</h3>

            <form onSubmit={handleSubmit(handleAddAProduct)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email")} defaultValue={user?.email} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Original Price</span>
                    </label>
                    <input type="original" {...register("original_price", { required: 'Original price is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.original && <p className='text-red-600'>{errors.original?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input type="resale" {...register("resale_price", { required: 'resale price is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.resale && <p className='text-red-600'>{errors.resale?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Use</span>
                    </label>
                    <input type="use" {...register("use", { required: 'resale price is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.use && <p className='text-red-600'>{errors.use?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="seller" {...register("seller_name", { required: 'seller name is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.seller && <p className='text-red-600'>{errors.seller?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="location" {...register("location", { required: 'location is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Catagory Id</span></label>
                    <select {...register('catagory_id')} className="select input-bordered w-full max-w-xs">
                        <option disabled selected>Please select a ID</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Photo</span>
                    </label>
                    <input type="file" {...register("img", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>

                <input className='btn btn-accent w-full mt-5' value='Add Product' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;