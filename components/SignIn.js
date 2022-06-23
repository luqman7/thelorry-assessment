import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { TextField } from './TextField'
import { userService } from '../services/user.service'
import { useRouter } from 'next/router';
import { alertService } from '../services/alert.service'
import Image from "next/image"

function SignIn() {
    const validate = Yup.object({
        email: Yup.string()
            .min(5, 'Must be more than 5 characters')
            .max(70, 'Must be less than 70 characters')
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Must be more than 7 characters')
            .max(25, 'Must less than 26 characters')
            .required('Password is required'),
    })

    const router = useRouter();

    return (
        <div className=''>
            <div className='h-2/3 flex flex-col space-y-3'>
                <div className="flex flex-col space-y-3">
                    <p>Hello, 👋</p>
                    <h2 className='text-2xl font-semibold'>Welcome to the black parade</h2>
                    <p className='text-[#9B9B9B] text-sm'>Please enter your details here</p> 
                </div>
                

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={validate}
                    onSubmit={values => {
                        // console.log(values)
                        const email = values.email
                        const password = values.password
                        return userService.login(email, password)
                            .then(() => {
                                const returnUrl = router.query.returnUrl || `/dashboard`
                                router.push(returnUrl)
                            })
                            .catch(alertService.error)
                    }}
                >
                    {formik => (
                        <div>
                            <Form className='flex flex-col space-y-3'>
                                <TextField label="Email or Username" name="email" type="text" />
                                <TextField label="Password" name="password" type="password" />
                                <button 
                                    type='submit'
                                    className='h-14 w-full rounded-md bg-gradient-to-b from-red-400 via-red-500 to-red-600 hover:scale-105 transition transform duration-200 ease-out'
                                >
                                        <p className="text-white font-semibold text-lg">Log In</p> 
                                </button>
                            </Form>
                        </div>
                    )}

                </Formik>
                <div className="w-full">
                    <p className='text-right text-blue-600 underline cursor-pointer'>Forgot Password</p>
                </div>
            </div>
            
            <div className='flex flex-col space-y-3 h-1/3 pt-8'>
                <p className='w-full text-center border-b-2 border-gray-200 leading-[0.1rem]'>
                    <span className='px-2 text-gray-400 bg-white'>Or</span>
                </p>

                <div className='flex flex-col items-center justify-center p-4 pb-0'>
                    <p>Login Using</p>

                    <div className='flex items-start py-5'>
                        <Image
                            alt=''
                            src='/Apple.svg'
                            height={60}
                            layout="fixed"
                            width={60}
                        />
                        <Image
                            alt=''
                            src='/Facebook.svg'
                            height={60}
                            layout="fixed"
                            width={60}
                        />
                        <Image
                            alt=''
                            src='/Gmail.svg'
                            height={50}
                            layout="fixed"
                            width={60}
                        />
                        <Image
                            alt=''
                            src='/Microsoft.svg'
                            height={60}
                            layout="fixed"
                            width={60}
                        />
                        <Image
                            alt=''
                            src='/Yahoo.svg'
                            height={60}
                            layout="fixed"
                            width={60}
                        />
                    </div>
                </div>
                <p 
                    onClick={() => router.push('/signup')}
                    className='text-center cursor-pointer'>Not registered?
                        <span className='text-blue-600 underline'>Create an account</span>
                </p>
            </div>
            
        </div>
    )
}

export default SignIn