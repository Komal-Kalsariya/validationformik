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
         .email("enter valid email address")
        .matches ("(^[a-z0-9]+@[a-z]+\.[a-z]{2,3})" ,"regex")
        .required("enter email address")
        ,
        password: Yup.string()
        .min(8)
        .max(20)
        .matches("(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$)","regex")
    
        .required("password must be 8 character like albhabets special charater and digits"),
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
            <h2 className='text-center p-4 text-decoration-underline text-uppercase text-info'>ValidationForm</h2>
            <form className='w-25' onSubmit={formdata.handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className={`form-control ${ formdata.touched.username&&
                            formdata.errors.username ?"error":null}`} id="exampleInputEmail1"
                        aria-describedby="emailHelp" value={formdata.values.username} name='username'
                        onChange={formdata.handleChange} onBlur={formdata.handleBlur} />
                        {
                            formdata.touched.username&&
                            formdata.errors.username
                            ?<p style={{color:"red"}}>{formdata.errors.username}</p>
                            :null
                        }

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className={`form-control ${ formdata.touched.email&&
                            formdata.errors.email ?"error":null}`} id="exampleInputEmail1"
                        aria-describedby="emailHelp" value={formdata.values.email} name='email'
                        onChange={formdata.handleChange} onBlur={formdata.handleBlur} />
                         {
                            formdata.touched.email&&
                            formdata.errors.email
                            ?<p style={{color:"red"}}>{formdata.errors.email}</p>
                            :null
                        }

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="text" className={`form-control ${ formdata.touched.password&&
                            formdata.errors.password ?"error":null}`} id="exampleInputPassword1"
                        value={formdata.values.password} name='password'
                        onChange={formdata.handleChange}
                        onBlur={formdata.handleBlur} />
                         {
                            formdata.touched.password&&
                            formdata.errors.password
                            ?<p style={{color:"red"}}>{formdata.errors.password}</p>
                            :null
                        }
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Uservalidation