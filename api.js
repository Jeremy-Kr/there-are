export const getFamousSaying = async () =>
  await fetch('https://api.qwer.pw/request/helpful_text?apikey=guest').then(
    (res) => res.json()
  );
