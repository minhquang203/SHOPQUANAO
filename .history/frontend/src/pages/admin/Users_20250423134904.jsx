import React from 'react';

const Users = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Users Management</h1>
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Join Date</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* User rows will go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;