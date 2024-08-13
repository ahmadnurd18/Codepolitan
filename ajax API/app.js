// const x = document.getElementById("demo");
// function getLocation() {
//   try {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } catch {
//     x.innerHTML = err;
//   }
// }

// function showPosition(Position) {
//   x.innerHTML =
//     "Latitude: " +
//     Position.coords.latitude +
//     "<br> Longitude: " +
//     Position.coords.longitude;
// }

// const data = `{
//   "ticker":{
//     "base":"btc",
//     "target":"IDR",
//     "price": "345001000.0000000",
//     "volume": "28.3210307",
//     "change": "-43501414"
//   },
//   "timestamp": 1514315351,
//   "success":true,
//   "error": ""
// }`;
//JSON.parse(data) digunakan untuk merubah format js ke json

// const person = {
//   nama: "Ahmad",
//   tanggal_lhr: "2003-01-18",
//   Alamat: "Bogor",
// };
//JSON.stringify(person) digunakan untuk merubah object ke json

//request menggunakan xmlhttprequest = cara lama.
// const req = new XMLHttpRequest();
// let data;

// req.onload = function () {
//   data = JSON.parse(this.responseText);
//   console.log(data);
// };

// req.onerror = function () {
//   console.log("Erorr", this);
// };

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

// const charstarw = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1");
//     const data = await res.json();
//     console.log(data);
//     const res2 = await fetch("https://swapi.dev/api/people/2");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (err) {
//     alert("Erorr", err);
//   }
// };

// charstarw();

// axios
//   .get("https://swapi.dev/api/people890/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//     alert(err.message);
//   });

const getPeople = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.response.status);
    console.log(error.response.data);
  }
};
