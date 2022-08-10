function addFormulasToFacebook(link) {
  Logger.log(link)
  if (link[1] == true) {
    var workSheet = SpreadsheetApp.openByUrl(link[0]).getSheetByName("Facebook")

    //Цена инсталов
    workSheet.getRange("T3:T").setValue("=if(and(isblank($A3);isblank($D3));\"\";$S3*ifna(query(apps; \"select AE where AD = '\"& $D3 &\"'\")))")
    //вертикаль/выплата
    workSheet.getRange("M3:M").setValue("=ifna(QUERY(veronaOffers; \"SELECT S, V WHERE T= '\"& $K3  &\"'AND U ='\"& $L3 &\"'AND R='\"& $A$1 &\"'\";0);)")
    //Доход/расход/профит/рои
    workSheet.getRange("U3").setValue("=iferror(query(A3:T; \"select N * Q, T + G, (N * Q-(T + G)), (N * Q+(T + G)*(-1))/(T + G)  label N * Q '', T + G '', (N * Q-(T + G)) '', (N * Q+(T + G)*(-1))/(T + G) ''\"))")
    //Цена лида
    workSheet.getRange("P3").setValue("=iferror(ArrayFormula(I3:I/O3:O))")
    //Цена депа
    workSheet.getRange("R3").setValue("=iferror(ArrayFormula(I3:I/Q3:Q))")



    /*rule = SpreadsheetApp.newDataValidation().requireNumberBetween(-10000, 10000).setAllowInvalid(false).build()

    workSheet.getRange("A3:A").setDataValidation(SpreadsheetApp.newDataValidation().requireDate().setAllowInvalid(false).build())
    workSheet.getRange("J3:J").setDataValidation(rule)
    workSheet.getRange("I3:I").setDataValidation(rule)
    workSheet.getRange("O3:O").setDataValidation(rule)
    workSheet.getRange("Q3:Q").setDataValidation(rule)
    workSheet.getRange("S3:S").setDataValidation(rule)

    var protections = workSheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
    for (var i = 0; i < protections.length; i++) {
      var protection = protections[i];
      if (protection.canEdit()) {
        protection.remove();
      }
    }
    protection = workSheet.getRange("T3:X").protect()
    protection.removeEditors(protection.getEditors())*/
  }
}

