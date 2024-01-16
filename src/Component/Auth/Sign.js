import React ,{useEffect, useState}from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Ragister = () => {
let  [email,setEmail] =useState("")
let [password,setPassword]=useState("")
let [confirmPassword,setConfirmPassword]=useState("")
let histrory=useHistory()
const handleFormSubmit = async (e) => {
  e.preventDefault();

 
  if (password !== confirmPassword) {
    
    console.error("Passwords do not match");
    return;
  }

  try {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGVdGoRUSBwzxrCKNk9zPE3Z1Sv4mM2lk ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken:true
      }),
    });

    const data = await response.json();
    histrory.push("/login")

    console.log(data); 

   
  } catch (error) {
    console.error("Registration error:", error);

  }
};




  return (
    <div className="flex flex-col md:flex-row h-screen">

      <div className="md:w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1584908917822-6799d69a72cc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXx0WGpjZmVYNFhnWXx8ZW58MHx8fHx8"
          alt="Your Image"
          className="w-full h-full object-cover"
        />
      </div>

     
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-100">
        <h1 className="text-2xl text-yello-500 font-serif font-black mb-4">Welcome to Generic  Shopping </h1>

    
        <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
          <div className="mb-4 ">
            <label htmlFor="username" className="block text-sm font-medium font-serif text-gray-600">Username</label>
            <div className="relative">
              <input
                type="text"
                id="username"
                required
                name="username" 
             
                
                className="mt-0 p-2 pl-4 w-full border rounded-md"
                placeholder="Enter  username"
               
              />
              
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium  font-serif text-gray-600">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="mt-0 p-2 pl-4 w-full border rounded-md"
                placeholder="Enter  email"
              />
             
            </div>
          </div>

    
          
       
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium font-serif text-gray-600">Password</label>
            <div className="relative">
           
              <input
                type="password"
                id="password"
                value={password}
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                className="mt-0 p-2 pl-4 w-full border rounded-md"
                placeholder="Enter  password"
              />
              
            </div>
          </div>

       
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm  font-serif font-medium text-gray-600">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-0 p-2 pl-4 w-full border rounded-md"
                placeholder="Confirm  password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
              />
              
            </div>
          </div>

       
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm  font-serif text-gray-900">Remember me</label>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 font-serif font-bold rounded-md">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Ragister