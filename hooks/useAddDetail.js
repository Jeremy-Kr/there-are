import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase';

const useAddDetail = (userUid) => {
  const navigation = useNavigation();
  const [toBeTitle, setToBeTitle] = useState('');

  const addToBeList = async () => {
    const newToBeList = {
      toBeTitle,
      createdAt: Date.now(),
      userUid,
      writtenDate: [],
    };
    await addDoc(collection(db, 'to-be-list'), newToBeList);
  };

  const handleAddClick = async () => {
    await addToBeList();
    navigation.navigate('Tabs', { screen: 'Main' });
  };

  return { handleAddClick, toBeTitle, setToBeTitle };
};

export default useAddDetail;
