const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  tmpArrayNumber = [];
  tmpStringNumber = "";
  
  for (var i = 0; i < expr.length; i += 10) {
    tmpStringNumber = expr.substring(i, i + 10)
    oneNumber = ""
    for (var j = 0; j < tmpStringNumber.length; j += 2) {
      tmpOneNumber = tmpStringNumber.substring(j, j + 2)
      if (tmpOneNumber == "00") {
        oneNumber += ""
      } else if (tmpOneNumber == "11") {
        oneNumber += "-"
      } else if (tmpOneNumber == "10") {
        oneNumber += "."
      }
    }

    if (oneNumber == "") {
      oneNumber += "**********"
    }
    tmpArrayNumber.push(oneNumber)
    tmpStringNumber = ''
  }


  finalArray = []
  for (var i = 0; i < tmpArrayNumber.length; i++) {
    if (tmpArrayNumber[i] == "**********") {
      finalArray.push(" ")
      continue
    }
    for (let [key, value] of Object.entries(MORSE_TABLE)) {
      if (tmpArrayNumber[i] == key) {
        finalArray.push(value)
      }
    }
  }
  console.log(finalArray.join(""))
  return finalArray.join("")
}

module.exports = {
  decode
}