//////////////REGEX///////////////

let string = '1 megérett a m1gy';

// how to create a regex a)
const regex = /1/g;
//console.log(string.replace(regex, '2'));

// how to create a regex b)
const regex2 = new RegExp(/1/, 'g'); //1st param regex, 2nd "regex flag"
//console.log(string.replace(regex2, '222'));

// flags g - global, i - csae insensitive, gi - blobal + case insensitive

//character sets []
let string2 = ' csacska macska Whiskas-t eszik';
//console.log(string2.replace(/[csm]acska/g, 'replaced'));

//Ranges
//console.log(string2.replace(/[cs-m]acska/g, 'replaced')); //magyar karaktereknél úgy tűnik nem oké

let string3 = 'ép, kép, lép, szép, nép répa asdfgh, asasasasasasa';
//console.log(string3.replace(/[a-z]ép/g, 'replaced')); // ép nincs benne, mert az ép szó előtt nincs más karakter

//repeating characters --> + *
let string4 = 'the fat cat rans down the street , mouse fatcat, whatever';
//console.log(string4.replace(/e+/g, 'replaced'));
//console.log(string4.replace(/re*/g, 'replaced'));

// repeat[something]{for x times} ie 5 character words
//console.log(string4.replace(/[a-z]{5}/g, 'replaced')); //???

//excluding: ^
//console.log(string3.replace(/[^k]ép/g, 'replaced'));

// . anything but a new line
// ? - optional character before ?

//Metacharacters in regex:
//  \d - matches any digits - same as [0-9]
// \w any words, nums, underscores etc
// \s  space, tab, any whitespace characters
