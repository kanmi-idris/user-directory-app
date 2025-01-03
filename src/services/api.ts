import { User } from '../types/User';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`${BASE_URL}/users`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return response.json();
};

export const fetchUserById = async (id: number): Promise<User> => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch user with id ${id}`);
  }
  
  return response.json();
};
