export const getFamousSaying = () =>
  fetch('https://api.qwer.pw/request/helpful_text?apikey=guest').then((res) =>
    res.json()
  );
