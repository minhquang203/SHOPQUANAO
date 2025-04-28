import React from 'react';

const Orders = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Orders Management</h1>
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Customer</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Order rows will go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;