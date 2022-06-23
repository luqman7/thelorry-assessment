import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { TextField } from './TextField'
import { userService } from '../services/user.service'
import { alertService } from '../services/alert.service'
import { useRouter } from 'next/router';

export const SignUp = () => {
    const router = useRouter();
    const validate = Yup.object().shape({
        username: Yup.string()
            .min(6, 'Must be more than 5 characters')
            .max(18, 'Must be less than 19 characters')
            .when('email', {
                is: (email) => !email || email.length === 0,
                then: Yup.string()
                .required('Either Email or Username is required'),
            }),
        email: Yup.string()
            .min(5, 'Must be more than 5 characters')
            .max(70, 'Must be less than 70 characters')
            .email('Email is invalid')
            .when('username', {
                is: (username) => !username || username.length === 0,
                then: Yup.string()
                .required('Either Email or Username is required'),
            }),
        name: Yup.string()
            .min(3, 'Must be more than 2 characters')
            .max(50, 'Must be less than 50 characters')
            .required('Name is required'),
        mobileNumber: Yup.string()
            .min(8, 'Must be more than 7 characters')
            .max(14, 'Must be less than 15 characters'),
        password: Yup.string()
            .min(8, 'Must be more than 7 characters')
            .max(25, 'Must less than 26 characters')
            .required('Password is required')
            .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
            .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    }, [['username', 'email']])

    return (
        <div className=''>
                <div className='h-2/3 flex flex-col space-y-3'>
                    <div className="flex flex-col space-y-3">
                        <h2 className='text-2xl font-semibold'>Create new account?</h2>
                        <p className='text-[#9B9B9B] text-sm'>Create new account to experience the awesomeness of music</p> 
                    </div>

                    <Formik
                        initialValues={{
                            username: '',
                            email: '',
                            name: '',
                            mobileNumber: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            // console.log(values)
                            delete values.confirmPassword
                            return userService.register(values)
                                .then(() => {
                                    alertService.success('Registration successful', { keepAfterRouteChange: true })
                                    const returnUrl = router.query.returnUrl || `/dashboard`
                                    router.push(returnUrl)
                                })
                                .catch(alertService.error)
                        }}
                    >
                        {formik => (
                            <div>
                                <Form className='flex flex-col space-y-3'>
                                    <TextField label="User Name" name="username" type="text" />
                                    <TextField label="Email" name="email" type="email" />
                                    <TextField label="Name" name="name" type="text" />
                                    <TextField label="Mobile Number" name="mobileNumber" type="text" />
                                    <TextField label="Password" name="password" type="password" />
                                    <TextField label="Re-enter Password" name="confirmPassword" type="password" />
                                    <button 
                                        type='submit'
                                        className=' h-14 w-full rounded-md bg-gradient-to-b from-red-400 via-red-500 to-red-600 hover:scale-105 transition transform duration-200 ease-out'
                                    >
                                            <p className="text-white font-semibold text-lg">Sign Up</p> 
                                    </button>
                                </Form>
                            </div>
                        )}

                    </Formik>
                    <button 
                        className=' h-20 w-full rounded-md bg-gray-200 hover:scale-105 transition transform duration-200 ease-out'
                        onClick={() => router.push('/')}
                    >
                            <p className="">
                                Oh, I have account
                            </p>
                            <p className='text-red-500 font-semibold text-lg'>Login Now</p> 
                    </button>
                </div>            
            </div>
    )
}
