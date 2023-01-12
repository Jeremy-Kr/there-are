import { getAuth } from 'firebase/auth';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const useGetToBeList = () => {
  const auth = getAuth();
  const [userName, setUserName] = useState('');
  const [userUid, setUserUid] = useState('');
  const [toBeList, setToBeList] = useState([]);
  const [toBeLength, setToBeLength] = useState(0);

  useEffect(() => {
    const user = auth?.currentUser;
    setUserName(user?.displayName);
    setUserUid(user?.uid);
  }, []);

  const getToBeList = async () => {
    const q = query(
      collection(db, 'to-be-list'),
      where('userUid', '==', userUid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newToBeList = [];
      querySnapshot.forEach((doc) => {
        const newItem = {
          id: doc.id,
          ...doc.data(),
        };
        newToBeList.push(newItem);
      });

      setToBeList(newToBeList);
      setToBeLength(newToBeList.length);
    });
  };

  useEffect(() => {
    const q = query(
      collection(db, 'to-be-list'),
      where('userUid', '==', userUid)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newToBeList = [];
      querySnapshot.forEach((doc) => {
        const newItem = {
          id: doc.id,
          ...doc.data(),
        };
        newToBeList.push(newItem);
      });

      setToBeList(newToBeList);
    });

    return unsubscribe();
  }, []);

  if (toBeList.length === 0) {
    getToBeList();
  }

  return { toBeList, userName, userUid, toBeLength };
};

export default useGetToBeList;
