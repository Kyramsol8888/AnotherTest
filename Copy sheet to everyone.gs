function addInvoiceSheetToBuyer(link) {
  if (link[1] == true) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Инвойс")
    var targetSpreadsheet = SpreadsheetApp.openByUrl(link[0])
    
    targetSpreadsheet.deleteSheet(targetSpreadsheet.getSheetByName("Инвойс"))
    sheet.copyTo(targetSpreadsheet).setName("Инвойс")
  }

}
