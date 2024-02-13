function TheLongestWord(str) {
    
    let maxLength = 0;
    let words = str.split(' ');
    
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
  
  console.log(TheLongestWord("The quick brown fox jumped over the lazy dog"));
  console.log(TheLongestWord("May the force be with you")); 
  