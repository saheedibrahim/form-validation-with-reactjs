import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import content from '../../static/data';
import './sign-up.css';
import { Link } from 'react-router-dom'

const schema = yup.object().shape({
    fullname: yup.string().required().min(6),
    email: yup.string().required("Please enter a valid email"),
    password: yup.string().required("Please enter password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character")
}) 
function SignUp() {
  const {   register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data) => console.log(data)

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
            return(
                <div key={key}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input {...register(input.name)} type={input.type} name={input.name}/>
                    <span className='message'>{errors[input.name]?.message}</span>
                </div>
            )
        })}
        <label htmlFor="options">User Type</label>
        <select id="options">
          <option value="Developer">Developer</option>
          <option value="Owner">Owner</option>
        </select>
      <input type="submit" />
    </form>
    <p>Have an account? <Link to="/signin">Sign In</Link></p>
    <p><Link to="/">Back to Home</Link></p>

    </div>
  );
}

export default SignUp