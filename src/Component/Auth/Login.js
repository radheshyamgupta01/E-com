import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  let [email, setEmail] = useState("");
  let [Alert,setAlert]=useState(false)
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let histrory = useHistory();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGVdGoRUSBwzxrCKNk9zPE3Z1Sv4mM2lk ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();
      if(response.ok){
        setAlert(true)
          // Function to speak the success message
  function speakSuccessMessage() {
    const successMessageElement = document.getElementById('successMessage');
    
    // Check if the Web Speech API is supported
    if ('speechSynthesis' in window) {
      // Create a SpeechSynthesisUtterance object
      const speechMessage = new SpeechSynthesisUtterance();
      
      // Set the text to be spoken
      speechMessage.text =  "Congratulations Sir! Your login is successful."
      
      // Speak the message
      window.speechSynthesis.speak(speechMessage);
    } else {
      // Web Speech API is not supported
      console.error('Web Speech API is not supported in this browser.');
    }
  }

  // Call the function to speak the success message
  speakSuccessMessage();


        setTimeout(() => {
          histrory.push("/store");
        },7000);
      }

   

      console.log(data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1484689228555-fd6bc1b28b7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHllbGxvd3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Your Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-100">
        <h1 className="text-2xl text-yello-500 font-serif font-black mb-4">
        {Alert && (
          <div class="font-regular relative block w-full rounded-lg bg-green-500 p-4 text-base leading-5 text-white">
            <div class="mr-12" id="successMessage"> Login successfully</div>
            <div class="absolute top-2.5 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20">
              <button
                role="button"
                class="w-max rounded-lg p-1"
               
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        )}
          Login{" "}
        </h1>

        <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium  font-serif text-gray-600"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-0 p-2 pl-4 w-full border rounded-md"
                placeholder="Enter  email"
              />
            
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium font-serif text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-0 p-2 pl-4 w-full border rounded-md"
                placeholder="Enter  password"
              />
            
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm  font-serif font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-0 p-2 pl-4 w-full border rounded-md"
                placeholder="Confirm  password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
             
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 font-serif font-bold rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
