// A. Buatlah sebuah function.
function cetakTanggal() {
    // B. Function tersebut akan mencetak tanggal sekarang ketika dipanggil.
    const now = new Date();
    const tanggal = now.getDate();
    const bulan = now.getMonth() + 1; // Perlu ditambah 1 karena bulan dimulai dari 0 (Januari).
    const tahun = now.getFullYear();
    
    // Cetaklah hasil dari function tersebut.
    console.log("Tanggal hari ini:", tanggal + "-" + bulan + "-" + tahun);
  }
  
  // Panggil function cetakTanggal untuk mencetak tanggal sekarang.
  cetakTanggal();

  // A. Buatlah function berikutnya.
function tanggalSekarang() {
    // B. Function tersebut memberikan tanggal sekarang ketika dipanggil.
    const now = new Date();
    const tanggal = now.getDate();
    const bulan = now.getMonth() + 1; // Perlu ditambah 1 karena bulan dimulai dari 0 (Januari).
    const tahun = now.getFullYear();
  
    return `${tanggal}-${bulan}-${tahun}`;
  }
  
  // C. Cetaklah hasil dari function tersebut.
  console.log("Tanggal hari ini:", tanggalSekarang());