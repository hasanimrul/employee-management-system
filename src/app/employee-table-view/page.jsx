"use client";

import EmployeeForm from "@/components/elements/form/EmployeeForm";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editRowId, setEditRowId] = useState(null); // Track which row is being edited
  const [editedData, setEditedData] = useState({}); // Store edited values

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch("/api/employees");
      const data = await response.json();
      setEmployees(data);
      setLoading(false);
    };
    fetchEmployees();
  }, []);

  // Handle change in input fields
  const handleInputChange = (e, field, id) => {
    setEditedData({ ...editedData, [field]: e.target.value });
  };

  // Save updated employee data
  const handleSave = async (id) => {
    const updatedEmployee = employees.find(emp => emp._id === id);

    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...updatedEmployee, ...editedData }),
      });

      if (response.ok) {
        setEmployees((prevEmployees) =>
          prevEmployees.map(emp => (emp._id === id ? { ...emp, ...editedData } : emp))
        );
        setEditRowId(null); // Exit edit mode
      } else {
        console.error("Error updating employee:", await response.json());
      }
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  // Delete employee
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this employee?");
    
    if (!isConfirmed) return; // If user cancels, do nothing
  
    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        setEmployees((prevEmployees) => prevEmployees.filter((emp) => emp._id !== id));
      } else {
        console.error("Error deleting employee:", await response.json());
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };
  

  return (
    <div className="p-5">
      <EmployeeForm />
      <h2 className="text-2xl font-bold mb-5">Employee Information</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Image</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Mobile</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Address</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td className="border border-gray-300 p-2">
                <img
                  src={employee.image || "https://via.placeholder.com/50"}
                  alt={employee.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </td>
              <td className="border border-gray-300 p-2">
                {editRowId === employee._id ? (
                  <input
                    type="text"
                    defaultValue={employee.name}
                    onChange={(e) => handleInputChange(e, "name", employee._id)}
                    className="border p-1 bg-transparent"
                  />
                ) : (
                  employee.name
                )}
              </td>
              <td className="border border-gray-300 p-2">
                {editRowId === employee._id ? (
                  <input
                    type="text"
                    defaultValue={employee.mobile}
                    onChange={(e) => handleInputChange(e, "mobile", employee._id)}
                    className="border p-1 bg-transparent"
                  />
                ) : (
                  employee.mobile
                )}
              </td>
              <td className="border border-gray-300 p-2">
                {editRowId === employee._id ? (
                  <input
                    type="text"
                    defaultValue={employee.email}
                    onChange={(e) => handleInputChange(e, "email", employee._id)}
                    className="border p-1 bg-transparent"
                  />
                ) : (
                  employee.email
                )}
              </td>
              <td className="border border-gray-300 p-2">
                {editRowId === employee._id ? (
                  <input
                    type="text"
                    defaultValue={employee.address}
                    onChange={(e) => handleInputChange(e, "address", employee._id)}
                    className="border p-1 bg-transparent"
                  />
                ) : (
                  employee.address
                )}
              </td>
              <td className="border border-gray-300 p-2">
                {editRowId === employee._id ? (
                  <>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                      onClick={() => handleSave(employee._id)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                      onClick={() => setEditRowId(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                      onClick={() => setEditRowId(employee._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(employee._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
