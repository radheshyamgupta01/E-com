import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Ragister = () => {
  const [Alert, setAlert] = useState(false);
  let [email, setEmail] = useState("");
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
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGVdGoRUSBwzxrCKNk9zPE3Z1Sv4mM2lk ",
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

      if (response.ok) {
        setAlert(true);

        function speakSuccessMessage() {
          const successMessageElement = document.getElementById('successMessage');
          
          // Check if the Web Speech API is supported
          if ('speechSynthesis' in window) {
            // Create a SpeechSynthesisUtterance object
            const speechMessage = new SpeechSynthesisUtterance();
            
            // Set the text to be spoken
            speechMessage.text = "Congratulations, Sir! Your registration is successful.";
            
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
       
          histrory.push("/login");
        }, 7000);
      }
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/2 h-full">
        <img
          src="https://img.freepik.com/free-photo/view-3d-boy-using-laptop_23-2150709886.jpg?size=626&ext=jpg&ga=GA1.1.25593491.1698475769&semt=sph"
          alt="Your Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center items-center p-8 bg-gray-100">
        <h2 class="text-center text-2xl font-bold tracking-wide text-gray-800">
          Sign Up
        </h2>
        {Alert && (
          <div class="font-regular relative block w-full rounded-lg bg-green-500 p-4 text-base leading-5 text-white">
            <div class="mr-12"> Ragistration successfully</div>
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
        <p class="text-center text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <a
            href="/login"
            class="text-blue-600 hover:text-blue-700 hover:underline"
            title="Sign In"
          >
            Sign in here
          </a>
        </p>

        <form className="w-full max-w-sm" onSubmit={handleFormSubmit}>
          <div className="mb-4 ">
            <label
              htmlFor="username"
              className="block text-sm font-medium font-serif text-gray-600"
            >
              Username
            </label>
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

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm  font-serif text-gray-900"
            >
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 font-serif font-bold rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ragister;
