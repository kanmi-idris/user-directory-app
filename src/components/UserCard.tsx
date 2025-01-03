import { Link } from 'react-router-dom';
import { User } from '../types/User';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="border border-gray-500 rounded-[1rem] p-4">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">@{user.username}</p>
      <p className="text-gray-500 mb-3">{user.company.name}</p>
      <Link
        to={`/user/${user.id}`}
        className="bg-slate-600 text-white px-4 py-2 rounded-[0.5rem] hover:bg-slate-700 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
