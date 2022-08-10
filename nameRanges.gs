function createNamedRanges(link) {
  if (link[1] == true) {
    
    var workSheet = SpreadsheetApp.openByUrl(link[0])
    var namedRanges = workSheet.getNamedRanges();
    for (var i = 0; i < namedRanges.length; i++) {
      namedRanges[i].remove();
    }
    workSheet.setNamedRange("veronaOffers", workSheet.getRange("Буфер!Q1:V"))
    workSheet.setNamedRange("payments", workSheet.getRange("Буфер!X1:AB"))
    workSheet.setNamedRange("apps", workSheet.getRange("Буфер!AC1:AE"))
    workSheet.setNamedRange("businnesCentres", workSheet.getRange("Буфер!AG1:AI"))
    workSheet.setNamedRange("offersBuyers", workSheet.getRange("Буфер!AK1:AM"))
  }
}