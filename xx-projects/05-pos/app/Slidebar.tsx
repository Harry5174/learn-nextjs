"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60 }}
      className="fixed left-0 top-0 h-full w-full sm:w-1/3 md:w-1/4 bg-gray-50 shadow-xl flex flex-col z-50"
    >
      {/* Top Section: Take Measurement */}
      <div
        className="p-4 border-b border-gray-300 hover:bg-gray-200 transition-colors duration-200 cursor-pointer w-full flex items-center"
        onClick={() => router.push("TakeMeasurement")}
      >
        <h2 className="text-sm font-semibold text-gray-800">Take Measurement</h2>
      </div>

      {/* Second Section: Pending Orders */}
      <div className="p-4 border-b border-gray-300 hover:bg-gray-200 transition-colors duration-200 cursor-pointer w-full flex items-center" onClick={() => router.push("PendingOrders")}>
        <h2 className="text-sm font-semibold text-gray-800">Pending Orders</h2>
      </div>

      {/* Third Section: Ready Product */}
      <div className="p-4 border-b border-gray-300 hover:bg-gray-200 transition-colors duration-200 cursor-pointer w-full flex items-center" onClick={() => router.push("ReadyProduct")}>
        <h2 className="text-sm font-semibold text-gray-800">Ready Product</h2>
      </div>

      {/* Fourth Section: Analytics and Report */}
      <div className="p-4 hover:bg-gray-200 transition-colors duration-200 cursor-pointer w-full flex items-center" onClick={() => router.push("AnalyticsAndReport")}>
        <h2 className="text-sm font-semibold text-gray-800">Analytics and Report</h2>
      </div>
    </motion.div>
  );
}
