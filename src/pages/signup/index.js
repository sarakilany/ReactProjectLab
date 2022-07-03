// import { useState, useEffect } from "react";
import { appendErrors, useForm, Controller, useWatch } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';
import ReactSelect from "react-select";
export const Singup = () => {

    const { control, register, watch, handleSubmit,
        formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("data", data);
        //API request


    }
    const selectHobbies = [
        { value: 1, label: 'reading' },
        { value: 2, label: 'surfing the internet' },
        { value: 3, label: 'watching TV' },
        { value: 4, label: 'playing football' }
    ]
    const selectGender = [
        { value: 1, label: 'Female' },
        { value: 2, label: 'Male' }]
    console.log(errors);
    return (
        <div>
            <h2>Create new account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" placeholder="email" name="email" id="email" {...register('email', { required: true, pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i })} />
                    {(errors.email && errors.email.type === 'required') &&
                        <p className="text-danger">Email is required</p>}
                    {(errors.email && errors.email.type === 'pattern') &&
                        <p className="text-danger">Make sure your email is correct. Ex. example@name.com</p>}
                </div>
                <div>
                    <label htmlFor="username">Username</label><br />
                    <input type="text" placeholder="username" name="username" id="username" {...register('username', { required: true, minLength: 8, })} />
                    {(errors.username && errors.username.type === 'required') &&
                        <p className="text-danger">Username is required</p>}
                </div>
                <div>
                    <label htmlFor="age">Age</label><br />
                    <input type="number" placeholder="Your age, must be 10 or older" name="age" id="age" {...register('age', { required: true, min: 10, })} />
                    {(errors.age && errors.age.type === 'required') &&
                        <p className="text-danger">Age is required</p>}
                    {(errors.age && errors.age.type === 'min') &&
                        <p className="text-danger">Must be 10 or older</p>}
                </div>
                <div>
                    <label htmlFor="gender">Gender</label><br />
                    <Controller
                        id="gender"
                        name="selectGender"
                        control={control}
                        render={({ field }) => <ReactSelect
                            {...field}
                            options={selectGender} placeholder="Select Gender" {...register('gender', { required: true })} />} ></Controller>


                </div>
                <div>
                    <label htmlFor="hobbies">Hobbies</label><br />
                    <Controller
                        id="hobbies"
                        name="selectHobby"
                        control={control}
                        render={({ field }) => <CreatableSelect
                            {...field}
                            options={selectHobbies} placeholder="Select hobby or add one" {...register('hobbies')} />} ></Controller>
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label><br />
                    <input type="number" placeholder="Phone" name="phone" id="phone" {...register('phone')} />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" placeholder="Password" name="password" id="password" {...register('password', { required: true, minLength: 8 })} />
                    {(errors.password && errors.password.type === 'required') &&
                        <p className="text-danger">Password is required</p>}
                    {(errors.password && errors.password.type === 'minLength') &&
                        <p className="text-danger">Minimum password length is 8</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Cofirm Password</label><br />
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" id="confirmPassword" {...register('confirmPassword', {
                        required: true,
                        validate: (value) => {
                            if (watch('password') !== value) { return `Your passwords do not match`; }
                        }
                    })} />
                    {errors.confirmPassword && errors.confirmPassword.type === 'required' &&
                        <p className="text-danger">Confirm your password</p>}

                    {(watch('password') !== watch('confirmPassword')) ? <p className="text-danger">Your passwords do not match</p> : null}

                </div>
                <div>
                    <button type="submit" >Signup</button>
                </div>
            </form >
        </div >
    )
}