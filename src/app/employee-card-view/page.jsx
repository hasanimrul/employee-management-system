"use client";
import EmployeeCard from "@/components/elements/cards/EmployeeCard";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-wrap  gap-5 items-center justify-center w-full p-5">
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
    </div>
  );
};

export default Page;
