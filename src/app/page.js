"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <div className="col-span-9">
        <h1 className="text-2xl font-bold">Go to - </h1>
        <div className="flex gap-5 py-10">

        <Link
          className="border border-gray-700 p-2 rounded"
          href="/employee-table-view"
        >
          Table View
        </Link>
        <Link
          className="border border-gray-700 p-2 rounded"
          href="/employee-card-view"
        >
          Card View
        </Link>
        </div>
      </div>
    </div>
  );
}
