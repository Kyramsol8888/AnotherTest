function addFormulasFB() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки")
  var linksRange = sheet.getDataRange().getValues()

  for (var i = 0; i < linksRange.length; i++) {
    addFormulasToFacebook(linksRange[i])

  }
}

function addFormulasTT() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки")
  var linksRange = sheet.getDataRange().getValues()

  for (var i = 0; i < linksRange.length; i++) {
    addFormulasToTikTok(linksRange[i])

  }
}

function addFormulasInapp() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки")
  var linksRange = sheet.getDataRange().getValues()

  for (var i = 0; i < linksRange.length; i++) {
    addFormulasToInapp(linksRange[i])

  }


}
function addNamedRanges() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки")
  var linksRange = sheet.getDataRange().getValues()

  for (var i = 0; i < linksRange.length; i++) {
    createNamedRanges(linksRange[i])

  }
}

function addAnalytics() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки")
  var linksRange = sheet.getDataRange().getValues()

  for (var i = 0; i < linksRange.length; i++) {
    createAnalytics(linksRange[i])

  }
}



function clearAnalytics() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки")
  var linksRange = sheet.getDataRange().getValues()

  for (var i = 0; i < linksRange.length; i++) {
    myFunction(linksRange[i])

  }
}


function removeProtectedRanges() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки")
  var linksRange = sheet.getDataRange().getValues()

  for (var i = 0; i < linksRange.length; i++) {
    removeProtectedRange(linksRange[i])

  }
}


function addInvoiceSheetToBuyers() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Таблицы баеров ссылки")
  var linksRange = sheet.getDataRange().getValues()

  for (var i = 0; i < linksRange.length; i++) {
    addInvoiceSheetToBuyer(linksRange[i])

  }
}