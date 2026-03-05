 'use client'
 import React from "react";

    export default function Demo(){
    return (
        <div className="fixed right-0 top-0 h-full w-1/4 bg-gray-100 shadow-lg flex flex-col">
            {/* Top Section: Take Measurement */}
            <div className="p-4 border-b border-gray-300">
                <h2 className="text-lg font-semibold">Take Measurement</h2>
                {/* Add content for taking measurements */}
            </div>

            {/* Second Section: Pending Orders */}
            <div className="p-4 border-b border-gray-300 flex-1 overflow-auto">
                <h2 className="text-lg font-semibold">Pending Orders</h2>
                {/* Add content for pending orders */}
            </div>

            {/* Third Section: Ready Product */}
            <div className="p-4 border-b border-gray-300 flex-1 overflow-auto">
                <h2 className="text-lg font-semibold">Ready Product</h2>
                {/* Add content for ready products */}
            </div>

            {/* Fourth Section: Analytics and Report */}
            <div className="p-4 flex-1 overflow-auto">
                <h2 className="text-lg font-semibold">Analytics and Report</h2>
                {/* Add content for analytics and reports */}
            </div>
        </div>
    );
};