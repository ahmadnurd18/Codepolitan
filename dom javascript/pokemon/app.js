//https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/500.png

const container = document.querySelector("#container"); //simpan data section menggunakan id container ke dalam nilai container
const baseImgUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; //simpan url/sumber gambar ke dalam nilai baseImg

for (let i = 1; i <= 500; i++) {
  //lakukan perulangan mulai dari 1 yang akan terus bertambah berulang-ulang sampai nilai 500
  const pokeBall = document.createElement("div"); //buat sebuah nilai(pokeBall) yang menambahkan suatu elemen .div
  pokeBall.classList.add("pokemon"); //tambahkan class div menjadi .pokemon

  const imgPokemon = document.createElement("img"); //buat sebuah nilai(imgPokemon) yang menambahkan suatu elemen img
  imgPokemon.src = `${baseImgUrl}${i}.png`; //isilah atribut src yang berisi url/sumber(baseImgUrl) gambar yang berulang sampai nilai yang ditentukan(i) gunakan .png untuk membaca format gambar yang akan ditampikan

  const label = document.createElement("span");
  label.innerText = `#${i}`;

  pokeBall.appendChild(imgPokemon); //panggil gambar yang sudah disimpan nilainya ke dalam element div
  pokeBall.appendChild(label); //memanggil label ke dalam div
  container.appendChild(pokeBall); //panggil div ke dalam .container
}
