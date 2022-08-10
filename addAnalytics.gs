function createAnalytics(link) {
  if (link[1] == true) {
    
    var workSpreadsheet = SpreadsheetApp.openByUrl(link[0])

    workSpreadsheet.setNamedRange("facebookData", workSpreadsheet.getRange("Facebook!A3:X"))
    workSpreadsheet.setNamedRange("tiktokData", workSpreadsheet.getRange("TikTok!A3:W"))
    workSpreadsheet.setNamedRange("inappData", workSpreadsheet.getRange("'In-app'!A3:V"))
    workSpreadsheet.getSheetByName("Аналитика").getRange("A5").setValue("=ifna(Query(IF($A$2=\"TikTok\";tiktokData;IF($A$2=\"Facebook\";facebookData;IF($A$2=\"In-app\";inappData)));ifs($A$2=\"TikTok\"; 'Буфер'!$P$5;$A$2=\"Facebook\";'Буфер'!$P$6; $A$2=\"In-app\"; 'Буфер'!$P$7)))")
  }
}