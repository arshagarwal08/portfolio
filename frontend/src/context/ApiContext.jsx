import { createContext, useContext } from 'react';

const ApiContext = createContext();

const APIProvider = ({ children }) => {
  const baseUrl = 'http://localhost:4000';

  return (
    <ApiContext.Provider value={{ baseUrl }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);

export default APIProvider;
