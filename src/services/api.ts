import { User } from '../types/User';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getFromCache = (key: string) => {
  try {
    const cached = localStorage.getItem(key);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
};

const setToCache = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error caching data:', error);
  }
};

export const getInitialData = (key: string) => {
  return getFromCache(key);
};

export const fetchUsers = async (): Promise<User[]> => {
  const cachedData = getFromCache('users');
  
  try {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const freshData = await response.json();
    setToCache('users', freshData);

    return freshData;

  } catch (error) {

    if (cachedData) {
      console.log('falling back to cache')
      return cachedData;
    }

    throw error;
  }
};

export const fetchUserById = async (id: number): Promise<User> => {
  const cachedData = getFromCache(`user-${id}`);
  
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch user with id ${id}`);
    }

    const freshData = await response.json();
    setToCache(`user-${id}`, freshData);

    return freshData;

  } catch (error) {
    
    if (cachedData) {
      console.log('falling back to cache')
      return cachedData;
    }

    throw error;
  }
};
