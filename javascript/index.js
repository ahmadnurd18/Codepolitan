// const jawaban = prompt("masukan nama kamu");
// console.log(jawaban);
// let nama = "ahmad";
// let umur = 18;
// alert(`nama kamu adalah ${nama} dan umur kamu adalah ${umur}`);
// const iniHari = "sabtu";
// if (iniHari === "senin") {
//   console.log("semangat yaaa");
// } else if (iniHari === "sabtu") {
//   console.log("tetap teguh");
// }

// const nilai = "70";

// if (nilai < 50) {
//   console.log("E");
// } else if (nilai < 60) {
//   console.log("D");
// } else if (nilai <= 70) {
//   console.log("C");
// } else if (nilai < 80) {
//   console.log("B");
// } else if (nilai < 90) {
//   console.log("A");
// } else if (nilai < 100) {
//   console.log("SSS");
// }

// const password = prompt("Buat password");

// // if (password.length >= 6) {
// //   if (password.indexOf(" ") === -1) {
// //     console.log("password valid");
// //   } else {
// //     console.log("password tidak boleh ada spasi");
// //   }
// // } else {
// //   console.log("password minimal 6 karakter");
// // }

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password Valid");
// } else {
//   console.log("Password tidak memenuhi syarat");
// }

// const role = prompt("masukan role kamu").toLowerCase();

// if (role === "admin" || role === "bos") {
//   console.log("Kamu sesuai dibidang kamu!");
// } else {
//   console.log("kamu gasesuai bidang kamu");
// }

// let suka = prompt("Apa kah kamu suka sama aku");

// if (suka != "yes") {
//   console.log("aku tidak suka");
// } else {
//   console.log("makasih");
// }

// const day = 4;
// switch (day) {
//   case 1:
//     console.log("Minggu");
//     break;
//   case 2:
//     console.log("Senin");
//     break;
//   case 3:
//     console.log("Selasa");
//     break;
//   case 4:
//     console.log("Rabu");
//     break;
//   case 5:
// //     console.log("Kamis");
// //     break;
// //   case 6:
// //     console.log("Jumat");
// //     break;
// //   default:
// //     console.log("apa aweh");
// // }

// const board = [
//   [null, null, "0"],
//   ["x", "0", null],
//   ["0", null, "x"],
// ];

// const DataMahasiswa = [
//   (s2k = { Nama: "Ahmad", Npm: 202243501812, Umur: 18 }),
//   {},
// ];
// for (let i = 100; i >= 50; i -= 2) {
//   console.log(i);
// }
// const studentRow = [
//   ["jaja", "din", "mali"],
//   ["ali", "alba", "midun"],
//   ["bang", "sufa", "nami"],
// ];

// for (let row of studentRow) {
//   for (let pelajar of row) {
//     console.log(pelajar);
//   }
// }
// // for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// let Maksimal = parseInt(prompt("Masukan Nilai maksimal!"));
// while (!Maksimal) {
//   Maksimal = parseInt(prompt("Masukan Nilai Maksimal"));
// }

// const targetNum = Math.floor(Math.random() * Maksimal) + 1;
// console.log(targetNum);

// let tebakan = parseInt(prompt("Coba Tebak angka ini?"));

// while (parseInt(tebakan) !== targetNum) {
//   if (tebakan > targetNum) {
//     tebakan = prompt("Tebakan Terlalu Tinggi! Coba lagi");
//   } else {
//     tebakan = prompt("Tebakan Terlalu Rendah, Ayo lagi!");
//   }
// }
// alert(`Selamat Tebakan Anda Betul! angka tersembunyi adalah #${tebakan}`);

// const warna = ["Merah", "Kuning", "Biru", "Coklat"];

// for (let color of warna) {
//   console.log(`Warna ${color}`);
// }

// const usia = {
//   brim: 18,
//   musi: 19,
//   ilah: 20,
//   mursi: 90,
//   uli: 10,
//   musu: 19,
// };

// for (let umur in usia) {
//   console.log(`${umur} memiliki skor ${usia[umur]}`);
// }

// let total = 0;
// let scores = Object.values(usia);
// for (let score of scores) {
//   total += score;
// }

// console.log(total / scores.length);

// function LemparDadu() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }

// function multiply(a, b) {
//   let hasil = a * b;
//   console.log(hasil);
//   return;
// }

// multiply(100, 12);

// function Myname(name) {
//   console.log(`hai ${name} selamat memulai hari!!!!!`);
// }

// Myname("ahmad");

// function greet(kau) {
//   console.log(`Hi, ${kau}`);
// }

// greet("ahmad");

// function Lingkaran(a) {
//   const luas = Math.PI * a * a;
//   console.log(luas);
// }

// Lingkaran(17);

// function penjumlahan(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "bukan angka";
//   }
//   return a + b;
// }

// let tinggi = 19;
// if (tinggi > 5) {
//   let lebar = 10;
//   console.log(lebar);
// }
// console.log(tinggi);

// function myfunc() {
//   //ini fungsi biasa
//   console.log("hello");
//   return "hi";
// }

// const myMath = {
//   //ini merupakan method
//   perkalian: function (x, y) {
//     return x * y;
//   },
//   pertambahan: function (x, y) {
//     return x + y;
//   },
//   pembagian: function (x, y) {
//     return x / y;
//   },
// };

// console.log(myMath.perkalian(20, 10));

// const saya = {
//   nama: "ahmad",
//   hobi: "membaca",
//   kenalan: function () {
//     return `hai, saya ${this.nama}. hobi saya adalah ${this.hobi}`; //This keyword digunakan untuk membuat mendeklarsasi kan variabel dengan nama yang sama
//   },
// };

// try {
//   saya.kenalan(); //method kenalan tidak aktif karena terdapat coment diatas
// } catch {
//   console.log("Eror bos");
// }

// function bersuara(snd) {
//   //tipe data string
//   try {
//     console.log(snd.toUpperCase());
//   } catch (erorr) {
//     //akan diekseskusi jika terdapat kesalahan
//     console.log(erorr);
//     console.log("Silakan masukan tipe data string");
//   }
// }

// const number = [1, 2, 3, 4, 56, 72, 625, 262, 6254];
// number.forEach(function (angka) {
//   //forEach digunakan untuk memangil data array sekaligus
//   console.log(angka);
// });

// number.forEach(function (mod) {
//   //akan memunculkan angka yang dapat dibagi sisa bagi 2
//   if (mod % 2 === 0) {
//     console.log(mod);
//   }
// });
// console.log(number[3]);

// const anime = [
//   {
//     title: "hunterxhunter",
//     rating: 80,
//     year: 2008,
//   },
//   {
//     title: "monster",
//     rating: 90,
//     year: 1990,
//   },
//   {
//     title: "nogamenolife", //forEach
//     rating: 40,
//     year: 2013,
//   },
//   {
//     title: "one piece",
//     rating: 100,
//     year: 1990,
//   },
// ];

// anime.forEach(function (animes) {
//   console.log(`${animes.title} - ${animes.rating}/100`);
// });

// const expresi = ["ahmad", "nurdin", "yanto"];
// const TabExpresi = expresi.map(function (expr) {
//   return expr.toUpperCase();
// });
// expresi; // sesuai dengan pemanggilan array pertama
// TabExpresi; //array sudah dimodifikasi isi data menjadi KAPITAL

// const perpangkatan = (x) => {
//   //arrow fungsi digunakan untuk kita tidak memakai keyword function
//   return x * x;
// };

// const random = () => { //arrow function
//   return Math.floor(Math.random() * 100);
// };

// const multiply = (a, b) => a * b; //return implisif menggunakan arrow function digunakan agar mempersingkat codinga (tidak menggunakan keyword return)

// console.log("hai ahmad");
// setTimeout(() => {
//   //setTimeout digunakan untuk menampilkan pesan dalam beberapa waktu disini 6 detik
//   console.log("aku disini, kamu dimana?");
// }, 6000);
// console.log("bang!!!");

// const interval = setInterval(() => {
//   //setInterval digunakan untuk menampilkan pesan secara berulang ulang
//   console.log(Math.floor(Math.random() * 10));
// }, 2000);

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const ganjil = angka.filter((n) => { //memfilter data pada value array
//   return n % 2 === 1;
// });

// const animeBagus = anime.filter((anime) => anime.rating >= 85); //memfilter data array anime yang lebih dari 85

// const nilai = [10, 70, 88, 90, 4, 85]; //every method digunakan untuk mengembalikan nilai jika nilai sesuai dengan data array
// const Lulus = nilai.every((score) => score <= 100); //akan mengeksekusi karena data array kurang dari 100

// const isAnime = anime.some((animes) => animes.rating <= 50); // akan mengeksekusi karena terdapat anime yang rating nya kurang dari 50 yaitu 40

// const harga = [2000, 50000, 30000, 14000, 1500];
// const total = harga.reduce((hargaTerkini, hargaSatuan) => {
//   return hargaTerkini + hargaSatuan; /*CONTOH REDUCE
//   Proses 1 2000 + 50000 = 52000
//   Proses 2 52000 + 30000 = 82000
//   Proses 3 82000 + 14000 = 96000
//   Proses 4 96000 + 1500 = 97500 yang dieksekusi adalah 97500
//   */
// });

// const bestAnime = anime.reduce((bestAnime, currentAnime) => {
//   // console.log(bestAnime, currentAnime);
//   if (currentAnime.rating > bestAnime.rating) {
//     return currentAnime;
//   }
//   return bestAnime; //memunculkan anime one piece karena rating nya lebih besar dari anime lain
// });

// const person = {
//   first: "ahmad",
//   last: "nurdin",
//   fullname: function () {
//     return `${this.first} ${this.last}`;
//   },
// };

// function LemparDadu(sisi = 2) {
//   //default value pada function berguna untuk menampilkan fungsi tanpa parameter
//   return Math.floor(Math.random() * sisi) + 1;
// }

// const angka = [1, 2, 3, 4, 5]; //spread operator keyword menggunakan titik tiga
// Math.max(...angka);

// const nama = ["ahmad", "nurdin", "alfarizi", "yanto", "udin", "ruby", "nadia"];
// console.log(...angka, ...nama); //menggabungkan satu array ke lebi array

// const user = {
//   nama: "ahmad",
//   email: "ahmanurdin@gmail.com",
//   role: "admin",
// };

// const userBaru = { ...user, password: "udin123", id: "123" }; //menggabungkan satu object ke lebih object

// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

// const pemenang = (gold, silver, bronze, ...sisa) => {
//   // rest param digunakan jika malas membuat paramater dengan banyak. menggunaka spread operator
//   console.log(`Selamat kamu mendapat mendali ${gold}`);
//   console.log(`Selamat kamu mendapat mendali ${silver}`);
//   console.log(`Selamat kamu mendapat mendali ${bronze}`);
//   console.log(`Peserta lainnya ${sisa}`);
// };

// const [gold, silver, bronze, ...peserta] = nama; //destructing digunakan untuk membuka nilai pada array atau object

// const { nama, email } = user; //destructing pada object

// const userAndrole = ({ nama, role }) => {
//   return `${nama} ${role}`;
// };

// const animes = anime.map(({ title, year, rating }) => {
//   return `${title} (${year})rating ${rating}`;
// }); //destructing pada parameter
