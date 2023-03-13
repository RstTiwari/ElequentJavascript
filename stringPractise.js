// String Methods CheatSheet

let string = "i love's india lov o"
let reg = /lov[aA-zZ]/g

console.log(string.charAt(2))  // l
console.log(string.charCodeAt(5)) // 101
console.log(string.codePointAt(5)) // 101
console.log(string.concat(string))  //i love indiai love india
console.log(string.endsWith('love')) // false
console.log(string.includes("lov e"))  //true
 console.log(string.indexOf('s' )) // -1 as no value foud after that
// console.log(string.lastIndexOf('o'))  // 0 as found at 0 before 5th position
 console.log(string.match(reg));  // [''e' ,'i','n','d' ,'i','a']
 let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
 console.log(str1.match(/[ROHIT]/gi))

 const paragraph = "The quick brown fox jumps over the lazy dog. It barked."
 const capturingRegex = /(?<animal>fox|cat|dog) jumps over/;
 console.log(paragraph.match(capturingRegex))
 let matchAll = string.matchAll(reg)

for(ele of matchAll){
    console.log(ele[0])
}

console.log(string.repeat(3))
console.log(string.replace("love" , "loveyou")) // replace(pattern , replacement)

console.log("Rohit".localeCompare("kumar"))