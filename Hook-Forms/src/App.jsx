import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useForm} from "react-hook-form"


// From:-in this project i  learn how to make form with some validation using Ract-Hook-form package. 
function App() {
  const{
    register, // this field is used to link the data to form.
    handleSubmit,// this field is used to sumbmit the data.
    watch,
    formState:{errors,isSubmitting},//errors:-this field true when error is occured.
                                    // isSubmitting:-this field also true when form is in submitting state.
  }=useForm();

  async function onSubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log("submitting the form",data);
  }

  return (
   <form onSubmit={ handleSubmit(onSubmit)}>
      <div>
        <label>First Name: </label>
       <input {...register('firstName',{required:true,minLength:{value:3,message:"min length atleast 3"},maxLength:{value:6, message:"max Length Atmost 6"}})} />
       {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <br />
       <div>
        <label>Middle Name: </label>
        <input {...register('middleName')} />
      </div>
      <br />
       <div>
        <label>Last Name: </label>
        <input {...register('lastName')} />
      </div>
      <br />
      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "submitting" : "submit"}/>
   </form>
  )
}

export default App
