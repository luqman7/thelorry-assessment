import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const TextField = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className='flex flex-col'>
            <label htmlFor={field.name} className="pb-3">{label}</label>
            <input 
                type="text" 
                className={`border-2 border-gray-200 bg-gray-100 ${meta.touched && meta.error && 'border-red-500'} rounded-md h-12`}
                {...field} {...props}
            />
            <ErrorMessage component="div" name={field.name} className="text-sm text-red-500" />
        </div>
    )
}
