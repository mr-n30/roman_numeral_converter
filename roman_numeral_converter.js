function convertToThousandths(numString) {
  // Variable for storing entire Roman Numeral
  var numStringArray = [];

  var hundredths = convertToHundredths(numString.substring(1));
  var tenths = convertToTenths(numString.substring(2));
  var ones = convertToOnes(numString.substring(3));

  switch(parseInt(numString[0])) {
    case 9:
      numStringArray.push("MMMMMMMMM");
      numStringArray.push(hundredths);
      break;
    case 8:
      numStringArray.push("MMMMMMMM");
      numStringArray.push(hundredths);
      break;
    case 7:
      numStringArray.push("MMMMMMM");
      numStringArray.push(hundredths);
      break;
    case 6:
      numStringArray.push("MMMMMM");
      numStringArray.push(hundredths);
    case 5:
      numStringArray.push("MMMMM");
      numStringArray.push(hundredths);
      break;
    case 4:
      numStringArray.push("MMMM");
      numStringArray.push(hundredths);
      break;
    case 3:
      numStringArray.push("MMM");
      numStringArray.push(hundredths);
      break;
    case 2:
      numStringArray.push("MM");
      numStringArray.push(hundredths);
      break;
    case 1:
      numStringArray.push("M");
      numStringArray.push(hundredths);
      break;
    default:
      numStringArray.push(hundredths);
      break;
  }

  return numStringArray.toString().replace(/,/g, '');
}

function convertToHundredths(numString) {
  // Variable for storing entire Roman Numeral
  var numStringArray = [];

  var tenths = convertToTenths(numString.substring(1));

  switch(parseInt(numString[0])) {
    case 9:
      numStringArray.push("CM");
      numStringArray.push(tenths);
      break;
    case 8:
      numStringArray.push("DCCC");
      numStringArray.push(tenths);
      break;
    case 7:
      numStringArray.push("DCC");
      numStringArray.push(tenths);
      break;
    case 6:
      numStringArray.push("DC");
      numStringArray.push(tenths);
      break;
    case 5:
      numStringArray.push("D");
      numStringArray.push(tenths);
      break;
    case 4:
      numStringArray.push("CD");
      numStringArray.push(tenths);
      break;
    case 3:
      numStringArray.push("CCC");
      numStringArray.push(tenths);
      break;
    case 2:
      numStringArray.push("CC");
      numStringArray.push(tenths);
      break;
    case 1:
      numStringArray.push("C");
      numStringArray.push(tenths);
      break;
    default:
      numStringArray.push(tenths);
      break;
  }

  return numStringArray.toString().replace(/,/g, '');
}

function convertToTenths(numString) {
  // Variable for storing entire Roman Numeral
  var numStringArray = [];

  var ones = convertToOnes(numString.substring(1));

  switch(parseInt(numString[0])) {
    case 9:
      numStringArray.push("XC");
      numStringArray.push(ones);
      break;
    case 8:
      numStringArray.push("LXXX");
      numStringArray.push(ones);
      break;
    case 7:
      numStringArray.push("LXX");
      numStringArray.push(ones);
      break;
    case 6:
      numStringArray.push("LX");
      numStringArray.push(ones);
      break;
    case 5:
      numStringArray.push("L");
      numStringArray.push(ones);
      break;
    case 4:
      numStringArray.push("XL");
      numStringArray.push(ones);
      break;
    case 3:
      numStringArray.push("XXX");
      numStringArray.push(ones);
      break;
    case 2:
      numStringArray.push("XX");
      numStringArray.push(ones);
      break;
    case 1:
      numStringArray.push("X");
      numStringArray.push(ones);
      break;
    default:
      numStringArray.push(ones);
      break;
  }

  return numStringArray.toString().replace(/,/g, '');
}

function convertToOnes(numString) {
  // Variable for storing entire Roman Numeral
  var numStringArray = [];

  switch(parseInt(numString)) {
    case 9:
      numStringArray.push("IX");
      break;
    case 8:
      numStringArray.push("VIII");
      break;
    case 7:
      numStringArray.push("VII");
      break;
    case 6:
      numStringArray.push("VI");
      break;
    case 5:
      numStringArray.push("V");
      break;
    case 4:
      numStringArray.push("IV");
      break;
    case 3:
      numStringArray.push("III");
      break;
    case 2:
      numStringArray.push("II");
      break;
    case 1:
      numStringArray.push("I");
      break;
    default:
      numStringArray.push("");
      break;
  }

  return numStringArray.toString().replace(/,/g, '');
}

function convertToRoman(num) {
  var numString = num.toString();
  var numStringLength = numString.length;
  var romanNumeral = "";

  // Check if number is in thousandths 
  if (numStringLength === 4) {
    romanNumeral = convertToThousandths(numString);
  }

  // Check if number is in hundredths
  else if (numStringLength === 3) {
    romanNumeral = convertToHundredths(numString);
  }

  // Check if number is in tenths
  else if (numStringLength === 2) {
    romanNumeral = convertToTenths(numString);
  }

  // Check if number is in ones
  else if (numStringLength === 1) {
    romanNumeral = convertToOnes(numString);
  }

  return romanNumeral;
}

console.log(convertToRoman(501));
