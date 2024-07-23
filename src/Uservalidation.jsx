import { useFormik } from 'formik'
import React from 'react'
import *as Yup from 'yup'
const Uservalidation = () => {
    const uservalidationScheme = Yup.object({
        username: Yup.string()
        .min(3)
        .max(10)
        .required("User name must be at 10 character"),
        email: Yup.string()
        .email("enter valid email")
        .required("enter email address"),
        password: Yup.string()
        .min(6)
        .max(16)
        .required("password  must be at least 6 digit"),
    })
    let formdata = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: uservalidationScheme,
        onSubmit: (value) => {
            console.log(value);
        },
        validateOnChange: true,
        validateOnBlur: true,
    })
    return (
        <div>
            <form className='w-25' onSubmit={formdata.handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" value={formdata.values.username} name='username'
                        onChange={formdata.handleChange} onBlur={formdata.handleBlur} />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" value={formdata.values.email} name='email'
                        onChange={formdata.handleChange} onBlur={formdata.handleBlur} />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                        value={formdata.values.password} name='password'
                        onChange={formdata.handleChange}
                        onBlur={formdata.handleBlur} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Uservalidation