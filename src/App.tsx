import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';
import HomePage from './components/HomePage';
import UserDetails from './components/UserDetails';
import { getInitialData } from './services/api';

const App = () => {
  return (
    <SWRConfig 
      value={{
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        shouldRetryOnError: true,
        errorRetryCount: 3,
        provider: () => new Map(),
        fallback: {
          '/users': getInitialData('users'),
        }
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </SWRConfig>
  );
};

export default App;
