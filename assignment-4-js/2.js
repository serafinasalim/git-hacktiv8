// A. Buatlah sebuah objek yang mendeskripsikan diri kalian masing-masing.
let saya = {
  nama_depan: "Serafina",
  nama_belakang: "Salim",
  hobi: ["membaca", "berenang", "memasak"],
  angka_favorit: 8,
  kacamata: true
};

// B. Tampilkan setiap propertynya menggunakan console.log setelah setiap perubahan.
console.log("Nama depan:", saya.nama_depan);
console.log("Nama belakang:", saya.nama_belakang);
console.log("Hobi:", saya.hobi);
console.log("Angka favorit:", saya.angka_favorit);
console.log("Memakai kacamata:", saya.kacamata);

// C. Cetak nama_lengkap dengan console.log.
console.log("Nama lengkap:", saya.nama_depan + " " + saya.nama_belakang);

// D. Ubah angka_favorit jadi 8.
saya.angka_favorit = 2;
console.log("Angka favorit ubah:", saya.angka_favorit);

// E. Tambahkan satu hobi "coding".
saya.hobi.push("coding");
console.log("Hobi setelah ditambahkan:", saya.hobi);

// F. Tambahkan satu property "lulusan" dengan value "Hacktiv8".
saya.lulusan = "Hacktiv8";
console.log("Property baru:", saya);

// G. Cetak semua hobi satu per satu menggunakan loop.
console.log("Daftar hobi:");
for (let i = 0; i < saya.hobi.length; i++) {
  console.log(saya.hobi[i]);
}

// H. Cetak semua key milik objek, dan cetak semua values milik objek.
console.log("Key milik objek:", Object.keys(saya));
console.log("Values milik objek:", Object.values(saya));

// I. Gunakan loop untuk cetak semua property milik objek dengan format key : values.
console.log("Property milik objek:");
for (const key in saya) {
  console.log(key + ":", saya[key]);
}