import React, { useState } from "react";
import axios from "axios"; 

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false); 
  const [apiError, setApiError] = useState(""); 

  const validate = () => {
    let tempErrors = {};

    if (!employee.name.trim()) tempErrors.name = "Name is required";
    if (!employee.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)) {
      tempErrors.email = "Enter a valid email address";
    }
    if (!employee.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(employee.mobile)) {
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!employee.address.trim()) tempErrors.address = "Address is required";
    if (!employee.image) tempErrors.image = "Image is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({ ...prev, image: "Only image files are allowed" }));
        return;
      }
      setEmployee((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Create FormData 
    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("email", employee.email);
    formData.append("mobile", employee.mobile);
    formData.append("address", employee.address);
    formData.append("image", employee.image);

    setIsLoading(true);
    setApiError(""); 
    try {
      // Send POST request to your API endpoint
      const response = await axios.post("/api/employees", formData, {
        headers: {
          "Content-Type": 'application/json', 
        },
        body: JSON.stringify(formData),
      });
      
      // Handle successful response
      console.log("Employee added successfully", response.data);
      // onAddEmployee(response.data); 
      setEmployee({ name: "", email: "", mobile: "", address: "", image: null });
      setPreview(null);
      setErrors({});
    } catch (error) {
      // Handle errors from the API
      console.error("Error adding employee", error);
      setApiError("An error occurred while adding the employee. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md max-w-md mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-4">Add Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <div>
          <label className="block text-gray-300 font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:dark:border-blue-500 outline-none w-full rounded"
          />
          {preview && <img src={preview} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded-lg" />}
          {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-gray-300 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:dark:border-blue-500 outline-none w-full rounded bg-transparent"
            placeholder="Enter name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-300 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:dark:border-blue-500 outline-none w-full rounded bg-transparent"
            placeholder="Enter email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Mobile Input */}
        <div>
          <label className="block text-gray-300 font-medium">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={employee.mobile}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:dark:border-blue-500 outline-none w-full rounded bg-transparent"
            placeholder="Enter mobile number"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>

        {/* Address Input */}
        <div>
          <label className="block text-gray-300 font-medium">Address</label>
          <textarea
            name="address"
            value={employee.address}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:dark:border-blue-500 outline-none w-full rounded bg-transparent"
            placeholder="Enter address"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isLoading}  // Disable button while loading
        >
          {isLoading ? "Adding..." : "Add Employee"}
        </button>

        {/* API Error Message */}
        {apiError && <p className="text-red-500 text-sm">{apiError}</p>}
      </form>
    </div>
  );
};

export default EmployeeForm;
