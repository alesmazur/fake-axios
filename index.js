const fakeAxios = (uri) =>
  new Promise((resolve, reject) =>
    fetch(uri)
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  );

fakeAxios("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
