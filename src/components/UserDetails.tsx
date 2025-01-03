import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetchUserById } from '../services/api';
import { User } from '../types/User';

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, error } = useSWR<User>(`/users/${id}`, () => fetchUserById(Number(id)));

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Failed to load user details. Please try again.
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p>{user.address.street}, {user.address.suite}</p>
            <p>{user.address.city}, {user.address.zipcode}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Company</h2>
            <p><strong>Name:</strong> {user.company.name}</p>
            <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>Business:</strong> {user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
