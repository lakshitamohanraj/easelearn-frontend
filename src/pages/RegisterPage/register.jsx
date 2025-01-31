import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser,register } from '../../Redux/Auth/Action';
const RegisterPage = () => {
  // State hooks to store user inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role : ''
  });
  const dispatch=useDispatch();
  const { auth } = useSelector((store) => store);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.auth.role);

  const jwt=localStorage.getItem("jwt");

  useEffect(()=>{

   
    if(jwt){
      dispatch(getUser(jwt))
    }

  },[jwt]);

  useEffect(() => {
    if(role){
    if (role === "student") {
      navigate("/student-dashboard");
    } 
    else {
      navigate("/teacher-dashboard");
    }
  }
  }, [role]);
  


  const handleInputChange = (event) => {
    const { name, value } = event.target; // Extract the name and value from the event target
    setFormData({
      ...formData, // Retain existing form data
      [name]: value, // Update the field dynamically based on its name
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const userData={
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      role : data.get("role")
      
    }
    console.log("user data",userData);
    dispatch(register(userData))
   
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center bg-white-50">
        <div className="w-full w-[600px] rounded-lg bg-[#CE4040] p-8 shadow-lg">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-white">
              Create your account
            </h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full w-[450px] bg-gray-100 p-6 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">

            <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-900">
                  Role
                </label>
                <div className="mt-2">
                  <input
                    id="role"
                    name="role"
                    type="text"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    className="block w-full rounded-md bg-[#F4D0D0] px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-white"
                  />
                </div>
              </div>


              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    className="block w-full rounded-md bg-[#F4D0D0] px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-white"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-[#F4D0D0] px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md bg-[#F4D0D0] px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-white"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">
                  Confirm Password
                </label>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    autoComplete="new-password"
                    className="block w-full rounded-md bg-[#F4D0D0] px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-white"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex w-3/4 justify-center rounded-md bg-[#CE4040] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-indigo-600"
                  >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;