import { useState } from 'react';
import { useQuery } from 'react-query';
import { getFamousSaying } from '../api';

const useSayingQuery = () => {
  const [saying, setSaying] = useState('');
  const [sayingSpeaker, setSayingSpeaker] = useState('');

  const { isLoading } = useQuery(['getFamousSaying'], getFamousSaying, {
    onSuccess: (data) => {
      const sayingData = data[1]?.['respond'];

      if (sayingData.includes('-')) {
        setSaying(sayingData.split('-')[0]);
        setSayingSpeaker(sayingData.split('-')[1]);
      } else if (sayingData.includes('–')) {
        setSaying(sayingData.split('–')[0]);
        setSayingSpeaker(sayingData.split('–')[1]);
      }
    },
    onError: (e) => {
      console.log(e.message);
    },
  });

  return { saying, sayingSpeaker, isLoading };
};

export default useSayingQuery;
