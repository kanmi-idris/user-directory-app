import useSWR from 'swr';
import { fetchUsers } from '../services/api';
import { User } from '../types/User';
import UserCard from './UserCard';
import ErrorDisplay from './common/ErrorDisplay';
import Loader from './common/Loader';

const HomePage = () => {
  const { data: users, error } = useSWR<User[]>('/users', fetchUsers);

  if (error) {
    return <ErrorDisplay message="Failed to load users. Please try again." />;
  }

  if (!users) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">User Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
