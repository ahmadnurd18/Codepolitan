// const requestcallback = (url, succes, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Error : connection Timeout");
//     } else {
//       succes(`Succes ${url} (${delay}ms)`);
//     }
//   }, delay);
// };

// requestcallback(
//   "Movieku.lol",
//   function (response) {
//     console.log("Berhasil", response);
//     requestcallback(
//       "Movieku.lol",
//       function (response) {
//         console.log("Berhasil", response);
//         requestcallback(
//           "Movieku.lol",
//           function (response) {
//             console.log("Berhasil", response);
//             requestcallback(
//               "Movieku.lol",
//               function (response) {
//                 console.log("Berhasil", response);
//               },
//               function (error) {
//                 console.log("Ini Gagal", error);
//               }
//             );
//           },
//           function (error) {
//             console.log("Ini Gagal", error);
//           }
//         );
//       },
//       function (error) {
//         console.log("Ini Gagal", error);
//       }
//     );
//   },
//   function (error) {
//     console.log("Ini Gagal", error);
//   }
// );

const requestpromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Error Conection timeout");
      } else {
        resolve(`Succes: ${url}(${delay}ms)`);
      }
    }, delay);
  });
};

async function requestHandler() {
  try {
    let result = await requestpromise("Movieku.lol");
    console.log(result);
  } catch (error) {
    console.log(`Pesan erorr ${error}`);
  }
}

// requestpromise("Movie.com")
//   .then((response) => {
//     console.log("Succes", response);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// requestpromise("Movieku.lol")
//   .then((result) => {
//     console.log(result);
//     console.log("Page 1");
//     return requestpromise("Movieku.lol");
//   })
//   .then(() => {
//     console.log("Page 2");
//     return requestpromise("Movieku.lol");
//   })
//   .then(() => {
//     console.log("Page 3");
//     return requestpromise("Movieku.lol");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
