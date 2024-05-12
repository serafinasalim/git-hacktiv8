function isPrime(number) {
    // Bilangan prima haruslah lebih besar dari 1.
    if (number <= 1) {
      return false;
    }
  
    // Iterasi dari 2 hingga akar dari angka untuk mencari faktor.
    for (let i = 2; i <= Math.sqrt(number); i++) {
      // Jika angka dapat dibagi habis oleh suatu faktor, maka bukan bilangan prima.
      if (number % i === 0) {
        return false;
      }
    }
    
    // Jika tidak ditemukan faktor selain 1 dan angka itu sendiri, maka merupakan bilangan prima.
    return true;
  }
  
  // Test cases
  console.log(isPrime(3)); // true
  console.log(isPrime(7)); // true
  console.log(isPrime(6)); // false
  console.log(isPrime(23)); // true
  console.log(isPrime(33)); // false
  