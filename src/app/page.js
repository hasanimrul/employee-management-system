"use client"
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="lg:grid grid-cols-12 gap-5 w-full">
      <div className="col-span-3"> <Sidebar /></div>
      
    </div>
  );
}
