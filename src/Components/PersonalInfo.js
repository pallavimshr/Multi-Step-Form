import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";

const PersonalInfo = () => {
  const { formData, handleFormDataChange } = useOutletContext();
  const navigate = useNavigate();

  const [localFormData, setLocalFormData] = useState(formData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLocalFormData({ ...localFormData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!localFormData.name) {
      newErrors.name = "Name is required.";
    }

    // Email validation
    if (!localFormData.email) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(localFormData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    // Phone number validation
    if (!localFormData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(localFormData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleFormDataChange(localFormData);
      navigate("/plans");
    }
  };

  return (
    <div className="w-full h-full bg-white relative flex flex-col">
      <div className="mx-8 mt-8">
        <h1 className="text-4xl font-bold text-gray-900">Personal info</h1>
        <p className="text-lg text-gray-400 mt-2">
          Please provide your name, email address, and phone number.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 mr-4">
          <div className="mb-8">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={localFormData.name}
              onChange={handleChange}
              placeholder="e.g. Stephen King"
              className={`w-full px-3 py-2 border rounded-md shadow-sm ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="mb-8">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={localFormData.email}
              onChange={handleChange}
              placeholder="e.g. stephenking@lorem.com"
              className={`w-full px-3 py-2 border rounded-md shadow-sm ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500`}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-8">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={localFormData.phone}
              onChange={handleChange}
              placeholder="e.g. 1234567890"
              className={`w-full px-3 py-2 border rounded-md shadow-sm ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500`}
            
              required
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div className="absolute bottom-12 right-8">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
