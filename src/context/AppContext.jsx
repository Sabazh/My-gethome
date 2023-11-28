import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const loginHandler = (bool) => {
    setLoginVisible(bool);
  };
  const isLoggedInHandler = (boolean = true) => {
    setIsLoggedIn(boolean);
  };

  return (
    <AppContext.Provider
      value={{
        loginVisible,
        loginHandler,
        isLoggedIn,
        isLoggedInHandler,
        isMenuOpen,
        menuHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AppContextProvider;
