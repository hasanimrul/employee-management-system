"use client";
import EmployeeCard from "@/components/elements/cards/EmployeeCard";
import React from "react";

const Page = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Employee Information</h2>
      <div className="flex flex-wrap  gap-5 items-center justify-center w-full ">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
};

export default Page;
