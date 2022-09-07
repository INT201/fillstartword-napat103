const { template } = require('@babel/core')

function fillStartWorld1(startWord, word) {
  return console.log(word == null||undefined? undefined:(word.slice(0, startWord.length)==startWord? word:startWord+word))
}

fillStartWorld1('12','arm12')
fillStartWorld1('12', '12arm')
fillStartWorld1('world', 'startworld')
fillStartWorld1('start', 'startWord')
fillStartWorld1('start', 'start')
fillStartWorld1('JS', 'beginning')
fillStartWorld1('start', null)
fillStartWorld1('start', undefined)

module.exports = fillStartWord
