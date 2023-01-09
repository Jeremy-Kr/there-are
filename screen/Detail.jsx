import React from 'react';
import * as Progress from 'react-native-progress';
import styled from '@emotion/native';
import { CustomH2, CustomH3 } from '../components/Common/CustomText';
import * as Animatable from 'react-native-animatable';

const Detail = () => {
  // completed는 나중에 확언 리스트의 개수만큼 카운트수가 저장되도록 세팅
  const completed = 18;
  return (
    <DetailContainer>
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
        <DDayTitle>성공까지 D-day {31 - completed}</DDayTitle>
      </TopStatusView>

      <DetailListScroll>
        <ItemTitle>🏃 내 인생은 달라진다 🏃</ItemTitle>
        <DetailListText>
          {/* createdAt랑 toBeTitle 두개 백틱으로 들어오기*/}
          22.01.05 나는 이순신이다.
        </DetailListText>
        <DetailListText>
          {/* createdAt랑 toBeTitle 두개 백틱으로 들어오기*/}
          22.01.06 나는 이순신이다.
        </DetailListText>
        <DetailListText>
          {/* createdAt랑 toBeTitle 두개 백틱으로 들어오기*/}
          22.01.06 나는 이순신이다.
        </DetailListText>
        <DetailListText>
          {/* createdAt랑 toBeTitle 두개 백틱으로 들어오기*/}
          22.01.06 나는 이순신이다.
        </DetailListText>
        <DetailListText>
          {/* createdAt랑 toBeTitle 두개 백틱으로 들어오기*/}
          22.01.06 나는 이순신이다.
        </DetailListText>
        <DetailListText>
          {/* createdAt랑 toBeTitle 두개 백틱으로 들어오기*/}
          22.01.06 나는 이순신이다.
        </DetailListText>
        <DetailListText>
          {/* createdAt랑 toBeTitle 두개 백틱으로 들어오기*/}
          22.01.06 나는 이순신이다.
        </DetailListText>
        <DetailListText>
          {/* createdAt랑 toBeTitle 두개 백틱으로 들어오기*/}
          22.01.06 나는 이순신이다.
        </DetailListText>
        <DetailListText>
          {/* createdAt랑 toBeTitle 두개 백틱으로 들어오기*/}
          22.01.06 나는 이순신이다.
        </DetailListText>
      </DetailListScroll>

      {/* 이 부분에 버튼 들어올거에유 */}
    </DetailContainer>
  );
};

export default Detail;

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
