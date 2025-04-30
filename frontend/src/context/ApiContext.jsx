import { createContext, useContext } from 'react';

const ApiContext = createContext();

const APIProvider = ({ children }) => {
  const baseUrl = 'https://portfolio-backend-beta-jet.vercel.app/';

  return (
    <ApiContext.Provider value={{ baseUrl }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

export default APIProvider;
