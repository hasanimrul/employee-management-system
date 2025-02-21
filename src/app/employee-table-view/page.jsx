"use client";

import EmployeeForm from "@/components/elements/form/EmployeeForm";
import React, { useState } from "react";

const Page = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Imrul Hasan",
      mobile: "+8801883883883",
      email: "imrul@example.com",
      address: "Block #b, Mirpur 1",
    },
    {
      id: 2,
      name: "John Doe",
      mobile: "+8801883883883",
      email: "john@example.com",
      address: "Block #b, Mirpur 1",
    },
    {
      id: 3,
      name: "Jane Smith",
      mobile: "+8801883883883",
      email: "jane@example.com",
      address: "Block #b, Mirpur 1",
    },
  ]);

  const handleEdit = (id) => {
    alert(`Editing employee with ID: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((employee) => employee.id !== id));
    }
  };

  return (
    <div className="p-5">
        <EmployeeForm />
      <h2 className="text-2xl font-bold mb-5">Employee Information</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="">
            <th className="border border-gray-300 p-2 text-left">SL.</th>
            <th className="border border-gray-300 p-2 text-left">Name</th>
            <th className="border border-gray-300 p-2 text-left">Mobile</th>
            <th className="border border-gray-300 p-2 text-left">Email</th>
            <th className="border border-gray-300 p-2 text-left">Address</th>
            <th className="border border-gray-300 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-gray-300 p-2">{employee.id}</td>
              <td className="border border-gray-300 p-2">{employee.name}</td>
              <td className="border border-gray-300 p-2">{employee.mobile}</td>
              <td className="border border-gray-300 p-2">{employee.email}</td>
              <td className="border border-gray-300 p-2">{employee.address}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600"
                  onClick={() => handleEdit(employee.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
