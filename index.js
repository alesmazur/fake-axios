// on async-await
const fakeAxios = async (uri) => {
  const serverResponsePromise = await fetch(uri);
  const parsedJsonObjectFromServerResponse = await serverResponsePromise.json();
  return parsedJsonObjectFromServerResponse;
};

export default fakeAxios;
