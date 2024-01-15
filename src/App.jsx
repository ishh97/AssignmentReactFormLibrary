import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {


  const { register, handleSubmit: handleFormSubmit, formState: { errors: FormErrors } } = useForm();

  const [data, setData] = useState();
  const [submit, setSubmit] = useState(false);

  const onSubmit = (data) => {
    setSubmit(true)
    setData(data)
    
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit(onSubmit)}>
        {submit ? <div className='success'><h3>Registration succesfull!</h3></div> : null}

        <input
          id="first-name" type="text"  placeholder="Please Enter Your First Name" 
          {...register('firstName', { required: "First Name is required!" })}
        />

        <p>{FormErrors.firstName?.message}</p>

        <input
          id="last-name" type="text" placeholder="Please Enter Your Last Name"
          {...register('lastName', { required: "Last Name is required!" })}
        />

        <p>{FormErrors.lastName?.message}</p>


        <input
          id="email"  type="email"  placeholder="Please Enter Your Email"
          {...register('email', { required: "email is required!", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}

        />

        <p>{FormErrors.email?.message}</p>

        <input
          id="Password"  type="password" placeholder=" Please Enter Your Password"
          {...register('password', {
            required: "Password is required!",
            minLength: { value: 5, message: "Password must have more than 5 characters" },
            maxLength: { value: 20, message: "Password cannot be more than 20 characters" }
          })}
        />
        <p>{FormErrors.password?.message}</p>

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App
