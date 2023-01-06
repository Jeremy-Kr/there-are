import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import * as Progress from 'react-native-progress';
import styled from '@emotion/native';
import { CustomH3 } from '../components/Common/CustomText';
import * as Animatable from 'react-native-animatable';

const Detail = () => {
  // completed는 나중에 확언 리스트의 개수만큼 카운트수가 저장되도록 세팅
  const completed = 18;
  return (
    <SafeAreaView>
      <DetailKingView>
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
          <Text style={{ paddingTop: 15, fontSize: 20, fontWeight: '700' }}>
            {completed} / 31
          </Text>
          <Text
            style={{
              fontSize: 24,
              color: '#BC2649',
              marginTop: 5,
              fontWeight: '900',
            }}
          >
            성공까지 D-day {31 - completed}
          </Text>
        </TopStatusView>

        <DetailListScroll>
          <DetailListView>
            <Text
              style={{
                fontSize: 25,
                marginBottom: 10,
                fontWeight: '700',
                textDecorationLine: 'underline',
              }}
            >
              🏃 내 인생은 달라진다 🏃
            </Text>
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
          </DetailListView>
        </DetailListScroll>
      </DetailKingView>

      {/* 이 부분에 버튼 들어올거에유 */}
    </SafeAreaView>
  );
};

export default Detail;

const DetailKingView = styled.View``;

const TopStatusView = styled.View`
  width: 370px;
  height: 200px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 50;
  border-radius: 20px;
`;

const DetailListScroll = styled.ScrollView``;
const DetailListView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const DetailListText = styled(CustomH3)`
  margin: 10px;
`;
