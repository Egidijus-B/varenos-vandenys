import React from 'react';

const Administracija = () => {
  // Sample data for the administration contacts
  const contacts = [
    {
      title: 'CEO',
      name: 'John Doe',
      phone: '+123456789',
      email: 'johndoe@example.com',
    },
    {
      title: 'CFO',
      name: 'Jane Smith',
      phone: '+987654321',
      email: 'janesmith@example.com',
    },
    {
      title: 'HR Manager',
      name: 'Emily Johnson',
      phone: '+1122334455',
      email: 'emily.johnson@example.com',
    },
    // Add more contacts here
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Administracija</h2>

      {/* Mobile View - Stacked Layout */}
      <div className="block md:hidden">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4"
          >
            <div className="font-semibold text-gray-700">Position: {contact.title}</div>
            <div className="text-gray-600">Name: {contact.name}</div>
            <div className="text-gray-600">Phone: {contact.phone}</div>
            <div className="text-gray-600">Email: {contact.email}</div>
          </div>
        ))}
      </div>

      {/* Table View for Larger Screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Title</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Name</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Phone</th>
              <th className="text-left px-6 py-4 font-medium text-gray-700">Email</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-100 transition-colors duration-200`}
              >
                <td className="text-left px-6 py-4 text-gray-600">{contact.title}</td>
                <td className="text-left px-6 py-4 text-gray-600">{contact.name}</td>
                <td className="text-left px-6 py-4 text-gray-600">{contact.phone}</td>
                <td className="text-left px-6 py-4 text-gray-600">{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Administracija;



