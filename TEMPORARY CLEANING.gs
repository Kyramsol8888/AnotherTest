function myFunction(link) {
  if (link[1] == true) {

    var sheet = SpreadsheetApp.openByUrl(link[0]).getSheetByName("Аналитика")
    sheet.deleteRows(51, sheet.getMaxRows() - 51)
  }

}
