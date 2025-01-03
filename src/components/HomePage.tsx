import useSWR from 'swr';
import { fetchUsers } from '../services/api';
import { User } from '../types/User';
import UserCard from './UserCard';

const HomePage = () => {
  const { data: users, error } = useSWR<User[]>('/users', fetchUsers);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Failed to load users. Please try again.
      </div>
    );
  }

  if (!users) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
