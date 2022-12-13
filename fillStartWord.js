const { template } = require('@babel/core')

function fillStartWorld(startWord, word) {
  if (word === null || word === undefined) return undefined
  if (startWord === word.slice(0, startWord.length)) return word
  return startWord + word
}

module.exports = fillStartWorld
