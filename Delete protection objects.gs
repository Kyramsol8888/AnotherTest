function removeProtectedRange(link) {
  if (link[1] == true) {
    var sheet = SpreadsheetApp.openByUrl(link[0]).getSheetByName("TikTok")
    var allProtections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
    for (var i = 0; i < allProtections.length; i++) {
      allProtections[i].remove()
    }
  }
}
