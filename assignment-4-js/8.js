function isAritmeticProgression(numbers) {
    // Menghitung selisih pertama dan selisih kedua untuk menentukan apakah deret aritmatika atau tidak.
    const selisihPertama = numbers[1] - numbers[0];
    const selisihKedua = numbers[2] - numbers[1];
  
    // Memeriksa apakah selisih pertama dan selisih kedua konsisten.
    if (selisihPertama === selisihKedua) {
      // Jika konsisten, maka periksa selisih antar angka berikutnya.
      for (let i = 3; i < numbers.length; i++) {
        if (numbers[i] - numbers[i - 1] !== selisihPertama) {
          return false;
        }
      }
      return true; // Jika semua selisih konsisten, maka deret aritmatika.
    } else {
      return false; // Jika tidak konsisten, bukan deret aritmatika.
    }
  }
  
  // Test cases
  console.log(isAritmeticProgression([1, 2, 3, 4, 5])); // true
  console.log(isAritmeticProgression([2, 4, 6, 12])); // false
  console.log(isAritmeticProgression([2, 4, 6, 8])); // true
  console.log(isAritmeticProgression([2, 6, 18, 54])); // true
  console.log(isAritmeticProgression([1, 2, 3, 4, 7])); // false
  