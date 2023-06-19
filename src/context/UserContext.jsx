import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usernames, setUsernames] = useState(['AndyKallian']);
  const [currentUser, setCurrentUser] = useState('');

  const addUser = (newUsername) => {
    setUsernames([...usernames, newUsername]);
  };

  const setCurrentUsername = (username) => {
    setCurrentUser(username);
  };

  return (
    <UserContext.Provider value={{ usernames, addUser, currentUser, setCurrentUsername }}>
      {children}
    </UserContext.Provider>
  );
};