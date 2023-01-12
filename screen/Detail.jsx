import React, { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';
import styled from '@emotion/native';
import { CustomH2, CustomH3 } from '../components/Common/CustomText';
import * as Animatable from 'react-native-animatable';
import CustomButton from '../components/Common/CustomButton';
import { TouchableOpacity } from 'react-native';
import { onSnapshot, query, doc } from 'firebase/firestore';
import { db } from '../firebase';

const Detail = ({
  navigation: { navigate, goBack },
  route: {
    params: { id },
  },
}) => {
  // completed는 나중에 확언 리스트의 개수만큼 카운트수가 저장되도록 세팅
  const [toBeDetail, setToBeDetail] = useState({});
  const [completed, setCompleted] = useState(0);
  const [writtenDates, setWrittenDates] = useState();
  const [isIncludeDate, setIsIncludeDate] = useState(false);

  const getToBeDetail = () => {
    const q = query(doc(db, 'to-be-list', id));
    onSnapshot(q, (snapshot) => {
      const newToBeDetail = {
        id: snapshot.id,
        ...snapshot.data(),
      };
      setToBeDetail(newToBeDetail);
      setCompleted(newToBeDetail?.writtenDate.length);
      const newWrittenDates = [];
      newToBeDetail?.writtenDate.forEach((date) => {
        const toBeDate = new Date(date);
        const newToBeDate = toBeDate.toLocaleDateString();
        newWrittenDates.push(newToBeDate);
      });
      setWrittenDates(newWrittenDates);
    });
  };

  useEffect(() => {
    getToBeDetail();
  }, []);

  const todayMilliSecond = new Date();
  const today = todayMilliSecond.toLocaleDateString();

  useEffect(() => {
    writtenDates?.includes(today)
      ? setIsIncludeDate(true)
      : setIsIncludeDate(false);
  }, [writtenDates]);

  const handleAddClick = () => {
    navigate('Stacks', {
      screen: 'AddToBe',
      params: { toBeDetail },
    });
  };

  const DDay = 31 - completed;

  return (
    <DetailContainer>
      <BackButtonContainer onPress={goBack}>
        <CustomButton fontSize="14px" width="80px" height="34px">
          뒤로가기
        </CustomButton>
      </BackButtonContainer>
      <TopStatusView>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount={'infinite'}
          direction="alternate"
        >
          <Progress.Bar
            progress={completed / 31}
            width={330}
            height={30}
            color={'#BC2649'}
            borderRadius={300}
          />
        </Animatable.View>
        <DayCounter>{completed} / 31</DayCounter>
        <DDayTitle>
          {DDay < 1 ? '🎊 목표 달성! 🎊' : `성공까지 D-day ${DDay}`}
        </DDayTitle>
      </TopStatusView>

      <DetailListScroll>
        <ItemTitle>🏃 내 인생은 달라진다 🏃</ItemTitle>
        {toBeDetail?.writtenDate?.map((item) => {
          const toBeDate = new Date(item);
          const newToBeDate = toBeDate
            .toLocaleDateString()
            .slice(2)
            .replace(/ /g, '');
          return (
            <DetailListText key={item.id}>
              {newToBeDate} 나는 {toBeDetail.toBeTitle}다.
            </DetailListText>
          );
        })}
      </DetailListScroll>

      <TouchableOpacity onPress={handleAddClick} disabled={isIncludeDate}>
        <CustomButton disable={isIncludeDate}>추가하기</CustomButton>
      </TouchableOpacity>
    </DetailContainer>
  );
};

export default Detail;

const BackButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding-left: 30px;
`;

const DetailContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TopStatusView = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const DetailListScroll = styled.ScrollView`
  margin-top: 15px;
`;

const DetailListText = styled(CustomH3)`
  margin: 10px;
`;

const DayCounter = styled(CustomH3)`
  padding-top: 15px;
  font-weight: 700;
`;

const DDayTitle = styled(CustomH2)`
  color: ${(props) => props.theme.color.brand100};
  margin-top: 5px;
  font-weight: 900;
`;

const ItemTitle = styled(CustomH2)`
  margin-bottom: 10px;
  font-weight: 700;
  text-decoration: underline;
`;
