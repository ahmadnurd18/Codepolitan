const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addJoke = async () => {
  const jokeText = await getJoke();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return `No jokes Available`;
  }
};

button.addEventListener("click", addJoke);
