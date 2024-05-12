function gcd(firstNumber, secondNumber) {
    // Menentukan bilangan terkecil dari dua bilangan.
    let smallerNumber = Math.min(firstNumber, secondNumber);
    
    // Iterasi dari bilangan terkecil ke 1 untuk mencari FPB.
    for (let i = smallerNumber; i >= 1; i--) {
      // Jika kedua bilangan dapat dibagi habis oleh i, maka i adalah FPB.
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        return i;
      }
    }
    
    // Jika tidak ditemukan, kembalikan 1.
    return 1;
  }
  
  // Test cases
  console.log(gcd(12, 16)); // 4
  console.log(gcd(50, 40)); // 10
  console.log(gcd(22, 99)); // 11
  console.log(gcd(24, 36)); // 12
  console.log(gcd(17, 23)); // 1
  