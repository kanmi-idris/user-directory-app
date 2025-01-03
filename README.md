# User Directory App

## Overview
A React-based user management application that fetches and displays user data from the JSONPlaceholder API.

## Technologies Used
- React
- TypeScript
- Vite
- React Router
- SWR (Stale-While-Revalidate)
- Tailwind CSS

## Features
- Responsive user listing page
- Detailed user profile view
- Efficient data fetching and caching with SWR

## Setup and Installation
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` to start the development server

## Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build

## Project Structure
- `src/components/`: React components
- `src/services/`: API service functions
- `src/types/`: TypeScript type definitions

## API
Uses JSONPlaceholder API for user data:
- Endpoint: https://jsonplaceholder.typicode.com/users

## Performance
- Efficient data fetching with SWR
- Minimalistic, responsive design
- Cached API responses
