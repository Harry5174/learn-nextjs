'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Order {
    id: number;
    customerName: string;
    totalAmount: number;
    status: string;
}

const PendingOrdersPage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [confirmationMessage, setConfirmationMessage] = useState<string>("");

    useEffect(() => {
        const fetchOrders = async () => {
            const mockOrders: Order[] = [
                { id: 1, customerName: 'John Doe', totalAmount: 120.5, status: 'Pending' },
                { id: 2, customerName: 'Jane Smith', totalAmount: 75.0, status: 'Pending' },
                { id: 3, customerName: 'Alice Johnson', totalAmount: 200.0, status: 'Pending' },
            ];
            setOrders(mockOrders);
        };

        fetchOrders();
    }, []);

    const handleOrderClick = (orderId: number) => {
        const order = orders.find((o) => o.id === orderId) || null;
        setSelectedOrder(order);
        setConfirmationMessage("");
    };

    const handleMarkAsDone = () => {
        if (selectedOrder) {
            const updatedOrders = orders.filter(order => order.id !== selectedOrder.id);
            setOrders(updatedOrders);
            setConfirmationMessage("✅ Product is ready!");
            setSelectedOrder(null);
        }
    };

    return (
        <div className="p-6 sm:p-10 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Pending Orders</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white shadow-md rounded-xl p-4 border"
                >
                    <h2 className="text-lg font-semibold text-gray-700 mb-3">Orders List</h2>
                    <ul className="space-y-2">
                        {orders.map((order) => (
                            <li
                                key={order.id}
                                className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer transition"
                                onClick={() => handleOrderClick(order.id)}
                            >
                                <span className="font-medium">Order #{order.id}</span> - {order.customerName} (${order.totalAmount})
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {selectedOrder && (
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white shadow-md rounded-xl p-4 border"
                    >
                        <h2 className="text-lg font-semibold text-gray-700 mb-3">Order Details</h2>
                        <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                        <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
                        <p><strong>Total Amount:</strong> ${selectedOrder.totalAmount}</p>
                        <p><strong>Status:</strong> {selectedOrder.status}</p>
                        <button
                            onClick={handleMarkAsDone}
                            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                        >
                            Done
                        </button>
                    </motion.div>
                )}
            </div>
            {confirmationMessage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 text-green-700 text-center font-semibold"
                >
                    {confirmationMessage}
                </motion.div>
            )}
        </div>
    );
};

export default PendingOrdersPage;
