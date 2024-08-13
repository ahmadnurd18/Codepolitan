const hello = async () => {
  //   throw "Maaf ga kenal";

  return "hello world";
};

hello()
  .then((res) => {
    console.log("response", res);
  })
  .catch((err) => {
    console.log("error", err);
  });
