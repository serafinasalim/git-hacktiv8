// A. Buatlah sebuah function yang menerima sebuah angka.
function cekGanjilGenap(angka) {
    // F. Jika data yang diberikan bukan angka yang valid, bukan bertipe data number atau NaN, maka langsung return “Invalid Data”
    if (typeof angka !== 'number' || isNaN(angka)) {
      return "Invalid Data";
    }
  
    // B. Gunakanlah kondisional untuk memeriksa angka tersebut ganjil atau genap.
    if (angka % 2 === 0) {
      // C. Gunakan return untuk mengembalikan hasil pemeriksaan angka ganjil atau genap tersebut dalam format string “ganjil” atau “genap”.
      return "genap";
    } else {
      return "ganjil";
    }
  }
  
  // D. Tes dengan console log hasil function tersebut dengan angka: 2, 3, 20, 21
  console.log("Angka 2:", cekGanjilGenap(2));
  console.log("Angka 3:", cekGanjilGenap(3));
  console.log("Angka 20:", cekGanjilGenap(20));
  console.log("Angka 21:", cekGanjilGenap(21));
  console.log("Angka 'bukan angka':", cekGanjilGenap('bukan angka'));
  console.log("Angka NaN:", cekGanjilGenap(NaN));
  