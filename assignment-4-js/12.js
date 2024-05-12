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
  
  function listPrima(angkaPertama, angkaKedua) {
    const primes = [];
  
    // Menjaga agar angkaPertama tidak melebihi angkaKedua
    if (angkaPertama > angkaKedua) {
      [angkaPertama, angkaKedua] = [angkaKedua, angkaPertama];
    }
  
    // Iterasi dari angkaPertama hingga angkaKedua untuk mencari bilangan prima.
    for (let i = angkaPertama; i <= angkaKedua; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    return primes;
  }
  
  // Test cases
  console.log(listPrima(1, 5)); // [2, 3, 5]
  console.log(listPrima(5, 10)); // [5, 7]
  console.log(listPrima(10, 20)); // [11, 13, 17, 19]
  