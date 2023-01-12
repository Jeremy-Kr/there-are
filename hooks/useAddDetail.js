import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase';

const useAddDetail = (userUid) => {
  const navigation = useNavigation();
  const [toBeTitle, setToBeTitle] = useState('');

  const addToBeList = async () => {
    if (toBeTitle.length > 5) {
      alert('최대 5글자 입력가능합니다!');
      setToBeTitle('');
    }

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
    navigation.reset({
      routes: [
        {
          name: 'Tabs',
          params: { screen: 'Main' },
        },
      ],
    });
  };

  return { handleAddClick, toBeTitle, setToBeTitle };
};

export default useAddDetail;
