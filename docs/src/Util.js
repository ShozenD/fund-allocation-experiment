/**
 * Retrives a variable from the data base and saves it to the session storage.
 * @param {Object} name the key of the variable to retrieve from database.
 */
function saveToSessionStorage (name) {
  // eslint-disable-next-line no-undef
  var val = getValue(name)
  sessionStorage.setItem(name, val)
}
