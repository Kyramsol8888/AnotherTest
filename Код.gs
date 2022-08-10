function getBuyersNameByID(fileId) {
  a = SpreadsheetApp.openById(fileId).getName().split(" ")
  return a[1]
}