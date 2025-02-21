import React, { useState } from "react";

const EmployeeForm = ({ onAddEmployee }) => {
  const [employee, setEmployee] = useState({
    name: "",
    mobile: "",
    address: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employee.name || !employee.mobile || !employee.address || !employee.image) {
      alert("Please fill all fields!");
      return;
    }

    onAddEmployee(employee);
    setEmployee({ name: "", mobile: "", address: "", image: null });
    setPreview(null);
  };

  return (
    <div className="p-5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md  max-w-md mx-auto mb-10">
      <h2 className="text-2xl font-bold mb-4">Add Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <div>
          <label className="block text-gray-300 font-medium">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} className="mt-1 p-2 border border-dotted border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:dark:border-blue-500 outline-none w-full rounded" />
          {preview && <img src={preview} alt="Preview" className="mt-2 w-24 h-24 object-cover rounded-lg" />}
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-gray-300 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-dotted border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:dark:border-blue-500 outline-none  w-full rounded bg-transparent"
            placeholder="Enter name"
          />
        </div>

        {/* Mobile Input */}
        <div>
          <label className="block text-gray-300 font-medium">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={employee.mobile}
            onChange={handleChange}
            className="mt-1 p-2 border border-dotted border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:dark:border-blue-500 outline-none w-full rounded bg-transparent"
            placeholder="Enter mobile number"
          />
        </div>

        {/* Address Input */}
        <div>
          <label className="block text-gray-300 font-medium">Address</label>
          <textarea
            name="address"
            value={employee.address}
            onChange={handleChange}
            className="mt-1 p-2 border border-dotted border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:dark:border-blue-500 outline-none w-full rounded bg-transparent"
            placeholder="Enter address"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
