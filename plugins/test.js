module.exports = {
  validateString (string) {
    console.log('test module spits out: ' + string)
    if (string.includes('a')) {
      return true
    } else {
      return false
    }
  }
}
