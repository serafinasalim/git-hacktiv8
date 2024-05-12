function threeStepAB(str) {
    // Mengubah string menjadi array karakter untuk mempermudah pemrosesan.
    const characters = str.split('');
  
    // Melakukan iterasi untuk mencari karakter 'a' dan 'b' yang memiliki jarak 3 karakter lain.
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === 'a') {
        // Jika ditemukan karakter 'a', periksa karakter 3 langkah ke depan untuk 'b'.
        for (let j = i + 1; j < characters.length; j++) {
          if (characters[j] === 'b' && j - i === 4) {
            return true;
          }
        }
      }
    }
    // Jika tidak ditemukan, kembalikan false.
    return false;
  }
  
  // Test cases
  console.log(threeStepAB("lane borrowed")); // true
  console.log(threeStepAB("i am sick")); // false
  console.log(threeStepAB("you are boring")); // true
  console.log(threeStepAB("barbarian")); // seharusnya false tapi disoal true??
  console.log(threeStepAB("bacon and meat")); // false
  