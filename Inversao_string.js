const string = "isso e uma string";
let stringReversa = "";
for (let i = string.length - 1; i >= 0; i--) {
    stringReversa += string.charAt(i);
}
console.log(stringReversa);
