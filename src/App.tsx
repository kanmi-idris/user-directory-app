import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SWRConfig } from 'swr';
import HomePage from './components/HomePage';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <SWRConfig 
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        shouldRetryOnError: false,
        errorRetryCount: 1
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
