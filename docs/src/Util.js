/**
 * Retrives a variable from the data base and saves it to the session storage.
 * @param {Object} name_list A array containing the names of the variable to retrieve from database and save to SessionStorage.
 */
function saveToSessionStorage (nameList) {
  for (var i = 0; i < nameList.length; i++) {
    // eslint-disable-next-line no-undef
    var val = getValue(nameList[i])
    sessionStorage.setItem(nameList[i], val)
  }
}
