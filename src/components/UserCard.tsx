import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types/User';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">@{user.username}</p>
      <p className="text-gray-500 mb-3">{user.company.name}</p>
      <Link 
        to={`/user/${user.id}`} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
