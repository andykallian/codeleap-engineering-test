import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usernames, setUsernames] = useState(['Admin']);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const addUser = (newUsername) => {
    setUsernames([...usernames, newUsername]);
  };

  const setCurrentUsername = (username) => {
    setCurrentUser(username);
    localStorage.setItem('currentUser', username);
  };

  return (
    <UserContext.Provider value={{ usernames, addUser, currentUser, setCurrentUsername }}>
      {children}
    </UserContext.Provider>
  );
};