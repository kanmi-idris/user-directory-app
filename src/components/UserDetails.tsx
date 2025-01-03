 import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetchUserById } from '../services/api';
import { User } from '../types/User';
import ErrorDisplay from './common/ErrorDisplay';
import Loader from './common/Loader';
import SectionHeader from './common/SectionHeader';
import DescriptionItem from './common/DescriptionItem';

const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, error } = useSWR<User>(`/users/${id}`, () => fetchUserById(Number(id)));

  if (error) {
    return <ErrorDisplay message="Failed to load user details. Please try again." />;
  }

  if (!user) {
    return <Loader />;
  }

  return (
    <main className="container mx-auto p-6">
      <article className="border border-gray-500 shadow-md rounded-[1rem] p-6 text-gray-100">
        <header>
          <h1 className="text-4xl font-semibold mb-6">{user.name}</h1>
        </header>
        
        <div className="grid md:grid-cols-2 gap-10">
          <section>
            <SectionHeader title="Personal Information" />
            <dl className="space-y-2">
              <DescriptionItem label="Username" value={user.username} />
              <DescriptionItem label="Email" value={user.email} />
              <DescriptionItem label="Phone" value={user.phone} />
              <DescriptionItem label="Website" value={user.website} />
            </dl>
          </section>
          
          <section>
            <SectionHeader title="Address" />
            <dl className="space-y-2">
              <DescriptionItem 
                label="Street" 
                value={`${user.address.suite}, ${user.address.street}`} 
              />
              <DescriptionItem label="City" value={user.address.city} />
              <DescriptionItem label="Postal Code" value={user.address.zipcode} />
              <DescriptionItem 
                label="Coordinates" 
                value={`${user.address.geo.lat}°N, ${user.address.geo.lng}°E`} 
              />
            </dl>
          </section>
          
          <section>
            <SectionHeader title="Company" />
            <dl className="space-y-2">
              <DescriptionItem label="Name" value={user.company.name} />
              <DescriptionItem label="Catchphrase" value={user.company.catchPhrase} />
              <DescriptionItem label="Business" value={user.company.bs} />
            </dl>
          </section>
        </div>
      </article>
    </main>
  );
};

export default UserDetails;
