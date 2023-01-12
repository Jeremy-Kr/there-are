import React from 'react';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import useGetToBeList from '../hooks/useGetToBeList';
import { useFocusEffect } from '@react-navigation/native';

const useCountDDay = () => {
  const auth = getAuth();
  const { toBeLength } = useGetToBeList();
  const [user, setUser] = useState({});
  const [userCreatedDay, setUserCreatedDay] = useState();

  const getUserCreatedDay = async () => {
    const userCreatedAt = await JSON.parse(JSON.stringify(user)).createdAt;
    const newUserCreatedAt = new Date(+userCreatedAt);
    const nowDate = new Date();
    const distance = +nowDate.getTime() - newUserCreatedAt.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    setUserCreatedDay(+day + 1);
  };
  useFocusEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
      getUserCreatedDay();
    }
  });
  return { toBeLength, userCreatedDay };
};

export default useCountDDay;
