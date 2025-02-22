"use client";
import EmployeeCard from "@/components/elements/cards/EmployeeCard";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
  
     useEffect(() => {
        const fetchEmployees = async () => {
          const response = await fetch("/api/employees");
          const data = await response.json();
          setEmployees(data);
          setLoading(false);
        };
        fetchEmployees();
      }, []);
  
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Employee Information</h2>
      <div className="flex flex-wrap  gap-5 items-center justify-center w-full ">
        <EmployeeCard employees={employees}/>
      </div>
    </div>
  );
};

export default Page;
