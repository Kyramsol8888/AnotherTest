function addFormulasToInapp(link) {
  Logger.log(link)
  if (link[1] == true) {
    var workSheet = SpreadsheetApp.openByUrl(link[0]).getSheetByName("In-app")



    //вертикаль/выплата
    workSheet.getRange("K3:K").setValue("=ifna(QUERY(veronaOffers; \"SELECT S, V WHERE T= '\"& $I3  &\"' AND U ='\"& $J3 &\"' AND R='\"& $A$1 &\"'\";0);)")
    //Цена инсталов
    workSheet.getRange("R3:R").setValue("=if(and(isblank($A3);isblank($D3));\"\"; $Q3*ifna(query(apps; \"select AE where AD = '\"& $D3 &\"'\")))")
    //Доход/расход/профит/рои
    workSheet.getRange("S3").setValue("=iferror(query(A3:R; \"select L * O, R + G, (L*O-(R+G)), (L*O+(R+G)*(-1))/(R+G)  label L*O '', R + G '', (L*O-(R+G)) '', (L*O+(R+G)*(-1))/(R+G) ''\"))")
    //Цена лида
    workSheet.getRange("N3").setValue("=iferror(ArrayFormula($G$3:$G/$M$3:$M))")
    //Цена депа
    workSheet.getRange("P3").setValue("=iferror(ArrayFormula($G$3:$G/$O$3:$O))")

    /*
        rule = SpreadsheetApp.newDataValidation().requireNumberBetween(-10000, 10000).setAllowInvalid(false).build()
    
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

