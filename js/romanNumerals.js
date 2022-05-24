exports.toRoman = function(num) {
  let output = "";
  let order = ['M', 'CM', 'D', 'C','VL', 'L','XL', 'X','IX', 'V','IV', 'I'];
  let lib = {
      'I': 1,
      'IV':4,
      'V':5, 
      'IX':9, 
      'X':10,
      'XL':40,
      'L':50,
      'VL':90,
      'C': 100,
      'D':500,
      'CM':900,
      'M':1000
  };
  for (let x in order){
      while (num/lib[order[x]]>=1){
              output = output + order[x];
              num = num - lib[order[x]];
      }
  }
  return output;
};

  
  