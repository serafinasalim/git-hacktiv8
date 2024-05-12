function urutHuruf(text) {
    // Mengubah teks menjadi array karakter, mengurutkan array tersebut, dan menggabungkan kembali menjadi string.
    return text.split('').sort().join('');
  }
  
  // Test cases
  console.log(urutHuruf("halo")); // ahlo
  console.log(urutHuruf("qwerty")); // ertwqy
  console.log(urutHuruf("qwertyuiopasdfghjklzxcvbnm")); // abcdefghijklmnopqrstuvwxyz
  