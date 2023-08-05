const fakeAxios = (uri) =>
  new Promise((resolve, reject) =>
    fetch(uri)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  );

export default fakeAxios;
