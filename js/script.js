// Membuat Function untuk membuat bilangan random
// lalu Menangkap pilihan computer
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "kertas";
}

// Rules dari Game Suwit
// Membuat function yang berisikan 2 parameter (pilihan player / computer)
// kondisi rules agar menyimpulkan hasil pilihan suwit
function getHasil(comp, player) {
  if (player == comp) return "SERI !";
  if (player == "batu") return comp == "gunting" ? "MENANG!" : "KALAH!";
  if (player == "gunting") return comp == "batu" ? "KALAH!" : "MENANG!";
  if (player == "kertas") return comp == "gunting" ? "KALAH!" : "MENANG!";
}

//Membuat function acak gambar agar terkesan computer memilih secara random

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// Membuat Hasil output dari pilihan computer dan player

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
//
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
//
// const pOrang = document.querySelector(".orang");
//
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
//
// const pSemut = document.querySelector(".semut");
//
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
