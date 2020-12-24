//////////////REGEX///////////////

let string = '1 megérett a m1gy';

// How to create a regex a)
const regex = /1/g;
console.log(string.replace(regex, '2'));

// How to create a regex b)
const regex2 = new RegExp(/1/, 'g'); //1st param: regex, 2nd param: 'regex flag'
console.log(string.replace(regex2, '222'));

// Flags: g - global, i - case insensitive, gi - global + case insensitive

// Character sets []
let string2 = ' csacska macska Whiskas-t eszik';
console.log(string2.replace(/[csm]acska/g, 'replaced'));

// Ranges [x-y]
console.log(string2.replace(/[cs-m]acska/g, 'replaced')); //not ok for HUN letters ( cs )

let string3 = 'ép, kép, lép, szép, nép répa asdfgh, asasasasasasa';
console.log(string3.replace(/[a-z]ép/g, 'replaced'));

// Repeating characters --> + *
let string4 = 'the fat cat rans down the street , mouse fatcat, whatever';
console.log(string4.replace(/e+/g, 'replaced'));
console.log(string4.replace(/re*/g, 'replaced'));

// Repeat[something]{for x times} i.e. 5 character words
console.log(string4.replace(/[a-z]{5}/g, 'replaced')); //???

// Excluding: ^
console.log(string3.replace(/[^k]ép/g, 'replaced'));

// Anything but a new line: .
let stringLong = ' hello hi hello hello\n haliho helloka hello valami asdfgh';
console.log(stringLong.replace(/hello./g, 'replaced'));

// ? - optional character before ?
let stringx = 'hello hell hallo hi hellobello hello';
console.log(stringx.replace(/hello?/g, 'replaced'));

//Start ^ , end $ patterns
//match only 5 char long words: usage- i.e. validating tel.nums
let stringnum = '12345';
console.log(stringnum.replace(/^[0-9]{5}$/g, 'replaced'));

// Alternating characters - OR  |
let string8 =
  ' Jane Hall , John Hall, John Taylor, Jane Doe, Mary Smith, Malvin';
console.log(string8.replace(/(Jane|John) Hall/g, 'replaced'));

//Metacharacters in Regex:
let stringMeta = ' asddf 1 ashd_1 _ hello 123 _8_ asasasas';

//  \d - matches any digits - same as [0-9]
console.log(stringMeta.replace(/\d/g, 'replaced'));

// \w any words, nums, underscores etc
console.log(stringMeta.replace(/\w/g, 'replaced'));

// \s  space, tab, any whitespace characters
console.log(stringMeta.replace(/\s/g, 'replaced'));

// \S anything but a whitespace
console.log(stringMeta.replace(/\s/g, 'replaced'));
