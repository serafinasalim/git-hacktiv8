function reverseString(str) {
    // Membagi string menjadi array karakter, membalikkan array tersebut, dan menggabungkan kembali menjadi string.
    return str.split('').reverse().join('');
  }
  
  // Test cases
  console.log(reverseString("Hello World and Coders")); // sredoC dna dlroW olleH
  console.log(reverseString("John Doe")); // eoD nhoJ
  console.log(reverseString("I am a bookworm")); // mrowkoob a ma I
  console.log(reverseString("Coding is my hobby")); // ybboh ym si gnidoC
  console.log(reverseString("Super")); // repuS
  