import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";

function FormHandling() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="w-50">
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input {...register("Name")} placeholder="Name" type='text' className="form-control" /><br/>
      <input {...register("Email")} placeholder="Email" type='email' className="form-control" /><br/>
      <input {...register("Password")} placeholder="Password" type='password' className="form-control" /><br/>
      <input type="submit" className="form-control"/>      
      <p>{data}</p>
    </form>
    </div>
  )
}

export default FormHandling

