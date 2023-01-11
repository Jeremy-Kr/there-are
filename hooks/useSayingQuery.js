import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { getFamousSaying } from '../api';

const useSayingQuery = () => {
  const [saying, setSaying] = useState('');
  const [sayingSpeaker, setSayingSpeaker] = useState('');

  const queryClient = useQueryClient();

  const reFetchSaying = async () => {
    await queryClient.refetchQueries('getFamousSaying');
  };

  const { isLoading } = useQuery(['getFamousSaying'], getFamousSaying, {
    onSuccess: (data) => {
      const sayingData = data[1]?.['respond'];
      if (!sayingData.includes('-')) {
        reFetchSaying();
      }
      setSaying(sayingData.split('-')[0]);
      setSayingSpeaker(sayingData.split('-')[1]);
    },
    onError: (e) => {
      console.log(e.message);
    },
  });

  return { saying, sayingSpeaker, isLoading };
};

export default useSayingQuery;
