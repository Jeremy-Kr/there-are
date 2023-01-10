import styled from '@emotion/native';
import React, { useEffect, useState } from 'react';
import CustomButton from '../components/Common/CustomButton';
import { CustomH1 } from '../components/Common/CustomText';
import { getAuth } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Main = ({ navigation: { navigate } }) => {
  const auth = getAuth();
  const [userName, setUserName] = useState('');
  const [tobelist, setTobelist] = useState([]);

  useEffect(() => {
    const user = auth?.currentUser;
    setUserName(user?.displayName);
  }, []);

  const getlist = async () => {
    const q = query(
      collection(db, 'Tobelist'),
      where('userId', '==', auth?.currentUser.email)
    );
    const querySnapshot = await getDocs(q);
    const newTobelist = [];
    querySnapshot.forEach((doc) => {
      const newItem = {
        id: doc.id,
        ...doc.data(),
      };
      newTobelist.push(newItem);
    });
    setTobelist(newTobelist);
  };

  useEffect(() => {
    getlist();
  }, []);

  return (
    <MainContainer>
      <ListedContainer>
        <ListedText>
          {tobelist.map((tobe) => {
            return tobe.tobetitle;
          })}
        </ListedText>
      </ListedContainer>
      <ButtonContainer>
        <CustomButton>추가하기</CustomButton>
      </ButtonContainer>
    </MainContainer>
  );
};

const MainContainer = styled.SafeAreaView`
  justify-content: center;
`;

const ListedContainer = styled.View`
  align-items: center;
  margin-top: 250px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 150px;
`;

const ListedText = styled(CustomH1)`
  line-height: 44px;
  margin: 7px;
`;

export default Main;
