'use client'

import { Label } from "flowbite-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import { object } from "yup";
import { toast } from "react-toastify";
export default function Signup() {
  const [processing, setProcessing] = useState(false);

  const signup_validationSchema=object({
    username:Yup.string().required('username is required.'),
    email:Yup.string().email('invalid email address').required('email is required.'),
    password:Yup.string().required('password is required'),
    confirmpassword:Yup.string().required('password is required').oneOf([Yup.ref('password'),],'passoword must match'),
    mobilenumber:Yup.string().required('mobile number is required'),
    role:Yup.string().required('role is required'),
    
  })
  return(
<Formik
 initialValues={{ 
  username: '',
  email: '',
  password: '',
  confirmpassword: '',
  mobilenumber: '',
  role: '',
}}
validationSchema={signup_validationSchema}
onSubmit={async (values, { resetForm }) => {
  setProcessing(true);
  let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json"
   }
   
   let bodyContent = JSON.stringify({
     "username": values.username,
     "email": values.email,
     "password": values.password,
     "confirmPassword": values.confirmpassword,
     "mobilenumber": values.mobilenumber,
     "role": values.role,
     "is_exist": "true"
   });
   
   let response = await fetch("http://localhost:3000/api/post/signup/signup", { 
     method: "POST",
     body: bodyContent,
     headers: headersList
   });
   
  let data = await response.json();
  if (data.code == 200) {
    setProcessing(false);
    toast.success(data.message);
    resetForm();
  } else {
    setProcessing(false);
    toast.error(data.message);
  }
}}
>
<Form className="formy min-h-screen flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center bg-white">
  <h1 className="flex bg-center text-cyan-700 font-semibold text-3xl pb-10">Register</h1>
    <div className="forms grid gap-6 mb-6 md:grid-cols-2 px-4 sm:px-20">
        <div>
        <div className="relative">
        <Field type="text" id="floating_outlined" name="username" componentname="username" className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer focus:border-2" placeholder=" " />
         <label htmlFor="floating_outlined" className=" font-semibold absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
        </div>
        <ErrorMessage component={Label} className="text-sm text-red-700" name="username" />
        </div>
        <div>
        <div className="relative">
        <Field type="text" id="floating_outlined" name="email" componentname="email" className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer focus:border-2" placeholder=" " />
        <label htmlFor="floating_outlined" className=" font-semibold absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
        </div>
        <ErrorMessage component={Label} className="text-sm text-red-700" name="email" />
        </div>
        <div>
        <div className="relative">
        <Field type="password" id="floating_outlined" name="password" componentname="password" className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer focus:border-2" placeholder=" " />
        <label htmlFor="floating_outlined" className=" font-semibold absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
        </div>
        <ErrorMessage component={Label} className="text-sm text-red-700" name="password" />
        </div>
        <div>  
        <div className="relative">
        <Field type="password" id="floating_outlined" name="confirmpassword" componentname="confirmpassword" className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer focus:border-2" placeholder=" " />
        <label htmlFor="floating_outlined" className=" font-semibold absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Confirm Password</label>
        </div>  
        <ErrorMessage component={Label} className="text-sm text-red-700" name="confirmpassword" />
        </div>
        <div>
        <div className="relative">
        <Field type="text" id="floating_outlined" name="mobilenumber" componentname="mobilenumber" className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer focus:border-2" placeholder=" " />
        <label htmlFor="floating_outlined" className=" font-semibold absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Mobile No.</label>
        </div>
        <ErrorMessage component={Label} className="text-sm text-red-700" name="mobilenumber" />
        </div>
        <div>
        <div className="relative">
        <Field as="select" id="floating_outlined" name="role" componentname="role" className="block px-2.5 pb-2.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-lg border-1 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer focus:border-2" placeholder=" ">
       <option value="">--Select a Role--</option>
       <option value="Administrator">Administrator</option>
       </Field>
          <label htmlFor="floating_outlined" className=" font-semibold absolute text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Role</label>
       </div>
       <ErrorMessage component={Label} className="text-sm text-red-700" name="role" />
    </div>
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</Form>
</Formik>

  )
};


























